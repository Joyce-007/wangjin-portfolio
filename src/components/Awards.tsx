import { Award, Trophy } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { awards } from '../data/awards';

export default function Awards() {
  return (
    <AnimatedSection id="awards">
      <SectionHeader
        eyebrow="Awards"
        title="荣誉与竞赛经历"
        intro="重点突出创新创业、文化创意设计和高校设计竞赛中的高含金量奖项，同时保留奖学金作为学习与项目投入的背书。"
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {awards.map((award) => (
          <article
            key={`${award.title}-${award.year}`}
            className={`rounded-[1.5rem] border p-5 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lift ${
              award.featured ? 'border-berry/20 bg-white/80 lg:min-h-64' : 'border-white/70 bg-white/60'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${award.featured ? 'bg-gradient-to-br from-berry to-violet text-white' : 'bg-blush text-berry'}`}>
                {award.featured ? <Trophy size={20} /> : <Award size={19} />}
              </span>
              <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-muted">{award.year}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold leading-7 text-ink">{award.title}</h3>
            <p className="mt-3 text-base font-semibold text-berry">{award.level}</p>
            <p className="mt-1 text-sm text-muted">{award.type}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {award.badges.map((badge) => (
                <span key={badge} className="tag">
                  {badge}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
