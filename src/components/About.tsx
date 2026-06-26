import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { profileFacts, strengths } from '../data/profile';

export default function About() {
  return (
    <AnimatedSection id="about">
      <SectionHeader
        eyebrow="About"
        title="复合背景下的服务设计与数字交互实践"
        intro="我具备环境设计与服务设计的交叉背景，关注用户、空间与社会系统之间的关系。过往项目中，我持续围绕真实场景展开调研，从用户访谈、问卷分析、用户画像、旅程图与服务蓝图中提炼需求，并进一步转化为系统化的服务方案、产品功能和空间体验设计。"
      />

      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-glass backdrop-blur-2xl">
          <div className="flex aspect-[4/5] flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-blush via-white to-skyglass p-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-berry">Wang Jin</p>
              <h3 className="mt-4 text-4xl font-semibold leading-tight text-ink">王瑾</h3>
              <p className="mt-4 text-base leading-7 text-muted">四川美术学院技术文化与社会创新方向研究生，环境设计与服务设计复合背景。</p>
            </div>
            <div className="grid gap-3">
              {profileFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label} className="rounded-3xl bg-white/70 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-berry">
                      <Icon size={17} />
                      {fact.label}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted">{fact.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-glass backdrop-blur-2xl sm:p-8">
            <p className="text-base leading-8 text-muted">
              在实习与项目实践中，我参与过 AI 光影产品策划、文创产品规划、女性友好音乐节服务系统、智慧养老社区服务系统与乡村振兴服务设计等项目。近期，我在 FLARE 实验室围绕文旅、博物馆和教育场景梳理数字人、照片迁移、轮廓跟随、裸眼 3D 等功能模块，也将中医药饮品研究与数字交互结合，完成了「草本寻味 HerbQuest」网页原型，持续探索 AI 协作、vibe coding 与快速 demo 验证的工作方式。
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group rounded-[1.5rem] border border-white/70 bg-white/60 p-5 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-berry/90 to-violet/80 text-white">
                    <Icon size={19} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
