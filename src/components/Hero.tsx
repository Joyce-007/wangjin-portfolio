import { ArrowDown, Download, ExternalLink, Leaf, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { hero, links, quickBadges, stats } from '../data/profile';

const orbitLabels = [
  'Service Design',
  'UX Research',
  'Product Thinking',
  'AI Collaboration',
  'Vibe Coding',
  'Rapid Prototyping',
  'Interaction Design',
  'Gamification',
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute left-[-8rem] top-28 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-20 h-80 w-80 rounded-full bg-amber/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72 }}>
          <p className="eyebrow">Herbal Design Portfolio 2026</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">{hero.name}</h1>
          <p className="mt-5 max-w-none text-base font-semibold text-herb sm:text-lg lg:whitespace-nowrap xl:text-xl">{hero.title}</p>
          <p className="mt-8 max-w-3xl text-2xl font-semibold leading-snug text-ink sm:text-3xl">{hero.line}</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">{hero.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {hero.tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              <ArrowDown size={18} />
              查看作品
            </a>
            <a href={links.herbquest} target="_blank" rel="noreferrer" className="button-secondary">
              <ExternalLink size={18} />
              体验 HerbQuest
            </a>
            <a href={links.resume} download className="button-secondary">
              <Download size={18} />
              下载简历
            </a>
            <a href="#contact" className="button-ghost">
              <Mail size={18} />
              联系我
            </a>
          </div>

          <div className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
            {quickBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="inline-flex items-center gap-2 rounded-3xl border border-sage/30 bg-cream/70 px-3 py-3 shadow-sm backdrop-blur-xl sm:px-4">
                  <Icon size={18} className="text-gold" />
                  <span className="whitespace-pre-line text-xs font-semibold leading-5 text-ink sm:text-sm">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div className="relative" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.72, delay: 0.08 }}>
          <div className="relative mx-auto max-w-[620px] overflow-hidden rounded-[2.25rem] border border-sage/35 bg-cream/60 p-5 shadow-glass backdrop-blur-2xl sm:p-6">
            <div className="pointer-events-none absolute left-1/2 top-48 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sage/30" />
            <div className="pointer-events-none absolute left-1/2 top-48 h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold/35" />
            <div className="pointer-events-none absolute left-1/2 top-48 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/15 blur-2xl" />

            <div className="relative z-10">
              <div className="hidden h-[390px] grid-cols-3 grid-rows-3 items-center gap-3 lg:grid">
                <OrbitLabel label="Service Design" className="justify-self-start self-end" />
                <OrbitLabel label="UX Research" className="justify-self-center self-start" />
                <OrbitLabel label="Product Thinking" className="justify-self-end self-end" />
                <OrbitLabel label="AI Collaboration" className="justify-self-start self-center" />
                <div className="relative flex h-48 w-48 items-center justify-center justify-self-center rounded-full border border-sage/35 bg-ivory/85 shadow-glass backdrop-blur-xl">
                  <div className="absolute inset-5 rounded-full border border-gold/20" />
                  <img src="./assets/projects/herbquest/logo.png" alt="草本寻味 HerbQuest Logo" className="relative z-10 h-28 w-28 rounded-[1.75rem] object-cover shadow-lift" loading="lazy" />
                </div>
                <OrbitLabel label="Vibe Coding" className="justify-self-end self-center" />
                <OrbitLabel label="Interaction Design" className="justify-self-start self-start" />
                <OrbitLabel label="Gamification" className="justify-self-center self-end" />
                <OrbitLabel label="Rapid Prototyping" className="justify-self-end self-start" />
              </div>

              <div className="flex flex-col items-center gap-4 lg:hidden">
                <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-sage/35 bg-ivory/85 shadow-glass backdrop-blur-xl">
                  <div className="absolute inset-6 rounded-full border border-gold/20" />
                  <img src="./assets/projects/herbquest/logo.png" alt="草本寻味 HerbQuest Logo" className="relative z-10 h-36 w-36 rounded-[2rem] object-cover shadow-lift" loading="lazy" />
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {orbitLabels.map((label) => (
                    <span key={label} className="tag">
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 w-full rounded-[1.75rem] border border-sage/30 bg-cream/78 p-5 backdrop-blur-xl lg:mt-0">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-herb text-white">
                    <Leaf size={20} />
                  </span>
                  <div>
                    <p className="eyebrow">Featured Digital Project</p>
                    <h2 className="text-2xl font-semibold text-ink">草本寻味 HerbQuest</h2>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">一个面向中草药饮品认知的游戏化互动网页，将图鉴、问答、推荐与认知挑战结合，也作为 AI 协作和 vibe coding 快速验证的网页 demo。</p>
                <a href={links.herbquest} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-herb hover:text-pine">
                  Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-sage/30 bg-cream/70 p-4 text-center shadow-sm backdrop-blur-xl">
                <p className="text-2xl font-semibold text-herb">{item.value}</p>
                <p className="mt-1 text-xs leading-5 text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl rounded-3xl border border-sage/30 bg-cream/60 p-5 text-sm leading-7 text-muted shadow-sm backdrop-blur-xl sm:p-6">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-1 shrink-0 text-gold" size={18} />
          <p>{hero.proof}</p>
        </div>
      </div>
    </section>
  );
}

function OrbitLabel({ label, className }: { label: string; className?: string }) {
  return <span className={`orbit-card ${className ?? ''}`}>{label}</span>;
}
