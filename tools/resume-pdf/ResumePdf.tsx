import React from 'react';
import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';

export interface PdfResumeData {
  basics?: {
    name?: string;
    label?: string;
    email?: string;
    url?: string;
    profiles?: Array<{ network?: string; url?: string }>;
  };
  skills?: Array<{ name?: string; keywords?: string[] }>;
  work?: Array<{
    name?: string;
    position?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    highlights?: string[];
  }>;
  projects?: Array<{
    name?: string;
    description?: string;
    keywords?: string[];
    url?: string;
    startDate?: string;
    endDate?: string;
  }>;
  education?: Array<{
    institution?: string;
    studyType?: string;
    area?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
  }>;
}

const styles = StyleSheet.create({
  page: {
    color: '#161313',
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    lineHeight: 1.35,
    paddingBottom: 42,
    paddingLeft: 42,
    paddingRight: 42,
    paddingTop: 42,
  },
  header: {
    borderBottomColor: '#978c78',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
    paddingBottom: 12,
  },
  headerMain: {
    flex: 1,
    paddingRight: 18,
  },
  name: {
    fontSize: 26,
    fontWeight: 700,
    marginTop: 3,
  },
  label: {
    color: '#74685a',
    fontSize: 9,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  contacts: {
    alignItems: 'flex-end',
    color: '#66595a',
    flexDirection: 'column',
    flexShrink: 0,
    width: 156,
  },
  contactText: {
    textAlign: 'right',
    width: 156,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#3f3937',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 0.8,
    paddingLeft: 6,
    textTransform: 'uppercase',
  },
  sectionTitleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 30,
    marginBottom: 8,
  },
  sectionTitleBar: {
    backgroundColor: '#8a7d6c',
    height: 30,
    marginRight: 6,
    width: 3,
  },
  skill: {
    marginBottom: 3,
  },
  muted: {
    color: '#66595a',
  },
  entry: {
    marginBottom: 10,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  entryMain: {
    flex: 1,
    paddingRight: 14,
  },
  entryTitle: {
    fontSize: 10.5,
    fontWeight: 700,
  },
  role: {
    color: '#66595a',
    marginTop: 2,
  },
  metadata: {
    alignItems: 'flex-end',
    color: '#66595a',
    flexDirection: 'column',
    flexShrink: 0,
    width: 140,
  },
  metadataText: {
    textAlign: 'right',
    width: 140,
  },
  metadataStrong: {
    color: '#161313',
    fontWeight: 700,
  },
  bullets: {
    marginTop: 6,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bullet: {
    color: '#3f3937',
    width: 12,
  },
  skillBullet: {
    color: '#3f3937',
    fontSize: 9.5,
    marginTop: 1,
    width: 16,
  },
  bulletText: {
    flex: 1,
  },
  link: {
    color: '#66595a',
    textDecoration: 'underline',
  },
});

function formatDate(value?: string) {
  if (!value || value === 'Present') return value ?? '';

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

function BulletList({ items }: { items: string[] }) {
  return (
    <View style={styles.bullets}>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function Metadata({ children }: { children: React.ReactNode }) {
  return <View style={styles.metadata}>{children}</View>;
}

function SectionTitle({ children }: { children: string }) {
  return (
    <View style={styles.sectionTitleRow}>
      <View style={styles.sectionTitleBar} />
      <Text style={styles.sectionTitle}>{children}</Text>
    </View>
  );
}

export default function ResumePdf({ resume }: { resume: PdfResumeData }) {
  const basics = resume.basics;
  const profiles = basics?.profiles?.filter((profile) => profile.url) ?? [];

  return (
    <Document
      author={basics?.name}
      title={`${basics?.name ?? 'Resume'} - Resume`}
    >
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerMain}>
            <Text style={styles.label}>
              {basics?.label ?? 'Software Engineer'}
            </Text>
            <Text style={styles.name}>{basics?.name}</Text>
          </View>
          <View style={styles.contacts}>
            {basics?.email && (
              <Text style={styles.contactText}>{basics.email}</Text>
            )}
            {basics?.url && (
              <Link src={basics.url} style={[styles.link, styles.contactText]}>
                {basics.url.replace(/^https?:\/\//, '')}
              </Link>
            )}
            {profiles.map((profile) => (
              <Link
                key={profile.url}
                src={profile.url!}
                style={[styles.link, styles.contactText]}
              >
                {profile.network}
              </Link>
            ))}
          </View>
        </View>

        {!!resume.skills?.length && (
          <View style={styles.section}>
            <SectionTitle>Skills</SectionTitle>
            {resume.skills.map((skill) => (
              <View key={skill.name} style={styles.bulletRow}>
                <Text style={[styles.skill, styles.bulletText]}>
                  <Text style={styles.muted}>{skill.name}: </Text>
                  {skill.keywords?.join(', ')}
                </Text>
              </View>
            ))}
          </View>
        )}

        {!!resume.work?.length && (
          <View style={styles.section}>
            <SectionTitle>Experience</SectionTitle>
            {resume.work.map((entry) => (
              <View
                key={`${entry.name}-${entry.startDate}`}
                style={styles.entry}
              >
                <View style={styles.entryHeader}>
                  <View style={styles.entryMain}>
                    <Text style={styles.entryTitle}>{entry.name}</Text>
                    <Text style={styles.role}>{entry.position}</Text>
                  </View>
                  <Metadata>
                    <Text style={[styles.metadataStrong, styles.metadataText]}>
                      {dateRange(entry.startDate, entry.endDate)}
                    </Text>
                    <Text style={styles.metadataText}>{entry.location}</Text>
                  </Metadata>
                </View>
                {entry.highlights?.length ? (
                  <BulletList items={entry.highlights} />
                ) : null}
              </View>
            ))}
          </View>
        )}

        {!!resume.projects?.length && (
          <View style={styles.section}>
            <SectionTitle>Projects</SectionTitle>
            {resume.projects.map((project) => (
              <View key={project.name} style={styles.entry}>
                <View style={styles.entryHeader}>
                  <View style={styles.entryMain}>
                    <Text style={styles.entryTitle}>{project.name}</Text>
                    {project.keywords?.length ? (
                      <Text style={styles.role}>
                        {project.keywords.join(', ')}
                      </Text>
                    ) : null}
                  </View>
                  <Metadata>
                    <Text style={[styles.metadataStrong, styles.metadataText]}>
                      {dateRange(project.startDate, project.endDate)}
                    </Text>
                    {project.url && (
                      <Link
                        src={project.url}
                        style={[styles.link, styles.metadataText]}
                      >
                        {project.url.replace(/^https?:\/\//, '')}
                      </Link>
                    )}
                  </Metadata>
                </View>
                {project.description ? (
                  <BulletList items={[project.description]} />
                ) : null}
              </View>
            ))}
          </View>
        )}

        {!!resume.education?.length && (
          <View style={styles.section}>
            <SectionTitle>Education</SectionTitle>
            {resume.education.map((entry) => (
              <View
                key={`${entry.institution}-${entry.startDate}`}
                style={styles.entry}
              >
                <View style={styles.entryHeader}>
                  <View style={styles.entryMain}>
                    <Text style={styles.entryTitle}>{entry.institution}</Text>
                    <Text style={styles.role}>
                      {entry.studyType && entry.area
                        ? `${entry.studyType}: ${entry.area}`
                        : entry.studyType || entry.area}
                    </Text>
                  </View>
                  <Metadata>
                    <Text style={[styles.metadataStrong, styles.metadataText]}>
                      {dateRange(entry.startDate, entry.endDate)}
                    </Text>
                    <Text style={styles.metadataText}>{entry.location}</Text>
                  </Metadata>
                </View>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
