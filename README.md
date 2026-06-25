# 王瑾 Wang Jin Portfolio

这是一个用于求职投递的个人简历/作品集网站，基于 Vite、React、TypeScript、Tailwind CSS 和 Framer Motion 构建。网站内容来自 `王瑾简历.pdf`、`王瑾作品集.pdf` 和「草本寻味 HerbQuest」网页游戏。

## 本地运行

```bash
pnpm install
pnpm run dev
```

如果你使用 npm：

```bash
npm install
npm run dev
```

## 构建

```bash
pnpm run build
pnpm run preview
```

构建产物会生成在 `dist/` 中。`vite.config.ts` 已设置 `base: './'`，适合部署到 GitHub Pages 的仓库子路径。

## 部署到 GitHub Pages

方式一：使用 `gh-pages` 脚本。

```bash
pnpm run deploy
```

使用 npm 时也可以运行：

```bash
npm run deploy
```

然后进入 GitHub 仓库：

1. 打开 `Settings`
2. 进入 `Pages`
3. Source 选择 `Deploy from a branch`
4. Branch 选择 `gh-pages` 和 `/root`
5. 保存后等待 GitHub Pages 发布

方式二：手动上传。

```bash
pnpm run build
```

将 `dist/` 中的文件上传到 GitHub Pages 对应分支或 Pages 服务。

## 修改个人信息

主要内容都在数据文件中维护：

- `src/data/profile.ts`：个人介绍、联系方式、教育、实习、在校经历
- `src/data/projects.ts`：项目卡片、详情弹窗、项目图片、HerbQuest 外链
- `src/data/awards.ts`：获奖经历
- `src/data/skills.ts`：技能分组和能力标签

## 替换 PDF

下载按钮对应文件在：

- `public/assets/docs/wangjin-resume.pdf`
- `public/assets/docs/wangjin-portfolio.pdf`

替换时保持文件名不变即可。

## 替换图片

作品集图片与 HerbQuest 截图位于：

- `public/assets/portfolio-cover.jpg`
- `public/assets/projects/herbquest/`
- `public/assets/projects/music-wing/`
- `public/assets/projects/genbao/`
- `public/assets/projects/keyi/`
- `public/assets/projects/oasis/`
- `public/assets/projects/visual/`
- `public/assets/projects/others/`

如果需要增加项目图片，请先把图片放入对应文件夹，再到 `src/data/projects.ts` 的 `cover` 或 `images` 字段中添加路径。

## 修改 HerbQuest 外链

统一修改 `src/data/profile.ts` 中的：

```ts
herbquest: 'https://joyce-007.github.io/herbquest-game/'
```

如果某个项目需要单独设置链接，也可以修改 `src/data/projects.ts` 中对应项目的 `liveUrl`。
