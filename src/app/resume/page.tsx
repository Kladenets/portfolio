import Link from 'next/link';

import Resume from '@/components/resume/resume';
import resume from '@/data/resume-public.json';

export const metadata = {
  title: 'Resume | Kyle Kent',
  description: 'Resume for Kyle Kent, Software Engineer.',
};

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-back-link">
        <Link href="/">&larr; kylekent.dev</Link>
      </div>
      <Resume resume={resume} />
    </div>
  );
}
