import { defineConfig } from 'dumi';

const repo = 'dumi-book'; // 仓库名，需与 GitHub 仓库名一致
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  title: 'dumi-book',
  base: isProd ? `/${repo}/` : '/',
  publicPath: isProd ? `/${repo}/` : '/',
  // more config: https://d.umijs.org/config
});
