---
nav:
  title: 关于
  order: 7
---

# 关于本项目

## 项目简介

**dumi-book** 是一个基于 [Dumi 2](https://d.umijs.org) 和 [dumi-theme-lobehub](https://github.com/lobehub/dumi-theme-lobehub) 主题构建的个人文档站点。

### 技术栈

- **框架**：Dumi 2 + UmiJS 4
- **UI**：React 19 + Ant Design 6 + @lobehub/ui
- **主题**：dumi-theme-lobehub
- **部署**：GitHub Actions + GitHub Pages
- **包管理**：yarn

### 核心功能

- 全文搜索（内置 flexsearch）
- 明暗主题切换
- 约定式路由
- Markdown 扩展（Frontmatter、代码高亮、嵌入 Demo）
- 响应式设计
- GitHub Actions 自动部署

## 项目结构

```
dumi-book/
├── .dumirc.ts              # Dumi 2 配置文件
├── .github/workflows/ci.yml # CI/CD 配置
├── docs/                    # 文档目录
│   ├── index.md             # 首页
│   ├── getting-started.md   # 快速开始
│   ├── guide.md             # 使用指南
│   ├── components.md        # 组件示例
│   ├── help.md              # 帮助
│   ├── changelog.md         # 更新日志
│   ├── resources.md         # 资源推荐
│   └── about.md            # 关于
├── package.json
├── yarn.lock
└── tsconfig.json
```

## 开源协议

[MIT License](https://opensource.org/licenses/MIT)

## 相关链接

- [GitHub 仓库](https://github.com/pyd94666/dumi-book)
- [Dumi 2 文档](https://d.umijs.org)
- [dumi-theme-lobehub](https://github.com/lobehub/dumi-theme-lobehub)
- [问题反馈](https://github.com/pyd94666/dumi-book/issues)
