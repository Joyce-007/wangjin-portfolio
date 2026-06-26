import { ArrowRight, ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className={`group grid overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-sm backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:shadow-lift ${project.featured ? 'lg:grid-cols-[0.94fr_1.06fr] lg:col-span-2' : ''}`}>
      <div className="relative min-h-[260px] overflow-hidden bg-blush">
        <img src={project.cover} alt={`${project.title} 项目封面`} className="h-full min-h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
        {project.featured && <span className="absolute left-4 top-4 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-berry shadow-sm backdrop-blur-md">Featured Digital Project</span>}
      </div>

      <div className="flex flex-col justify-between p-6 sm:p-7">
        <div>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 5).map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mt-5 text-2xl font-semibold leading-tight text-ink sm:text-3xl">{project.title}</h3>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-berry">{project.english}</p>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{project.summary}</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {project.metrics.slice(0, 4).map((item) => (
              <span key={item} className="rounded-2xl bg-white/75 px-4 py-3 text-sm font-semibold text-muted">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" className="button-primary" onClick={onOpen}>
            查看项目详情
            <ArrowRight size={18} />
          </button>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-secondary">
              Live Demo
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
