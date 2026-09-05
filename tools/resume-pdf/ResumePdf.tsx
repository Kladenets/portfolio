import React from "react";
import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

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
    color: "#161313",
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.35,
    paddingBottom: 42,
    paddingLeft: 42,
    paddingRight: 42,
    paddingTop: 42,
  },
  header: {
    borderBottomColor: "#978c78",
    borderBottomWidth: 2,
    marginBottom: 18,
    paddingBottom: 12,
  },
  name: {
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 3,
  },
  label: {
    color: "#74685a",
    fontSize: 9,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  contacts: {
    color: "#66595a",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 7,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    borderLeftColor: "#8a7d6c",
    borderLeftWidth: 3,
    color: "#3f3937",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 0.8,
    marginBottom: 8,
    paddingLeft: 6,
    textTransform: "uppercase",
  },
  skill: {
    marginBottom: 3,
  },
  muted: {
    color: "#66595a",
  },
  entry: {
    marginBottom: 10,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  entryMain: {
    flexGrow: 1,
    paddingRight: 14,
  },
  entryTitle: {
    fontSize: 10.5,
    fontWeight: 700,
  },
  role: {
    color: "#66595a",
    marginTop: 2,
  },
  metadata: {
    color: "#66595a",
    flexShrink: 0,
    textAlign: "right",
  },
  metadataStrong: {
    color: "#161313",
    fontWeight: 700,
  },
  bullets: {
    marginTop: 6,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bullet: {
    color: "#a9ad94",
    width: 10,
  },
  bulletText: {
    flexGrow: 1,
  },
  link: {
    color: "#66595a",
    textDecoration: "underline",
  },
});

function formatDate(value?: string) {
  if (!value || value === "Present") return value ?? "";

  const [year, month] = value.split("-");
  if (!month) return value;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
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
          <Text style={styles.bullet}>■</Text>
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
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

export default function ResumePdf({ resume }: { resume: PdfResumeData }) {
  const basics = resume.basics;
  const profiles = basics?.profiles?.filter((profile) => profile.url) ?? [];

  return (
    <Document
      author={basics?.name}
      title={`${basics?.name ?? "Resume"} - Resume`}
    >
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{basics?.name}</Text>
          <Text style={styles.label}>
            {basics?.label ?? "Software Engineer"}
          </Text>
          <View style={styles.contacts}>
            {basics?.email && <Text>{basics.email}</Text>}
            {basics?.url && (
              <Link src={basics.url} style={styles.link}>
                {basics.url.replace(/^https?:\/\//, "")}
              </Link>
            )}
            {profiles.map((profile) => (
              <Link key={profile.url} src={profile.url!} style={styles.link}>
                {profile.network}
              </Link>
            ))}
          </View>
        </View>

        {!!resume.skills?.length && (
          <View style={styles.section}>
            <SectionTitle>Skills</SectionTitle>
            {resume.skills.map((skill) => (
              <Text key={skill.name} style={styles.skill}>
                <Text style={styles.muted}>{skill.name}: </Text>
                {skill.keywords?.join(", ")}
              </Text>
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
                    <Text style={styles.metadataStrong}>
                      {dateRange(entry.startDate, entry.endDate)}
                    </Text>
                    <Text>{entry.location}</Text>
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
                        {project.keywords.join(", ")}
                      </Text>
                    ) : null}
                  </View>
                  <Metadata>
                    <Text style={styles.metadataStrong}>
                      {dateRange(project.startDate, project.endDate)}
                    </Text>
                    {project.url && (
                      <Link src={project.url} style={styles.link}>
                        {project.url.replace(/^https?:\/\//, "")}
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
                    <Text style={styles.metadataStrong}>
                      {dateRange(entry.startDate, entry.endDate)}
                    </Text>
                    <Text>{entry.location}</Text>
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
