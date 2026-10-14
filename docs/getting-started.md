---
nav:
  title: 快速开始
  order: 1
---

# 快速开始

## 环境要求

- Node.js >= 20（推荐使用 nvm 管理版本）
- pnpm >= 9 或 yarn >= 4

## 安装依赖

```bash
# 使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

## 本地开发

```bash
# 使用 yarn
yarn start

# 或使用 pnpm
pnpm start
```

启动后访问 `http://localhost:1995` 预览站点。

## 构建生产版本

```bash
yarn build
```

构建产物输出到 `dist/` 目录，可直接部署到任意静态服务器。

## 部署到 GitHub Pages

本项目通过 GitHub Actions 自动部署：

1. 推送代码到 `master` 分支
2. CI 自动执行 `yarn install` + `yarn build`
3. 构建产物部署到 `build` 分支
4. GitHub Pages 从 `build` 分支提供服务

> **注意**：`.dumirc.ts` 中的 `base` 和 `publicPath` 必须与仓库名一致，否则资源会 404。

```ts
// .dumirc.ts
const repo = 'dumi-book';

export default defineConfig({
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
});
```

## 项目结构

```
dumi-book/
├── .dumirc.ts          # Dumi 2 配置文件
├── .github/
│   └── workflows/
│       └── ci.yml      # GitHub Actions CI/CD
├── docs/               # 文档目录
│   ├── index.md        # 首页
│   ├── getting-started.md
│   ├── guide.md
│   ├── components.md
│   └── help.md
├── package.json
└── yarn.lock
```
