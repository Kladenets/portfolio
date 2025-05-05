import Header from '@/components/header';
import Footer from '@/components/footer';
import Introduction from '@sections/introduction';
import Skills from '@sections/skills';
import Experience from '@sections/experience';
import Projects from '@sections/projects';
import Contact from '@sections/contact';

export default function Home() {
  return (
    <>
      <Header />
      {/* Scroll Container - takes available space */}
      <main className="flex-grow overflow-y-scroll snap-y snap-mandatory scroll-smooth scroll-pt-16">
        <Introduction id="intro" />
        <Skills id="skills" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>

      <Footer />
    </>
  );
}
