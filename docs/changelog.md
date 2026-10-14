---
nav:
  title: 更新日志
  order: 5
---

# 更新日志

## v2.0.0 — Dumi 2 升级

> 2026-10-13

### ✨ 新特性

- 从 Dumi 1.x 升级到 **Dumi 2.4.50**（基于 UmiJS 4.7）
- 集成 **dumi-theme-lobehub** 主题，现代化设计风格
- 集成 **Ant Design 6** 组件库
- 集成 **React 19**
- 新增 **使用指南** 页面，涵盖配置、路由、Frontmatter、搜索、国际化
- 新增 **组件示例** 页面，展示 React Demo 能力
- 新增 **更新日志** 页面
- 新增 **资源推荐** 页面
- 新增 **关于** 页面
- 首页升级为中文，展示 6 个特性卡片

### 🎨 样式

- 明暗主题切换（浅色 / 深色 / 跟随系统）
- 毛玻璃效果、渐变色、自然动效
- 语法高亮美化

### 🔧 工程

- 包管理器从 npm 切换到 **yarn**
- 配置文件从 `.umirc.ts` 迁移到 `.dumirc.ts`
- CI 升级：Node 20 + yarn + frozen-lockfile
- `base` / `publicPath` 硬编码为 `/dumi-book/`，修复 GitHub Pages 资源 404

### 📦 依赖

| 依赖               | 版本    |
| ------------------ | ------- |
| dumi               | ^2.4.0  |
| react              | ^19.0.0 |
| antd               | ^6.1.0  |
| dumi-theme-lobehub | ^5.0.0  |
| @lobehub/ui        | ^4.3.0  |
| @lobehub/icons     | ^4.0.0  |
| motion             | ^12.0.0 |

---

## v1.0.0 — 初始版本

> 2026-09-20

### ✨ 新特性

- 基于 **Dumi 1.x** 搭建文档站点
- 基础页面：首页、快速上手、帮助
- GitHub Actions 自动部署到 GitHub Pages
- 中英双语文档支持
