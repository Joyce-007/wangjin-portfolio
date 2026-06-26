import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import About from './components/About';
import Awards from './components/Awards';
import BackToTop from './components/BackToTop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import Projects from './components/Projects';
import ResumeTimeline from './components/ResumeTimeline';
import Skills from './components/Skills';
import type { Project } from './data/projects';

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-page-glow text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ResumeTimeline />
        <Projects onOpenProject={setActiveProject} />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <AnimatePresence>{activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}</AnimatePresence>
    </div>
  );
}
