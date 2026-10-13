import { defineConfig } from 'dumi';

const repo = 'dumi-book'; // 仓库名，需与 GitHub 仓库名一致

export default defineConfig({
  title: 'dumi-book',
  mode: 'site',
  devServer: {
    port: 1995, // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',

  // more config: https://d.umijs.org/config
});
