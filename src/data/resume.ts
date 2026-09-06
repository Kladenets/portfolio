import fs from 'node:fs/promises';
import path from 'node:path';

import type { ResumeData } from '@/components/resume/resume';

export default async function getResume(): Promise<ResumeData> {
  const filePath = path.resolve('.generated/resume-public.json');
  return JSON.parse(await fs.readFile(filePath, 'utf8')) as ResumeData;
}
