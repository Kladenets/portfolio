import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const gistUrl =
  process.env.RESUME_GIST_URL ??
  'https://gist.githubusercontent.com/Kladenets/58e9ff9ad9dc8fc33a48961b4e18b4d9/raw/resume.json';
const outputPath = path.resolve('.generated/resume-public.json');
const require = createRequire(import.meta.url);

const resumeSchema = require('@jsonresume/schema') as {
  validate: (
    resume: unknown,
    callback: (errors: unknown, valid: boolean) => void
  ) => void;
};

function normalizeForSchemaValidation(resume: Record<string, unknown>) {
  const validationResume = JSON.parse(JSON.stringify(resume)) as Record<
    string,
    unknown
  >;

  for (const sectionName of ['work', 'projects', 'education']) {
    const section = validationResume[sectionName];
    if (!Array.isArray(section)) continue;

    for (const entry of section) {
      if (
        entry &&
        typeof entry === 'object' &&
        (entry as Record<string, unknown>).endDate === 'Present'
      ) {
        delete (entry as Record<string, unknown>).endDate;
      }
    }
  }

  return validationResume;
}

async function validateResume(resume: Record<string, unknown>) {
  await new Promise<void>((resolve, reject) => {
    resumeSchema.validate(
      normalizeForSchemaValidation(resume),
      (errors, valid) => {
        if (!valid) {
          reject(
            new Error(
              `Resume JSON failed schema validation: ${JSON.stringify(errors)}`
            )
          );
          return;
        }

        resolve();
      }
    );
  });
}

async function main() {
  const response = await fetch(gistUrl, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(
      `Resume Gist request failed with ${response.status} ${response.statusText}`
    );
  }

  const resume = JSON.parse(await response.text()) as Record<string, unknown>;
  await validateResume(resume);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, `${JSON.stringify(resume, null, 2)}\n`);
  console.log(`Fetched and validated resume data from ${gistUrl}`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
