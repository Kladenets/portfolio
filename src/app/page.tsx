import Contact from '@sections/contact';
import Experience from '@sections/experience';
import Introduction from '@sections/introduction';
import Projects from '@sections/projects';
import Skills from '@sections/skills';

import Footer from '@/components/footer';
import Header from '@/components/header';

export default function Home() {
  return (
    <>
      <Header />
      {/* Keep content below the transparent fixed header at every breakpoint. */}
      <main className="mt-14 h-[calc(100dvh-3.5rem)] lg:mt-0 overflow-y-scroll lg:snap-y lg:snap-mandatory scroll-smooth">
        <Introduction id="intro" />
        <Skills id="skills" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Contact id="contact" />
        <Footer />
      </main>
    </>
  );
}
