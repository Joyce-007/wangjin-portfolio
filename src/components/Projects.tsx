import { useMemo, useState } from 'react';
import { ExternalLink, SlidersHorizontal } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { projectCategories, projects, type Project, type ProjectCategory } from '../data/projects';
import { links } from '../data/profile';

type ProjectsProps = {
  onOpenProject: (project: Project) => void;
};

export default function Projects({ onOpenProject }: ProjectsProps) {
  const [category, setCategory] = useState<ProjectCategory>('All');
  const visibleProjects = useMemo(() => {
    if (category === 'All') return projects;
    return projects.filter((project) => project.categories.includes(category));
  }, [category]);

  return (
    <AnimatedSection id="projects">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeader
          eyebrow="Projects"
          title="项目作品，以问题、方法和成果组织"
          intro="重点展示服务设计、用户研究、产品运营、空间体验、视觉传播和数字交互项目。HerbQuest 作为可访问数字产品原型置于首位。"
        />
        <a href={links.herbquest} target="_blank" rel="noreferrer" className="button-primary mb-10 w-fit">
          <ExternalLink size={18} />
          HerbQuest Live Demo
        </a>
      </div>

      <div className="mb-8 flex items-center gap-3 overflow-x-auto rounded-full border border-white/70 bg-white/60 p-2 shadow-sm backdrop-blur-xl">
        <SlidersHorizontal size={18} className="ml-2 shrink-0 text-berry" />
        {projectCategories.map((item) => (
          <button
            key={item}
            type="button"
            className={`filter-chip ${category === item ? 'filter-chip-active' : ''}`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={() => onOpenProject(project)} />
        ))}
      </div>
    </AnimatedSection>
  );
}
