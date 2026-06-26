import { BriefcaseBusiness, GraduationCap, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { campus, education, experiences } from '../data/profile';

export default function ResumeTimeline() {
  return (
    <AnimatedSection id="resume">
      <SectionHeader
        eyebrow="Resume"
        title="沿着时间线看我的经历重点、推进过程与实际产出"
        intro="将教育背景、实习经历和在校项目整理为可快速扫描的时间线，帮助招聘方更直接地了解我的专业训练、参与内容、推进过程与实际产出。"
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <TimelinePanel title="教育背景" icon={<GraduationCap size={22} />}>
          {education.map((item) => (
            <TimelineItem key={item.school} title={item.school} subtitle={item.degree} period={item.period} points={item.highlights} />
          ))}
        </TimelinePanel>

        <TimelinePanel title="实习经历" icon={<BriefcaseBusiness size={22} />}>
          {experiences.map((item) => (
            <TimelineItem key={item.company} title={item.company} subtitle={item.role} period={item.period} points={item.points} />
          ))}
        </TimelinePanel>
      </div>

      <div className="mt-6">
        <TimelinePanel title="在校经历与展览实践" icon={<Sparkles size={22} />}>
          <div className="grid gap-5 lg:grid-cols-2">
            {campus.map((item) => (
              <TimelineItem key={item.title} title={item.title} subtitle={item.role} period={item.period} points={item.points} compact />
            ))}
          </div>
        </TimelinePanel>
      </div>
    </AnimatedSection>
  );
}

function TimelinePanel({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) {
  return (
    <div className="rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-glass backdrop-blur-2xl sm:p-7">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-berry to-violet text-white">{icon}</span>
        <h3 className="text-2xl font-semibold text-ink">{title}</h3>
      </div>
      <div className="grid gap-5">{children}</div>
    </div>
  );
}

function TimelineItem({ title, subtitle, period, points, compact = false }: { title: string; subtitle: string; period: string; points: string[]; compact?: boolean }) {
  return (
    <article className="relative rounded-[1.5rem] border border-rose/20 bg-white/70 p-5">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <h4 className="text-lg font-semibold text-ink">{title}</h4>
          <p className="mt-1 text-sm font-semibold text-berry">{subtitle}</p>
        </div>
        <span className="w-fit rounded-full bg-blush px-3 py-1 text-xs font-semibold text-muted">{period}</span>
      </div>
      <ul className={`mt-4 grid gap-2 ${compact ? '' : 'sm:gap-3'}`}>
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-7 text-muted">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-mint" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
