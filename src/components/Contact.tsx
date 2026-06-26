import { Check, Copy, Download, ExternalLink, Mail } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { contactCards, links } from '../data/profile';

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyValue = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied('复制失败，请手动复制');
      window.setTimeout(() => setCopied(null), 2200);
    }
  };

  return (
    <AnimatedSection id="contact" className="pb-24">
      <SectionHeader
        eyebrow="Contact"
        title="欢迎联系我，聊聊产品、服务与体验设计"
        intro="我期待产品经理实习、AI 产品相关岗位、产品运营、服务设计、用户研究、文化创意产品策划与数字交互方向的机会，也希望将 AI 工具协作与 vibe coding 的原型能力带入真实业务场景。"
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-glass backdrop-blur-2xl sm:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.label} className="rounded-[1.5rem] border border-rose/20 bg-white/70 p-5">
                  <Icon size={20} className="text-berry" />
                  <p className="mt-4 text-sm font-semibold text-muted">{card.label}</p>
                  <p className="mt-2 break-words text-base font-semibold text-ink">{card.value}</p>
                  <button type="button" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-berry" onClick={() => copyValue(card.label, card.value)}>
                    <Copy size={16} />
                    {card.action}
                  </button>
                </article>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={links.resume} download className="button-primary">
              <Download size={18} />
              下载简历 PDF
            </a>
            <a href={links.portfolio} download className="button-secondary">
              <Download size={18} />
              下载作品集 PDF
            </a>
            <a href={links.herbquest} target="_blank" rel="noreferrer" className="button-secondary">
              <ExternalLink size={18} />
              体验 HerbQuest
            </a>
            <a href={`mailto:${contactCards[0].value}`} className="button-ghost">
              <Mail size={18} />
              发送邮件
            </a>
          </div>

          {copied && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-mint/20 px-4 py-2 text-sm font-semibold text-ink">
              <Check size={16} />
              {copied === '复制失败，请手动复制' ? copied : `${copied} 已复制`}
            </div>
          )}
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-gradient-to-br from-berry/90 via-rose/80 to-violet/80 p-8 text-white shadow-glass">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">Open To</p>
          <h3 className="mt-5 text-3xl font-semibold leading-tight">AI 产品、服务、体验与文化创新方向机会</h3>
          <p className="mt-5 text-sm leading-7 text-white/80">
            我希望把调研分析、设计叙事、服务蓝图、数字原型与项目推进能力带到更真实的业务场景中，也希望持续探索 AI 协作与快速原型验证在产品工作中的实际价值。
          </p>
          <div className="mt-8 grid gap-3 text-sm font-semibold">
            <span className="rounded-2xl bg-white/20 px-4 py-3">AI Product Manager Intern</span>
            <span className="rounded-2xl bg-white/20 px-4 py-3">Product Manager Intern</span>
            <span className="rounded-2xl bg-white/20 px-4 py-3">Product Operation Intern</span>
            <span className="rounded-2xl bg-white/20 px-4 py-3">Service / UX / User Research</span>
            <span className="rounded-2xl bg-white/20 px-4 py-3">Digital Interaction / Prototype Design</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
