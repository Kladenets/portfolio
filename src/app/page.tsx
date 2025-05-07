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
      {/* Scroll Container - takes available space */}
      <main className="flex-grow overflow-y-scroll snap-y snap-mandatory scroll-smooth scroll-pt-14">
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
