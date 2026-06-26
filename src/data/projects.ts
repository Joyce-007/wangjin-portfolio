export const projectCategories = [
  'All',
  'Web Game',
  'Service Design',
  'UX Research',
  'Product Operation',
  'Environmental Design',
  'Visual Design',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type ProjectTheme = {
  name: string;
  keywords: string[];
  background: string;
  surface: string;
  accent: string;
  accentSoft: string;
  accentText: string;
  border: string;
  modalBg: string;
  headerBg: string;
  imageBg: string;
  pillBg: string;
  pillText: string;
  tagBg: string;
  tagText: string;
  titleAccent: string;
  bulletColor: string;
  shadowTint: string;
};

export type Project = {
  id: string;
  title: string;
  english: string;
  type: string;
  role: string;
  period: string;
  summary: string;
  cover: string;
  categories: ProjectCategory[];
  tags: string[];
  theme: ProjectTheme;
  liveUrl?: string;
  featured?: boolean;
  metrics: string[];
  details: {
    background?: string;
    problem: string;
    methods: string[];
    solution: string[];
    contribution: string[];
    outcome: string[];
    next?: string[];
  };
  gallery: string[];
  images: string[];
};

const pageGallery = (folder: string, count: number) =>
  Array.from({ length: count }, (_, index) => `./assets/projects/${folder}/page-${String(index + 1).padStart(2, '0')}.jpg`);

const assetGallery = (folder: string, names: string[]) => names.map((name) => `./assets/projects/${folder}/${name}`);

const projectThemes = {
  herbal: {
    name: 'herbal / green / cream',
    keywords: ['herbal', 'green', 'cream'],
    background: 'linear-gradient(135deg, #fffaf0 0%, #f6f2df 54%, #edf5e8 100%)',
    surface: 'rgba(255, 250, 240, 0.94)',
    accent: '#1f5a43',
    accentSoft: '#dcead8',
    accentText: '#123f31',
    border: '#cdd9bf',
    modalBg: 'linear-gradient(135deg, #fffaf0 0%, #f6f2df 54%, #edf5e8 100%)',
    headerBg: 'rgba(255, 250, 240, 0.94)',
    imageBg: '#f4eedc',
    pillBg: '#edf5e8',
    pillText: '#123f31',
    tagBg: '#edf5e8',
    tagText: '#123f31',
    titleAccent: '#123f31',
    bulletColor: '#1f5a43',
    shadowTint: 'rgba(31, 90, 67, 0.16)',
  },
  festival: {
    name: 'pink / festival / female friendly',
    keywords: ['pink', 'festival', 'female friendly'],
    background: 'linear-gradient(135deg, #fff8fb 0%, #fff1f7 48%, #f7efff 100%)',
    surface: 'rgba(255, 248, 251, 0.94)',
    accent: '#c85c8e',
    accentSoft: '#fde8f2',
    accentText: '#7d2f55',
    border: '#efc4d8',
    modalBg: 'linear-gradient(135deg, #fff8fb 0%, #fff1f7 48%, #f7efff 100%)',
    headerBg: 'rgba(255, 248, 251, 0.94)',
    imageBg: '#fff0f6',
    pillBg: '#fde8f2',
    pillText: '#7d2f55',
    tagBg: '#fde8f2',
    tagText: '#7d2f55',
    titleAccent: '#7d2f55',
    bulletColor: '#c85c8e',
    shadowTint: 'rgba(200, 92, 142, 0.18)',
  },
  rural: {
    name: 'rural / field / village',
    keywords: ['rural', 'field', 'village'],
    background: 'linear-gradient(135deg, #fff7e8 0%, #f2ecd1 46%, #dfe8cf 100%)',
    surface: 'rgba(255, 249, 235, 0.94)',
    accent: '#66733a',
    accentSoft: '#e7e5c6',
    accentText: '#46522e',
    border: '#d4c69b',
    modalBg: 'linear-gradient(135deg, #fff7e8 0%, #f2ecd1 46%, #dfe8cf 100%)',
    headerBg: 'rgba(255, 249, 235, 0.94)',
    imageBg: '#f1ead1',
    pillBg: '#eef0d3',
    pillText: '#46522e',
    tagBg: '#eef0d3',
    tagText: '#46522e',
    titleAccent: '#46522e',
    bulletColor: '#7a873f',
    shadowTint: 'rgba(97, 109, 55, 0.18)',
  },
  futureCare: {
    name: 'future / elderly care / bio community',
    keywords: ['future', 'elderly care', 'bio community'],
    background: 'linear-gradient(135deg, #f7fffb 0%, #eefaf6 50%, #e8f4ff 100%)',
    surface: 'rgba(247, 255, 251, 0.94)',
    accent: '#2c8b87',
    accentSoft: '#dff2ee',
    accentText: '#17605d',
    border: '#b9ddd7',
    modalBg: 'linear-gradient(135deg, #f7fffb 0%, #eefaf6 50%, #e8f4ff 100%)',
    headerBg: 'rgba(247, 255, 251, 0.94)',
    imageBg: '#ecfaf6',
    pillBg: '#dff2ee',
    pillText: '#17605d',
    tagBg: '#dff2ee',
    tagText: '#17605d',
    titleAccent: '#17605d',
    bulletColor: '#2c8b87',
    shadowTint: 'rgba(44, 139, 135, 0.16)',
  },
  oasis: {
    name: 'oasis / reconstruction / city',
    keywords: ['oasis', 'reconstruction', 'city'],
    background: 'linear-gradient(135deg, #fff4e6 0%, #ead9c6 48%, #e5e2dc 100%)',
    surface: 'rgba(255, 245, 232, 0.94)',
    accent: '#a76334',
    accentSoft: '#efddc8',
    accentText: '#6e3f24',
    border: '#d5b89c',
    modalBg: 'linear-gradient(135deg, #fff4e6 0%, #ead9c6 48%, #e5e2dc 100%)',
    headerBg: 'rgba(255, 245, 232, 0.94)',
    imageBg: '#f0e1d2',
    pillBg: '#f1dfcc',
    pillText: '#6e3f24',
    tagBg: '#f1dfcc',
    tagText: '#6e3f24',
    titleAccent: '#6e3f24',
    bulletColor: '#b9783f',
    shadowTint: 'rgba(113, 76, 48, 0.18)',
  },
  media: {
    name: 'visual / media / promotion',
    keywords: ['visual', 'media', 'promotion'],
    background: 'linear-gradient(135deg, #f4f1ff 0%, #ecebff 44%, #fff0fa 100%)',
    surface: 'rgba(247, 246, 255, 0.94)',
    accent: '#5b5fc7',
    accentSoft: '#ebeaff',
    accentText: '#343279',
    border: '#c9c9f8',
    modalBg: 'linear-gradient(135deg, #f4f1ff 0%, #ecebff 44%, #fff0fa 100%)',
    headerBg: 'rgba(247, 246, 255, 0.94)',
    imageBg: '#f0efff',
    pillBg: '#ecebff',
    pillText: '#343279',
    tagBg: '#ecebff',
    tagText: '#343279',
    titleAccent: '#343279',
    bulletColor: '#bd6aa3',
    shadowTint: 'rgba(91, 95, 199, 0.18)',
  },
  neutral: {
    name: 'model / wood / graphite',
    keywords: ['model', 'wood', 'graphite'],
    background: 'linear-gradient(135deg, #fbf5e9 0%, #eee7d8 46%, #e8ece5 100%)',
    surface: 'rgba(251, 245, 233, 0.94)',
    accent: '#8a6b3d',
    accentSoft: '#eadfcb',
    accentText: '#2f332f',
    border: '#d5c7ad',
    modalBg: 'linear-gradient(135deg, #fbf5e9 0%, #eee7d8 46%, #e8ece5 100%)',
    headerBg: 'rgba(251, 245, 233, 0.94)',
    imageBg: '#eee7da',
    pillBg: '#ece4d5',
    pillText: '#3b4039',
    tagBg: '#ece4d5',
    tagText: '#3b4039',
    titleAccent: '#2f332f',
    bulletColor: '#8a6b3d',
    shadowTint: 'rgba(47, 51, 47, 0.18)',
  },
} satisfies Record<string, ProjectTheme>;

export const projects: Project[] = [
  {
    id: 'herbquest',
    title: '草本寻味 HerbQuest',
    english: 'Herbal Beverage Interactive Web Game',
    type: '游戏化设计 / 交互设计 / UI 设计 / 中医药文化传播 / 数实融合包装',
    role: '产品策划 / 交互设计 / 视觉设计 / 前端协作',
    period: '2026',
    summary:
      '「草本寻味 HerbQuest」是一个围绕中草药饮品认知展开的游戏化互动网页，通过网页交互、图鉴收集、偏好问答、饮品推荐和认知挑战等模块，降低传统内容的理解门槛，提升用户参与度与探索兴趣。',
    cover: './assets/projects/herbquest/cover.png',
    categories: ['Web Game', 'UX Research', 'Visual Design'],
    tags: ['AI Collaboration', 'Vibe Coding', 'Rapid Prototyping', 'Gamification', 'TCM Culture'],
    theme: projectThemes.herbal,
    liveUrl: 'https://joyce-007.github.io/herbquest-game/',
    featured: true,
    metrics: ['8 个探索模块', '9 张草本卡牌', 'AI 协作原型', 'Vibe Coding Demo'],
    details: {
      background:
        '项目以中医药文化、药食同源和草本饮品为内容基础，把原本分散在包装、图鉴和知识说明里的信息重新组织为可点击、可收集、可挑战的网页体验。',
      problem:
        '中草药饮品包装中的成分、风味和药食同源知识常以静态信息呈现，用户理解门槛较高，缺少持续探索和记忆的入口。',
      methods: ['梳理草本饮品内容结构', '设计偏好问答与推荐逻辑', '建立图鉴、挑战、调配和成就路径', '使用 AI 协作与 vibe coding 快速搭建网页原型'],
      solution: [
        '以“探索路线”组织用户旅程，从需求偏好进入饮品识别、草本卡牌、认知挑战、饮品调配和故事阅读。',
        '用草本图鉴承载黄精、桂圆、红枣、枸杞、陈皮等原料的风味、场景和文化解释。',
        '通过积分、徽章、收藏与挑战地图，让知识阅读从被动浏览变成可完成、可反馈的轻量任务。',
        '将研究主题转化为数字产品原型，用 demo 支持内容验证与体验沟通。',
      ],
      contribution: [
        '负责项目概念、信息架构、核心交互流程和视觉方向。',
        '整理草本文化内容并转化为题库、故事与图鉴文案。',
        '借助 AI 工具进行内容梳理、结构推敲和页面实现协作，用 vibe coding 提升原型效率。',
      ],
      outcome: [
        '形成可在线体验的数字产品原型。',
        '展示将复杂文化内容组织为轻量交互任务的能力。',
        '体现从概念、结构、页面表达到 demo 验证的整合能力。',
      ],
      next: ['补充用户测试样本与行为数据', '增加移动端扫码包装入口', '扩展更多草本组合与饮品推荐规则'],
    },
    gallery: assetGallery('herbquest', ['cover.png', 'route.png', 'recognition.png', 'cards.jpg', 'quiz.png', 'mix.png', 'story.png', 'story-detail.png']),
    images: [
      './assets/projects/herbquest/route.png',
      './assets/projects/herbquest/recognition.png',
      './assets/projects/herbquest/cards.jpg',
      './assets/projects/herbquest/quiz.png',
      './assets/projects/herbquest/mix.png',
      './assets/projects/herbquest/story-detail.png',
    ],
  },
  {
    id: 'music-wing',
    title: '移动音乐之翼',
    english: 'Women-Friendly Music Festival Service System',
    type: '服务设计 / 用户研究 / UI 设计',
    role: '服务设计师',
    period: '2024.03 - 2024.04',
    summary:
      '面向女性音乐节参与者的服务系统设计，围绕交通、安全、卫生、社交和信息透明度等痛点，构建线上平台与线下服务闭环。',
    cover: './assets/projects/music-wing/cover.jpg',
    categories: ['Service Design', 'UX Research'],
    tags: ['Service Blueprint', 'Female Friendly', 'KANO', 'HMW', 'Journey Map'],
    theme: projectThemes.festival,
    metrics: ['243 份问卷', '30+ 方案方向', '线上线下闭环', '女性友好服务'],
    details: {
      problem:
        '音乐节女性用户面临交通不便、安全风险、性骚扰担忧、卫生资源不足、社交需求和信息不透明等复合痛点。',
      methods: ['问卷调研与访谈', '用户画像与旅程图', 'KANO 模型', 'HMW 工作坊', '服务蓝图与触点设计'],
      solution: [
        '设计线上实名交友平台与信息经验板块，降低女性独自参与音乐节时的信息和社交成本。',
        '规划预约服务、可视化排队、房车接送、女性活动区和志愿者响应机制，提升安全感与服务效率。',
        '将卫生间体验、活动区与交通接驳纳入统一服务蓝图，形成可协作执行的多触点系统。',
      ],
      contribution: ['主导用户研究与痛点梳理', '参与方案发散、服务流程组织和 UI 信息架构设计', '完成方案汇报与作品集表达'],
      outcome: ['形成女性友好音乐节服务系统方案', '预计提升女性参与率并降低投诉风险', '体现用户研究、体验流程优化与服务闭环能力'],
    },
    gallery: pageGallery('music-wing', 14),
    images: [
      './assets/projects/music-wing/detail-1.jpg',
      './assets/projects/music-wing/detail-2.jpg',
      './assets/projects/music-wing/detail-3.jpg',
    ],
  },
  {
    id: 'genbao',
    title: '编田织路·根场生息',
    english: 'Genbao Village Service Design for Rural Revitalization',
    type: '服务设计 / 乡村更新 / 环境设计',
    role: '设计研究与方案设计',
    period: '2024',
    summary:
      '基于乡村振兴视角，围绕根堡村产业发展、空间功能、居民生活与公共服务问题，探索村落服务系统与公共空间更新策略。',
    cover: './assets/projects/genbao/cover.jpg',
    categories: ['Service Design', 'Environmental Design', 'UX Research'],
    tags: ['Rural Revitalization', 'Stakeholder Map', 'Spatial Renewal', 'Service System'],
    theme: projectThemes.rural,
    metrics: ['区位与业态分析', '利益相关者地图', '根堡剧场更新', '农业运输优化'],
    details: {
      background:
        '根堡村以农业种植和乡村生活空间为基础，村落发展面临产业协同、公共空间使用、农业运输、居民活动与地方展示之间的关系重构问题。项目希望通过服务设计与空间更新方法，建立连接产业、居民、游客和公共资源的乡村活化系统。',
      problem:
        '村落公共空间功能较单一，居民活动与产业展示之间缺少连接；农业生产、运输和展示场景之间缺少连续路径；根堡剧场等公共节点尚未充分发挥社区活动与乡村展示价值；村民、游客、产业和地方资源之间缺少可持续的服务组织关系。',
      methods: ['场地与区位分析', '周边业态与产业关系梳理', '历史沿革分析', '人物画像', '利益相关者地图', '需求梳理图', '服务路径推演', '空间功能复合化设计'],
      solution: [
        '以根堡剧场更新为公共节点，连接村民活动、游客体验和地方产业展示。',
        '优化农业运输与公共空间组织，让生产、生活和展示场景形成连续路线。',
        '将服务系统、空间节点和产业资源整合，形成乡村活化方案。',
        '通过剧场、公共活动空间、农业展示与社区服务的结合，提升村落空间的复合使用价值。',
      ],
      contribution: ['参与乡村场地与产业关系分析', '梳理用户需求与利益相关者关系', '参与服务系统与空间更新策略构思', '完成部分图面表达、空间功能分析与方案呈现'],
      outcome: ['形成以根堡剧场和农业空间为核心的乡村服务系统与公共空间更新方案，展现从场地调研、需求梳理到空间策略表达的完整设计过程。'],
    },
    gallery: pageGallery('genbao', 25),
    images: ['./assets/projects/genbao/detail-1.jpg', './assets/projects/genbao/detail-2.jpg', './assets/projects/genbao/detail-3.jpg'],
  },
  {
    id: 'keyi',
    title: '科逸康居',
    english: 'Bio-Inspired Future Elderly Community',
    type: '服务设计 / 智慧养老 / 未来社区',
    role: '服务设计师',
    period: '2023.03 - 2023.06',
    summary:
      '聚焦老龄化背景下的未来社区服务设计，围绕孤独感、出行困难、健康管理和医疗资源不足，构建智慧养老系统。',
    cover: './assets/projects/keyi/cover.jpg',
    categories: ['Service Design', 'UX Research', 'Environmental Design'],
    tags: ['Aging Society', 'Future Scenario', 'Service Blueprint', 'Health Management'],
    theme: projectThemes.futureCare,
    metrics: ['4 大服务模块', '未来技术转译', '服务蓝图', '教学模板评价'],
    details: {
      problem:
        '老年用户在情感陪伴、便捷出行、健康管理和医疗资源连接上存在持续性痛点，传统社区服务难以形成主动响应。',
      methods: ['老龄化趋势研究', '用户核心痛点分析', '未来技术场景化', '服务蓝图与系统图构建'],
      solution: [
        '设计情感陪伴、便捷出行、健康管理、种植园四大服务模块，覆盖生活、健康和社区参与。',
        '将 AI、脑机接口、自动交通等技术转译为具体触点，避免停留在概念层。',
        '通过服务蓝图表达用户、前台触点、后台支持和技术系统之间的协作关系。',
      ],
      contribution: ['参与需求研究与模块规划', '完成系统流程、服务蓝图和未来场景表达', '整理项目汇报与作品集呈现'],
      outcome: ['被导师评为具有未来性的教学模板', '呈现服务创新与未来技术结合的设计能力'],
    },
    gallery: pageGallery('keyi', 11),
    images: ['./assets/projects/keyi/detail-1.jpg', './assets/projects/keyi/detail-2.jpg', './assets/projects/keyi/detail-3.jpg'],
  },
  {
    id: 'oasis',
    title: '乌托邦之轮',
    english: 'Wheels of Oasis',
    type: '城市更新 / 环境设计 / 概念建筑',
    role: '概念设计',
    period: '2024',
    summary:
      '面向城市更新、战后复兴或灾后重建等复杂场景，探索移动模块、轨道系统、3D 打印和临时居住之间的关系，形成具有未来性的空间更新概念方案。',
    cover: './assets/projects/oasis/cover.jpg',
    categories: ['Environmental Design'],
    tags: ['Urban Renewal', 'Modular System', '3D Printing', 'Concept Architecture'],
    theme: projectThemes.oasis,
    metrics: ['移动模块', '轨道系统', '临时居住', '未来场景'],
    details: {
      background:
        '在灾后重建、战后复兴或高密度城市更新语境中，传统固定建筑模式面临建造周期长、适应性弱、空间响应慢等问题。项目希望通过模块化、可移动和可更新的空间系统，回应临时居住、基础设施修复与城市再组织需求。',
      problem:
        '灾后或战后场景需要快速响应的居住与服务模块；固定建筑难以适应持续变化的城市修复过程；临时居住与城市基础设施之间缺少灵活连接；空间系统需要兼顾移动性、组织性和未来扩展性。',
      methods: ['复杂场景设定', '空间结构推演', '模块系统研究', '轨道系统与移动单元设想', '3D 打印建造逻辑', '概念视觉表达'],
      solution: [
        '构建可移动的轮式居住与服务模块。',
        '通过轨道系统连接不同城市节点。',
        '引入 3D 打印建造设想和模块化组装逻辑。',
        '以概念建筑图像和结构拆解表达未来城市基础设施重构方式。',
      ],
      contribution: ['参与概念设定与空间系统推演', '完成模块关系、空间结构和视觉表达', '参与图面整合、概念叙事和最终展示'],
      outcome: ['形成面向未来城市重建场景的概念建筑方案，体现复杂议题下的空间想象、系统组织与视觉表达能力。'],
    },
    gallery: pageGallery('oasis', 7),
    images: ['./assets/projects/oasis/detail-1.jpg', './assets/projects/oasis/detail-2.jpg', './assets/projects/oasis/detail-3.jpg'],
  },
  {
    id: 'visual',
    title: '公众号宣发作品',
    english: 'Visual Communication & Content Operation',
    type: '视觉设计 / 内容运营 / 品牌传播',
    role: '视觉设计与内容排版',
    period: '2023 - 2024',
    summary:
      '展示公众号推文、活动海报、宣传视觉、信息图和排版作品，突出视觉传播、信息整理、内容运营和活动传播能力。',
    cover: './assets/projects/visual/cover.jpg',
    categories: ['Product Operation', 'Visual Design'],
    tags: ['Content Operation', 'Visual Identity', 'Poster', 'Information Layout'],
    theme: projectThemes.media,
    metrics: ['公众号推文', '活动海报', '宣传物料', '信息排版'],
    details: {
      problem:
        '活动传播需要在有限版面中清晰呈现主题、流程、视觉记忆点与行动入口，避免信息散乱影响参与转化。',
      methods: ['主题视觉提炼', '信息层级整理', '图文排版', '传播物料延展'],
      solution: [
        '通过统一色彩、字体与构图系统建立活动视觉识别。',
        '将长文本内容拆解为标题、关键信息、图像和行动引导，提升阅读效率。',
        '围绕不同渠道输出推文、海报与宣传物料，保持传播一致性。',
      ],
      contribution: ['负责视觉排版、素材整理和传播内容呈现', '参与活动信息组织和推文节奏规划'],
      outcome: ['形成稳定的视觉传播作品集合', '展示内容策划、品牌传播和信息可视化能力'],
    },
    gallery: pageGallery('visual', 2),
    images: ['./assets/projects/visual/detail-1.jpg'],
  },
  {
    id: 'others',
    title: '其他设计作品',
    english: 'Selected Environmental & Concept Works',
    type: '综合设计 / 课程作品 / 竞赛作品',
    role: '设计创作者',
    period: '2022 - 2024',
    summary:
      '补充展示课程、竞赛、模型图、实验性设计、海报和空间表达作品，呈现跨媒介的设计训练与视觉叙事能力。',
    cover: './assets/projects/others/cover.jpg',
    categories: ['Environmental Design', 'Visual Design'],
    tags: ['Selected Works', 'Spatial Design', 'Concept Model', 'Portfolio'],
    theme: projectThemes.neutral,
    metrics: ['课程作品', '竞赛作品', '空间表达', '视觉叙事'],
    details: {
      background:
        '该部分用于整合不同课程与竞赛命题下的设计练习，内容涵盖空间表达、模型制作、概念生成、海报排版、视觉传播和方案图面整理。它不是单一服务系统项目，而是展示综合设计训练与图面表达能力的作品集合。',
      problem:
        '不同课程和竞赛命题需要快速理解场景限制与表达重点；综合作品需要在有限图面中清晰呈现概念、结构、模型和视觉叙事；多类型作品需要形成统一的作品集表达逻辑。',
      methods: ['场景分析', '概念推演', '模型与图纸表达', '海报与版式整理', '作品集叙事梳理'],
      solution: [
        '根据不同主题选择空间、视觉或装置方向。',
        '通过图纸、模型、渲染图和排版强化项目辨识度。',
        '将分散作品整合为具有连续阅读体验的作品集页面。',
        '通过图面层级和视觉叙事呈现设计训练过程。',
      ],
      contribution: ['完成方案构思、图面制作和作品集整理', '持续训练跨媒介表达、版式组织与设计叙事能力', '将课程与竞赛作品转化为可展示、可阅读的作品集内容'],
      outcome: ['形成补充型综合作品展示模块，呈现空间表达、图面组织、模型制作和视觉叙事能力。'],
    },
    gallery: pageGallery('others', 2),
    images: ['./assets/projects/others/detail-1.jpg'],
  },
];
