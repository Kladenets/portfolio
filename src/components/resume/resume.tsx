import type { CSSProperties } from 'react';

import ShadowBox from '@/components/shadowBox';

import styles from './resume.module.css';

interface Basics {
  name?: string;
  email?: string;
  phone?: string;
  url?: string;
  profiles?: Array<{ network?: string; url?: string }>;
}

interface Skill {
  name?: string;
  keywords?: string[];
}

interface WorkEntry {
  name?: string;
  position?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  highlights?: string[];
}

interface Project {
  name?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  keywords?: string[];
  description?: string;
}

interface EducationEntry {
  institution?: string;
  studyType?: string;
  area?: string;
  courses?: string[];
  location?: string;
  startDate?: string;
  endDate?: string;
}

export interface ResumeData {
  basics?: Basics;
  skills?: Skill[];
  work?: WorkEntry[];
  projects?: Project[];
  education?: EducationEntry[];
}

function formatDate(value?: string) {
  if (!value || value === 'Present') return value;

  const [year, month] = value.split('-');
  if (!month) return value;

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(Number(year), Number(month) - 1));
}

function dateRange(startDate?: string, endDate?: string) {
  const start = formatDate(startDate);
  const end = formatDate(endDate);
  if (!start) return end;
  if (!end) return start;
  return `${start} - ${end}`;
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className={styles.sectionHeading} id={id}>
      {children}
    </h2>
  );
}

export default function Resume({ resume }: { resume: ResumeData }) {
  const basics = resume.basics;
  const profiles = basics?.profiles?.filter((profile) => profile.url) ?? [];
  const accentStyle = {
    '--resume-accent': 'var(--color-accent)',
  } as CSSProperties;

  return (
    <main className={styles.page} style={accentStyle}>
      <article className={styles.document}>
        <ShadowBox
          className={styles.headerBox}
          shadowBorderStyles="h-full w-full border-4 border-secondary-200 dark:border-secondary-800"
          mainBorderStyles="h-full w-full border-4 border-secondary-500 dark:border-secondary-300"
        >
          <header className={styles.header}>
            <div>
              <p className={styles.kicker}>Software Engineer</p>
              <h1>{basics?.name}</h1>
            </div>
            <address className={styles.contact}>
              {basics?.email && (
                <a href={`mailto:${basics.email}`}>{basics.email}</a>
              )}
              {basics?.url && (
                <ExternalLink href={basics.url}>
                  {basics.url.replace(/^https?:\/\//, '')}
                </ExternalLink>
              )}
              {profiles.map((profile) => (
                <ExternalLink key={profile.url} href={profile.url!}>
                  {profile.network}
                </ExternalLink>
              ))}
            </address>
          </header>
        </ShadowBox>

        {resume.skills?.length ? (
          <section className={styles.section} aria-labelledby="skills-heading">
            <SectionHeading id="skills-heading">Skills</SectionHeading>
            <div className={styles.skills}>
              {resume.skills.map((skill) => (
                <p key={skill.name}>
                  <strong>{skill.name}:</strong> {skill.keywords?.join(', ')}
                </p>
              ))}
            </div>
          </section>
        ) : null}

        {resume.work?.length ? (
          <section
            className={styles.section}
            aria-labelledby="experience-heading"
          >
            <SectionHeading id="experience-heading">Experience</SectionHeading>
            <div className={styles.entries}>
              {resume.work.map((entry) => (
                <article
                  className={styles.entry}
                  key={`${entry.name}-${entry.startDate}`}
                >
                  <div className={styles.entryHeader}>
                    <div>
                      <h3>{entry.name}</h3>
                      <p className={styles.role}>{entry.position}</p>
                    </div>
                    <div className={styles.meta}>
                      <p>{dateRange(entry.startDate, entry.endDate)}</p>
                      <p>{entry.location}</p>
                    </div>
                  </div>
                  {entry.highlights?.length ? (
                    <ul>
                      {entry.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {resume.projects?.length ? (
          <section
            className={styles.section}
            aria-labelledby="projects-heading"
          >
            <SectionHeading id="projects-heading">Projects</SectionHeading>
            <div className={styles.entries}>
              {resume.projects.map((project) => (
                <article className={styles.project} key={project.name}>
                  <div className={styles.entryHeader}>
                    <div>
                      <h3>{project.name}</h3>
                      {project.keywords?.length ? (
                        <p className={styles.role}>
                          {project.keywords.join(', ')}
                        </p>
                      ) : null}
                    </div>
                    <div className={styles.meta}>
                      {(project.startDate || project.endDate) && (
                        <p>{dateRange(project.startDate, project.endDate)}</p>
                      )}
                      {project.url && (
                        <p>
                          <ExternalLink href={project.url}>
                            {project.url.replace(/^https?:\/\//, '')}
                          </ExternalLink>
                        </p>
                      )}
                    </div>
                  </div>
                  {project.description && (
                    <ul>
                      <li>{project.description}</li>
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {resume.education?.length ? (
          <section
            className={styles.section}
            aria-labelledby="education-heading"
          >
            <SectionHeading id="education-heading">Education</SectionHeading>
            <div className={styles.entries}>
              {resume.education.map((entry) => (
                <article
                  className={styles.entryHeader}
                  key={`${entry.institution}-${entry.startDate}`}
                >
                  <div>
                    <h3>{entry.institution}</h3>
                    <p className={styles.role}>
                      {entry.studyType && entry.area
                        ? `${entry.studyType}: ${entry.area}`
                        : entry.studyType || entry.area}
                    </p>
                  </div>
                  <div className={styles.meta}>
                    <p>{dateRange(entry.startDate, entry.endDate)}</p>
                    <p>{entry.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </main>
  );
}
