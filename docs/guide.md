---
nav:
  title: 使用指南
  order: 2
---

# 使用指南

## 配置文件

Dumi 2 使用 `.dumirc.ts` 作为配置文件，基于 UmiJS 4。

### 基础配置

```ts
// .dumirc.ts
import { defineConfig } from 'dumi';

const repo = 'dumi-book';

export default defineConfig({
  title: 'dumi-book',
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
});
```

### 主题配置

dumi-theme-lobehub 安装后自动加载，可通过 `themeConfig` 进行定制：

```ts
export default defineConfig({
  themeConfig: {
    name: 'dumi-book',
    logo: '/logo.png',
    giscus: {
      repo: 'pyd94666/dumi-book',
      repoId: 'your-repo-id', // 从 giscus.app 获取
      category: 'Announcements',
      categoryId: 'your-category-id', // 从 giscus.app 获取
    },
  },
});
```

## 约定式路由

Dumi 2 采用约定式路由，`docs/` 目录下的 `.md` 文件自动生成路由：

| 文件路径                  | 路由               |
| ------------------------- | ------------------ |
| `docs/index.md`           | `/`                |
| `docs/getting-started.md` | `/getting-started` |
| `docs/guide.md`           | `/guide`           |
| `docs/components.md`      | `/components`      |

### Frontmatter

每个页面可通过 Frontmatter 配置导航栏显示：

```yaml
---
nav:
  title: 页面标题 # 导航栏显示名称
  order: 1 # 排序，数字越小越靠前
---
```

## Markdown 扩展

### 代码块

支持语法高亮和代码标题：

````markdown
```tsx | title="示例代码"
import React from 'react';

export default function App() {
  return <h1>Hello Dumi</h1>;
}
```
````

### 嵌入式 Demo

Dumi 2 支持在 Markdown 中直接嵌入 React 组件 Demo，详见[组件示例](/components)页面。

### 表格

```markdown
| 列 1 | 列 2 | 列 3 |
| ---- | ---- | ---- |
| A    | B    | C    |
```

## 全文搜索

Dumi 2 内置全文搜索功能，基于 flexsearch，无需额外配置：

- 搜索范围覆盖标题、正文、Demo
- 支持中英文分词
- 离线可用（Service Worker）

## 国际化

Dumi 2 支持多语言，文件命名约定：

| 文件                  | 语言         |
| --------------------- | ------------ |
| `docs/index.md`       | 默认（英文） |
| `docs/index.zh-CN.md` | 中文         |

## 自定义主题

如需深度自定义主题样式，可通过覆盖 CSS 变量实现：

```css
:root {
  --lobe-color-primary: #1677ff;
  --lobe-color-bg: #ffffff;
}
```
