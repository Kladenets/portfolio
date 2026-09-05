import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';

import React from 'react';

import type { PdfResumeData } from './ResumePdf';

const inputPath = path.resolve(
  process.argv[2] ?? 'src/data/resume-public.json'
);
const outputPath = path.resolve('public/resume.pdf');
const require = createRequire(import.meta.url);

function normalizeForSchemaValidation(resume: PdfResumeData) {
  const validationResume = JSON.parse(JSON.stringify(resume)) as PdfResumeData;

  for (const section of [
    validationResume.work,
    validationResume.projects,
    validationResume.education,
  ]) {
    for (const entry of section ?? []) {
      if (entry.endDate === 'Present') {
        delete entry.endDate;
      }
    }
  }

  return validationResume;
}

const resumeSchema = require('@jsonresume/schema') as {
  validate: (
    resume: unknown,
    callback: (errors: unknown, valid: boolean) => void
  ) => void;
};

async function main() {
  const [{ renderToFile }, { default: ResumePdf }] = await Promise.all([
    import('@react-pdf/renderer'),
    import('./ResumePdf'),
  ]);

  try {
    await fs.access(inputPath);
  } catch {
    throw new Error(`Resume JSON file does not exist: ${inputPath}`);
  }

  const resume = JSON.parse(
    await fs.readFile(inputPath, 'utf8')
  ) as PdfResumeData;

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

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  const document = React.createElement(ResumePdf, {
    resume,
  }) as unknown as Parameters<typeof renderToFile>[0];

  await renderToFile(document, outputPath);
  console.log(`Generated ${outputPath}`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
