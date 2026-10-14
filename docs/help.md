---
nav:
  title: 帮助
  order: 4
---

# 帮助

## 常见问题

### 资源 404 怎么办？

检查 `.dumirc.ts` 中的 `base` 和 `publicPath` 是否与 GitHub 仓库名一致：

```ts
const repo = 'dumi-book';

export default defineConfig({
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
});
```

### 如何切换明暗主题？

点击右上角主题切换按钮，支持 浅色 / 深色 / 跟随系统 三种模式。

### 如何新增文档页面？

在 `docs/` 目录下创建新的 `.md` 文件，路由会自动生成。例如 `docs/guide.md` 对应 `/guide` 路由。

通过 Frontmatter 配置导航栏显示：

```yaml
---
nav:
  title: 页面标题
  order: 1
---
```

### 如何启用评论系统？

本项目使用 Giscus（基于 GitHub Discussions）作为评论系统。配置步骤：

1. 在 GitHub 仓库 Settings → General → Features 中勾选 **Discussions**
2. 安装 [Giscus App](https://github.com/apps/giscus) 并授权仓库
3. 访问 [giscus.app](https://giscus.app) 获取 `repoId` 和 `categoryId`
4. 在 `.dumirc.ts` 中配置：

```ts
export default defineConfig({
  themeConfig: {
    giscus: {
      repo: 'pyd94666/dumi-book',
      repoId: 'your-repo-id',
      category: 'Announcements',
      categoryId: 'your-category-id',
    },
  },
});
```

### 如何配置导航菜单？

导航菜单由 Frontmatter 的 `nav` 字段控制，`order` 决定排列顺序：

```yaml
---
nav:
  title: 页面名称
  order: 1 # 数字越小越靠前
---
```

### 本地开发端口冲突？

默认端口为 1995。如需修改，在 `.dumirc.ts` 中配置 `vite.server.port` 或启动时指定：

```bash
PORT=3000 yarn start
```

## 技术栈

| 技术               | 版本    | 说明         |
| ------------------ | ------- | ------------ |
| Dumi               | ^2.4.0  | 文档站点框架 |
| React              | ^19.0.0 | UI 库        |
| UmiJS              | ^4.7.0  | 底层框架     |
| antd               | ^6.0.0  | 组件库       |
| dumi-theme-lobehub | ^5.0.0  | 主题包       |
| Giscus             | -       | 评论系统     |

## 相关链接

- [Dumi 2 文档](https://d.umijs.org)
- [UmiJS 4 文档](https://umijs.org)
- [dumi-theme-lobehub](https://github.com/lobehub/dumi-theme-lobehub)
- [Ant Design](https://ant.design)
- [Giscus](https://giscus.app)
