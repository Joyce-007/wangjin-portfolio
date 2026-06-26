import { BadgeCheck, Boxes } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { abilityTags, skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <AnimatedSection id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="能力矩阵，而不只是软件清单"
        intro="围绕求职方向拆分为研究方法、产品运营、数字交互、AI 协作与软件工具，突出从调研、结构梳理到网页原型验证的综合能力。"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-glass backdrop-blur-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blush text-berry">
                <Boxes size={20} />
              </span>
              <h3 className="text-xl font-semibold text-ink">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-glass backdrop-blur-2xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-mint to-skyglass text-ink">
            <BadgeCheck size={20} />
          </span>
          <h3 className="text-xl font-semibold text-ink">岗位相关能力标签</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {abilityTags.map((item) => (
            <span key={item} className="pill">
              {item}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
