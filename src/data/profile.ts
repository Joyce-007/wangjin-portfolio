import {
  Award,
  BriefcaseBusiness,
  Brush,
  ClipboardList,
  Compass,
  Layers3,
  Lightbulb,
  Mail,
  MapPinned,
  Phone,
  Puzzle,
  Sparkles,
  UserRoundSearch,
} from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const links = {
  herbquest: 'https://joyce-007.github.io/herbquest-game/',
  resume: './assets/docs/wangjin-resume.pdf',
  portfolio: './assets/docs/wangjin-portfolio-compressed.pdf',
};

export const hero = {
  name: '王瑾 Wang Jin',
  title: '服务设计 / 用户研究 / 产品运营 / 数字交互 / AI 协作 / 环境设计',
  line: '以服务设计连接用户、空间与社会创新。',
  intro:
    '我关注用户、空间与社会系统之间的连接，擅长从真实场景中发现问题，并通过用户研究、服务设计与数字交互，将复杂需求梳理为可理解、可沟通、可推进的产品方案。近期，我在 FLARE 实验室参与 AI 光影产品策划与体验优化，结合文旅、博物馆和教育等线下场景，探索数字人、照片迁移、轮廓跟随、裸眼 3D 等功能模块的体验转化；同时也持续借助 AI 工具与 vibe coding，将研究想法快速转化为网页原型与交互 demo。',
  proof:
    '曾获第十五届“挑战杯”中国大学生创业计划竞赛重庆市特等奖并推往国赛，以及中国大学生文化创意设计大赛国一等奖、米兰设计周中国高校设计学科奖国一等奖等多项荣誉。',
  tags: [
    'Service Design',
    'UX Research',
    'Product Operation',
    'Interaction Design',
    'AI Collaboration',
    'Vibe Coding',
    'Environmental Design',
    'Social Innovation',
  ],
};

export const contact = {
  email: 'NZ18336507116@163.com',
  phone: '18336507116',
  wechat: '18336507116',
};

export const profileFacts = [
  {
    label: '当前身份',
    value: '四川美术学院 技术文化与社会创新（研一）研究生',
    icon: Sparkles,
  },
  {
    label: '基本信息',
    value: '25 岁 / 邮箱 NZ18336507116@163.com / 电话 18336507116',
    icon: Mail,
  },
  {
    label: '本科背景',
    value: '内蒙古师范大学 环境设计系（整合创新班）',
    icon: Layers3,
  },
  {
    label: '求职方向',
    value: 'AI 产品经理实习、产品经理实习、产品运营、服务设计、用户研究、数字交互、文化创意产品策划',
    icon: BriefcaseBusiness,
  },
];

export const strengths = [
  {
    title: '用户研究与需求洞察',
    text: '从问卷、访谈、画像和旅程图中提炼真实痛点，形成清晰的问题定义与需求优先级。',
    icon: UserRoundSearch,
  },
  {
    title: '服务系统设计',
    text: '用利益相关者地图、服务蓝图和线上线下触点规划，把复杂体验组织成可推进的系统方案。',
    icon: Compass,
  },
  {
    title: '产品与运营思维',
    text: '对接企业需求与实验室应用需求，梳理产品功能模块、场景定义和推进路径，关注方案如何落地与迭代。',
    icon: ClipboardList,
  },
  {
    title: '数字交互与游戏化设计',
    text: '将研究主题延展为网页原型，用任务、图鉴、问答、成就等机制提升参与感。',
    icon: Puzzle,
  },
  {
    title: 'AI 协作与原型验证',
    text: '使用 ChatGPT、Codex 等 AI 工具进行资料整理、内容提炼、方案推敲与网页原型搭建，用 demo 验证产品想法与交互路径。',
    icon: Brush,
  },
];

export const stats = [
  { value: '243+', label: '音乐节用户问卷样本' },
  { value: '30+', label: 'HMW 工作坊方案方向' },
  { value: '6+', label: '服务/空间/交互项目类型' },
  { value: '30+', label: '项重要奖项与荣誉' },
];

