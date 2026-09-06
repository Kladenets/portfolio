import Link from 'next/link';

import Resume from '@/components/resume/resume';
import ThemeToggle from '@/components/themeToggle';
import resume from '@/data/resume-public.json';

export const metadata = {
  title: 'Resume | Kyle Kent',
  description: 'Resume for Kyle Kent, Software Engineer.',
};

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-back-link">
        <Link href="/" className="resume-menu-button">
          &larr; kylekent.dev
        </Link>
        <div className="resume-actions">
          <a
            href="/kylekent-resume.pdf"
            download="kylekent-resume.pdf"
            className="resume-menu-button resume-download-button"
          >
            Download PDF
          </a>
          <ThemeToggle />
        </div>
      </div>
      <Resume resume={resume} />
    </div>
  );
}