export const education = [
  {
    school: '四川美术学院',
    degree: '技术文化与社会创新（研一） / 研究生（保送）',
    period: '2025 - 至今',
    highlights: [
      '主修课程：用户体验设计、服务设计与商业空间、社会创新设计等',
      '第十五届“挑战杯”中国大学生创业计划竞赛重庆市特等奖并推往国赛',
      '2025 研究生学业奖学金',
    ],
  },
  {
    school: '内蒙古师范大学',
    degree: '环境设计系（整合创新班） / 本科',
    period: '2021 - 2025',
    highlights: [
      '主修课程：在地设计与社会创新（94）、社会设计创新（92）、服务设计与商业空间（91）、人文要素与公共场域（91）',
      '2024 中国大学生文化创意设计大赛国一等奖',
      '第 8 届米兰设计周·中国高校设计学科奖国一等奖',
      '第 9 届两岸新锐设计竞赛·华灿奖国二等奖、2024 中国人居环境设计学年奖国三等奖',
      '2022-2023 校一等奖学金、2023-2024 校二等奖学金、2024-2025 国家励志奖学金',
    ],
  },
];

export const experiences = [
  {
    company: 'FLARE 实验室',
    role: '产品策划实习生',
    period: '2025.09 - 2026.05',
    points: [
      '产品规划：对接企业光影产品与实验室应用需求，梳理数字人、照片迁移、轮廓跟随、裸眼 3D 等功能模块，完善产品场景定义。',
      '体验优化：基于文旅、博物馆、教育等线下场景，分析用户参观路径与交互需求，协助优化 AI 光影产品体验与展示流程。',
      '协同推进：参与 2026 国家艺术基金项目前期策划，配合设计、技术及运营团队沟通需求，推动方案设计、材料迭代与项目落地。',
    ],
  },
  {
    company: '四川灯蜀冀忆文化创意服务有限公司',
    role: '产品经理实习生',
    period: '2024.07 - 2024.12',
    points: [
      '需求挖掘：通过市场调研与客户访谈收集文创产品需求，梳理 3 类核心用户画像，明确功能优先级与产品定位。',
      '方案设计：参与文创产品功能规划，结合地域文化元素输出 2 套产品原型方案，覆盖线上展示与线下体验场景。',
      '推动落地：协助对接设计与开发团队，同步需求变更、进度反馈和样品制作流程，推动 1 款文创产品完成初步落地测试。',
    ],
  },
];

export const campus = [
  {
    title: '流光绘影：第四届国际光影科技艺术节',
    role: '项目运营宣发者',
    period: '2025.09 - 2025.11',
    points: [
      '内容宣发：参与 10+ 篇公众号推文整理与版式优化，完善展览、工作坊、论坛等活动传播内容。',
      '媒体协同：协助对接重庆日报、国际在线、华龙网 / 上游新闻等媒体，支持活动亮点与现场素材传播，助力 12 亿+ 网络传播。',
      '执行落地：参与嘉宾接待、物料对接与流程衔接，服务 20 余组光影作品落地。',
    ],
  },
  {
    title: '“设计调研”一流课程申请',
    role: '项目参与者',
    period: '2023.11 - 2023.12',
    points: ['系统整编课程成果与案例资料', '负责服务设计部分撰写', '独立制作项目 PPT 并参与课程视频录制'],
  },
  {
    title: '清华大学美术学院展览《游牧印记》',
    role: '设计创作者',
    period: '2023.09 - 2023.10',
    points: [
      '作品共创：参与《游牧印记》创作，聚焦乡村艺术建设主题，融入文化融合与在地表达思考。',
      '创意打磨：参与选题研讨与构思优化，结合乡村风貌与艺术形式增强作品表现力。',
      '成果展示：通过全国性平台呈现团队探索成果，并与高校创作者交流乡村艺术实践经验。',
    ],
  },
];

export const contactCards = [
  { label: 'Email', value: contact.email, action: '复制邮箱', icon: Mail },
  { label: 'Phone', value: contact.phone, action: '复制电话', icon: Phone },
  { label: 'WeChat', value: contact.wechat, action: '复制微信', icon: MapPinned },
];

export const quickBadges = [
  { label: '重庆市挑战杯\n市级特等奖', icon: Award },
  { label: '国家级一等奖', icon: Award },
  { label: 'GitHub Pages\n原型部署', icon: Lightbulb },
];
