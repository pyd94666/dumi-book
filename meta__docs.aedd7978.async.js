"use strict";(self.webpackChunkdumi_book=self.webpackChunkdumi_book||[]).push([[7467],{39911:(function(I,e,a){a.r(e),a.d(e,{demos:function(){return r}});var d=a(96540),r={}}),38764:(function(I,e,a){a.r(e),a.d(e,{demos:function(){return r}});var d=a(96540),r={}}),90594:(function(I,e,a){var d;a.r(e),a.d(e,{demos:function(){return P}});var r=a(11604),b=a.n(r),y=a(55420),v=a.n(y),D=a(98312),i=a.n(D),x=a(96540),E=a(66401),C=a(83967),P={"docs-components-demo-0":{component:x.memo(x.lazy(i()(v()().mark(function s(){var l,n;return v()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(a.t.bind(a,96540,19));case 2:return l=o.sent,n=l.default,o.abrupt("return",{default:function(){return n.createElement("div",{style:{padding:24,background:"#f0f2f5",borderRadius:8}},n.createElement("h3",null,"Hello Dumi 2!"),n.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5D4C\u5165\u5728 Markdown \u4E2D\u7684 React \u7EC4\u4EF6\u3002"))}});case 5:case"end":return o.stop()}},s)})))),asset:{type:"BLOCK",id:"docs-components-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';

export default function Demo() {
  return (
    <div style={{ padding: 24, background: '#f0f2f5', borderRadius: 8 }}>
      <h3>Hello Dumi 2!</h3>
      <p>\u8FD9\u662F\u4E00\u4E2A\u5D4C\u5165\u5728 Markdown \u4E2D\u7684 React \u7EC4\u4EF6\u3002</p>
    </div>
  );
}`},react:{type:"NPM",value:"19.3.0"}},entry:"index.tsx"},routeId:"docs/components",context:{react:d||(d=a.t(x,2))},renderOpts:{compile:(function(){var s=i()(v()().mark(function n(){var u,o=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([a.e(8287),a.e(2306)]).then(a.bind(a,12306));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,o));case 3:case"end":return t.stop()}},n)}));function l(){return s.apply(this,arguments)}return l})()}},"docs-components-demo-1":{component:x.memo(x.lazy(i()(v()().mark(function s(){var l,n,u;return v()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(a.t.bind(a,96540,19));case 2:return l=p.sent,n=l.default,u=l.useState,p.abrupt("return",{default:function(){var f=u(0),m=b()(f,2),g=m[0],c=m[1];return n.createElement("div",{style:{padding:24,textAlign:"center"}},n.createElement("h3",null,"\u8BA1\u6570\u5668\uFF1A",g),n.createElement("div",{style:{display:"flex",gap:8,justifyContent:"center"}},n.createElement("button",{onClick:function(){return c(g-1)},style:{padding:"8px 16px",cursor:"pointer"}},"-"),n.createElement("button",{onClick:function(){return c(g+1)},style:{padding:"8px 16px",cursor:"pointer"}},"+"),n.createElement("button",{onClick:function(){return c(0)},style:{padding:"8px 16px",cursor:"pointer"}},"\u91CD\u7F6E")))}});case 6:case"end":return p.stop()}},s)})))),asset:{type:"BLOCK",id:"docs-components-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';

export default function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 24, textAlign: 'center' }}>
      <h3>\u8BA1\u6570\u5668\uFF1A{count}</h3>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button
          onClick={() => setCount(count - 1)}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          -
        </button>
        <button
          onClick={() => setCount(count + 1)}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          +
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          \u91CD\u7F6E
        </button>
      </div>
    </div>
  );
}`},react:{type:"NPM",value:"19.3.0"}},entry:"index.tsx"},routeId:"docs/components",context:{react:d||(d=a.t(x,2))},renderOpts:{compile:(function(){var s=i()(v()().mark(function n(){var u,o=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([a.e(8287),a.e(2306)]).then(a.bind(a,12306));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,o));case 3:case"end":return t.stop()}},n)}));function l(){return s.apply(this,arguments)}return l})()}},"docs-components-demo-2":{component:x.memo(x.lazy(i()(v()().mark(function s(){var l,n,u,o,p,t,f,m;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(a.t.bind(a,96540,19));case 2:return l=c.sent,n=l.default,c.next=6,Promise.resolve().then(a.bind(a,66401));case 6:return u=c.sent,o=u.Button,p=u.Space,t=u.message,c.next=12,Promise.resolve().then(a.bind(a,83967));case 12:return f=c.sent,m=f.SmileOutlined,c.abrupt("return",{default:function(){return n.createElement(p,{style:{padding:24}},n.createElement(o,{type:"primary",icon:n.createElement(m,null),onClick:function(){return t.success("Hello!")}},"\u70B9\u51FB\u6211"),n.createElement(o,null,"\u9ED8\u8BA4\u6309\u94AE"),n.createElement(o,{type:"dashed"},"\u865A\u7EBF\u6309\u94AE"))}});case 15:case"end":return c.stop()}},s)})))),asset:{type:"BLOCK",id:"docs-components-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Button, Space, message } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

export default function AntdDemo() {
  return (
    <Space style={{ padding: 24 }}>
      <Button
        type="primary"
        icon={<SmileOutlined />}
        onClick={() => message.success('Hello!')}
      >
        \u70B9\u51FB\u6211
      </Button>
      <Button>\u9ED8\u8BA4\u6309\u94AE</Button>
      <Button type="dashed">\u865A\u7EBF\u6309\u94AE</Button>
    </Space>
  );
}`},react:{type:"NPM",value:"19.3.0"},antd:{type:"NPM",value:"6.6.6"},"@ant-design/icons":{type:"NPM",value:"6.3.4"}},entry:"index.tsx"},routeId:"docs/components",context:{react:d||(d=a.t(x,2)),antd:E,"@ant-design/icons":C},renderOpts:{compile:(function(){var s=i()(v()().mark(function n(){var u,o=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([a.e(8287),a.e(2306)]).then(a.bind(a,12306));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,o));case 3:case"end":return t.stop()}},n)}));function l(){return s.apply(this,arguments)}return l})()}}}}),99154:(function(I,e,a){a.r(e),a.d(e,{demos:function(){return r}});var d=a(96540),r={}}),12262:(function(I,e,a){a.r(e),a.d(e,{demos:function(){return r}});var d=a(96540),r={}}),58765:(function(I,e,a){a.r(e),a.d(e,{demos:function(){return r}});var d=a(96540),r={}}),91106:(function(I,e,a){a.r(e),a.d(e,{demos:function(){return r}});var d=a(96540),r={}}),7271:(function(I,e,a){a.r(e),a.d(e,{demos:function(){return r}});var d=a(96540),r={}}),2055:(function(I,e,a){a.r(e);const d=[{value:"dumi-book",paraId:0,tocIndex:1},{value:" \u662F\u4E00\u4E2A\u57FA\u4E8E ",paraId:0,tocIndex:1},{value:"Dumi 2",paraId:0,tocIndex:1},{value:" \u548C ",paraId:0,tocIndex:1},{value:"dumi-theme-lobehub",paraId:0,tocIndex:1},{value:" \u4E3B\u9898\u6784\u5EFA\u7684\u4E2A\u4EBA\u6587\u6863\u7AD9\u70B9\u3002",paraId:0,tocIndex:1},{value:"\u6846\u67B6",paraId:1,tocIndex:2},{value:"\uFF1ADumi 2 + UmiJS 4",paraId:1,tocIndex:2},{value:"UI",paraId:1,tocIndex:2},{value:"\uFF1AReact 19 + Ant Design 6 + @lobehub/ui",paraId:1,tocIndex:2},{value:"\u4E3B\u9898",paraId:1,tocIndex:2},{value:"\uFF1Adumi-theme-lobehub",paraId:1,tocIndex:2},{value:"\u90E8\u7F72",paraId:1,tocIndex:2},{value:"\uFF1AGitHub Actions + GitHub Pages",paraId:1,tocIndex:2},{value:"\u5305\u7BA1\u7406",paraId:1,tocIndex:2},{value:"\uFF1Ayarn",paraId:1,tocIndex:2},{value:"\u5168\u6587\u641C\u7D22\uFF08\u5185\u7F6E flexsearch\uFF09",paraId:2,tocIndex:3},{value:"\u660E\u6697\u4E3B\u9898\u5207\u6362",paraId:2,tocIndex:3},{value:"\u7EA6\u5B9A\u5F0F\u8DEF\u7531",paraId:2,tocIndex:3},{value:"Markdown \u6269\u5C55\uFF08Frontmatter\u3001\u4EE3\u7801\u9AD8\u4EAE\u3001\u5D4C\u5165 Demo\uFF09",paraId:2,tocIndex:3},{value:"\u54CD\u5E94\u5F0F\u8BBE\u8BA1",paraId:2,tocIndex:3},{value:"GitHub Actions \u81EA\u52A8\u90E8\u7F72",paraId:2,tocIndex:3},{value:`dumi-book/
\u251C\u2500\u2500 .dumirc.ts              # Dumi 2 \u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 .github/workflows/ci.yml # CI/CD \u914D\u7F6E
\u251C\u2500\u2500 docs/                    # \u6587\u6863\u76EE\u5F55
\u2502   \u251C\u2500\u2500 index.md             # \u9996\u9875
\u2502   \u251C\u2500\u2500 getting-started.md   # \u5FEB\u901F\u5F00\u59CB
\u2502   \u251C\u2500\u2500 guide.md             # \u4F7F\u7528\u6307\u5357
\u2502   \u251C\u2500\u2500 components.md        # \u7EC4\u4EF6\u793A\u4F8B
\u2502   \u251C\u2500\u2500 help.md              # \u5E2E\u52A9
\u2502   \u251C\u2500\u2500 changelog.md         # \u66F4\u65B0\u65E5\u5FD7
\u2502   \u251C\u2500\u2500 resources.md         # \u8D44\u6E90\u63A8\u8350
\u2502   \u2514\u2500\u2500 about.md            # \u5173\u4E8E
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 yarn.lock
\u2514\u2500\u2500 tsconfig.json
`,paraId:3,tocIndex:4},{value:"MIT License",paraId:4,tocIndex:5},{value:"GitHub \u4ED3\u5E93",paraId:5,tocIndex:6},{value:"Dumi 2 \u6587\u6863",paraId:5,tocIndex:6},{value:"dumi-theme-lobehub",paraId:5,tocIndex:6},{value:"\u95EE\u9898\u53CD\u9988",paraId:5,tocIndex:6}];a.d(e,["texts",0,d])}),77028:(function(I,e,a){a.r(e);const d=[{value:"2026-10-13",paraId:0,tocIndex:1},{value:"\u4ECE Dumi 1.x \u5347\u7EA7\u5230 ",paraId:1,tocIndex:2},{value:"Dumi 2.4.50",paraId:1,tocIndex:2},{value:"\uFF08\u57FA\u4E8E UmiJS 4.7\uFF09",paraId:1,tocIndex:2},{value:"\u96C6\u6210 ",paraId:1,tocIndex:2},{value:"dumi-theme-lobehub",paraId:1,tocIndex:2},{value:" \u4E3B\u9898\uFF0C\u73B0\u4EE3\u5316\u8BBE\u8BA1\u98CE\u683C",paraId:1,tocIndex:2},{value:"\u96C6\u6210 ",paraId:1,tocIndex:2},{value:"Ant Design 6",paraId:1,tocIndex:2},{value:" \u7EC4\u4EF6\u5E93",paraId:1,tocIndex:2},{value:"\u96C6\u6210 ",paraId:1,tocIndex:2},{value:"React 19",paraId:1,tocIndex:2},{value:"\u65B0\u589E ",paraId:1,tocIndex:2},{value:"\u4F7F\u7528\u6307\u5357",paraId:1,tocIndex:2},{value:" \u9875\u9762\uFF0C\u6DB5\u76D6\u914D\u7F6E\u3001\u8DEF\u7531\u3001Frontmatter\u3001\u641C\u7D22\u3001\u56FD\u9645\u5316",paraId:1,tocIndex:2},{value:"\u65B0\u589E ",paraId:1,tocIndex:2},{value:"\u7EC4\u4EF6\u793A\u4F8B",paraId:1,tocIndex:2},{value:" \u9875\u9762\uFF0C\u5C55\u793A React Demo \u80FD\u529B",paraId:1,tocIndex:2},{value:"\u65B0\u589E ",paraId:1,tocIndex:2},{value:"\u66F4\u65B0\u65E5\u5FD7",paraId:1,tocIndex:2},{value:" \u9875\u9762",paraId:1,tocIndex:2},{value:"\u65B0\u589E ",paraId:1,tocIndex:2},{value:"\u8D44\u6E90\u63A8\u8350",paraId:1,tocIndex:2},{value:" \u9875\u9762",paraId:1,tocIndex:2},{value:"\u65B0\u589E ",paraId:1,tocIndex:2},{value:"\u5173\u4E8E",paraId:1,tocIndex:2},{value:" \u9875\u9762",paraId:1,tocIndex:2},{value:"\u9996\u9875\u5347\u7EA7\u4E3A\u4E2D\u6587\uFF0C\u5C55\u793A 6 \u4E2A\u7279\u6027\u5361\u7247",paraId:1,tocIndex:2},{value:"\u660E\u6697\u4E3B\u9898\u5207\u6362\uFF08\u6D45\u8272 / \u6DF1\u8272 / \u8DDF\u968F\u7CFB\u7EDF\uFF09",paraId:2,tocIndex:3},{value:"\u6BDB\u73BB\u7483\u6548\u679C\u3001\u6E10\u53D8\u8272\u3001\u81EA\u7136\u52A8\u6548",paraId:2,tocIndex:3},{value:"\u8BED\u6CD5\u9AD8\u4EAE\u7F8E\u5316",paraId:2,tocIndex:3},{value:"\u5305\u7BA1\u7406\u5668\u4ECE npm \u5207\u6362\u5230 ",paraId:3,tocIndex:4},{value:"yarn",paraId:3,tocIndex:4},{value:"\u914D\u7F6E\u6587\u4EF6\u4ECE ",paraId:3,tocIndex:4},{value:".umirc.ts",paraId:3,tocIndex:4},{value:" \u8FC1\u79FB\u5230 ",paraId:3,tocIndex:4},{value:".dumirc.ts",paraId:3,tocIndex:4},{value:"CI \u5347\u7EA7\uFF1ANode 20 + yarn + frozen-lockfile",paraId:3,tocIndex:4},{value:"base",paraId:3,tocIndex:4},{value:" / ",paraId:3,tocIndex:4},{value:"publicPath",paraId:3,tocIndex:4},{value:" \u786C\u7F16\u7801\u4E3A ",paraId:3,tocIndex:4},{value:"/dumi-book/",paraId:3,tocIndex:4},{value:"\uFF0C\u4FEE\u590D GitHub Pages \u8D44\u6E90 404",paraId:3,tocIndex:4},{value:"\u4F9D\u8D56",paraId:4,tocIndex:5},{value:"\u7248\u672C",paraId:4,tocIndex:5},{value:"dumi",paraId:4,tocIndex:5},{value:"^2.4.0",paraId:4,tocIndex:5},{value:"react",paraId:4,tocIndex:5},{value:"^19.0.0",paraId:4,tocIndex:5},{value:"antd",paraId:4,tocIndex:5},{value:"^6.1.0",paraId:4,tocIndex:5},{value:"dumi-theme-lobehub",paraId:4,tocIndex:5},{value:"^5.0.0",paraId:4,tocIndex:5},{value:"@lobehub/ui",paraId:4,tocIndex:5},{value:"^4.3.0",paraId:4,tocIndex:5},{value:"@lobehub/icons",paraId:4,tocIndex:5},{value:"^4.0.0",paraId:4,tocIndex:5},{value:"motion",paraId:4,tocIndex:5},{value:"^12.0.0",paraId:4,tocIndex:5},{value:"2026-09-20",paraId:5,tocIndex:6},{value:"\u57FA\u4E8E ",paraId:6,tocIndex:7},{value:"Dumi 1.x",paraId:6,tocIndex:7},{value:" \u642D\u5EFA\u6587\u6863\u7AD9\u70B9",paraId:6,tocIndex:7},{value:"\u57FA\u7840\u9875\u9762\uFF1A\u9996\u9875\u3001\u5FEB\u901F\u4E0A\u624B\u3001\u5E2E\u52A9",paraId:6,tocIndex:7},{value:"GitHub Actions \u81EA\u52A8\u90E8\u7F72\u5230 GitHub Pages",paraId:6,tocIndex:7},{value:"\u4E2D\u82F1\u53CC\u8BED\u6587\u6863\u652F\u6301",paraId:6,tocIndex:7}];a.d(e,["texts",0,d])}),59798:(function(I,e,a){a.r(e);const d=[{value:"Dumi 2 \u652F\u6301\u5728 Markdown \u4E2D\u76F4\u63A5\u7F16\u5199 React \u7EC4\u4EF6 Demo\u3002",paraId:0,tocIndex:0},{value:"\u9879\u76EE\u5DF2\u5B89\u88C5 antd\uFF0C\u53EF\u76F4\u63A5\u5728 Demo \u4E2D\u4F7F\u7528\uFF1A",paraId:1,tocIndex:3},{value:"Dumi 2 \u652F\u6301\u901A\u8FC7 JSDoc \u6216 TypeScript \u7C7B\u578B\u81EA\u52A8\u751F\u6210 API \u8868\u683C\uFF1A",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:4},{value:"title",paraId:3,tocIndex:4},{value:"\u6807\u9898",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"count",paraId:3,tocIndex:4},{value:"\u6570\u91CF",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4},{value:"0",paraId:3,tocIndex:4},{value:"onClick",paraId:3,tocIndex:4},{value:"\u70B9\u51FB\u56DE\u8C03",paraId:3,tocIndex:4},{value:"() => void",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4}];a.d(e,["texts",0,d])}),90766:(function(I,e,a){a.r(e);const d=[{value:"Node.js >= 20\uFF08\u63A8\u8350\u4F7F\u7528 nvm \u7BA1\u7406\u7248\u672C\uFF09",paraId:0,tocIndex:1},{value:"pnpm >= 9 \u6216 yarn >= 4",paraId:0,tocIndex:1},{value:`# \u4F7F\u7528 yarn
yarn install

# \u6216\u4F7F\u7528 pnpm
pnpm install
`,paraId:1,tocIndex:2},{value:`# \u4F7F\u7528 yarn
yarn start

# \u6216\u4F7F\u7528 pnpm
pnpm start
`,paraId:2,tocIndex:3},{value:"\u542F\u52A8\u540E\u8BBF\u95EE ",paraId:3,tocIndex:3},{value:"http://localhost:1995",paraId:3,tocIndex:3},{value:" \u9884\u89C8\u7AD9\u70B9\u3002",paraId:3,tocIndex:3},{value:`yarn build
`,paraId:4,tocIndex:4},{value:"\u6784\u5EFA\u4EA7\u7269\u8F93\u51FA\u5230 ",paraId:5,tocIndex:4},{value:"dist/",paraId:5,tocIndex:4},{value:" \u76EE\u5F55\uFF0C\u53EF\u76F4\u63A5\u90E8\u7F72\u5230\u4EFB\u610F\u9759\u6001\u670D\u52A1\u5668\u3002",paraId:5,tocIndex:4},{value:"\u672C\u9879\u76EE\u901A\u8FC7 GitHub Actions \u81EA\u52A8\u90E8\u7F72\uFF1A",paraId:6,tocIndex:5},{value:"\u63A8\u9001\u4EE3\u7801\u5230 ",paraId:7,tocIndex:5},{value:"master",paraId:7,tocIndex:5},{value:" \u5206\u652F",paraId:7,tocIndex:5},{value:"CI \u81EA\u52A8\u6267\u884C ",paraId:7,tocIndex:5},{value:"yarn install",paraId:7,tocIndex:5},{value:" + ",paraId:7,tocIndex:5},{value:"yarn build",paraId:7,tocIndex:5},{value:"\u6784\u5EFA\u4EA7\u7269\u90E8\u7F72\u5230 ",paraId:7,tocIndex:5},{value:"build",paraId:7,tocIndex:5},{value:" \u5206\u652F",paraId:7,tocIndex:5},{value:"GitHub Pages \u4ECE ",paraId:7,tocIndex:5},{value:"build",paraId:7,tocIndex:5},{value:" \u5206\u652F\u63D0\u4F9B\u670D\u52A1",paraId:7,tocIndex:5},{value:"\u6CE8\u610F",paraId:8,tocIndex:5},{value:"\uFF1A",paraId:8,tocIndex:5},{value:".dumirc.ts",paraId:8,tocIndex:5},{value:" \u4E2D\u7684 ",paraId:8,tocIndex:5},{value:"base",paraId:8,tocIndex:5},{value:" \u548C ",paraId:8,tocIndex:5},{value:"publicPath",paraId:8,tocIndex:5},{value:" \u5FC5\u987B\u4E0E\u4ED3\u5E93\u540D\u4E00\u81F4\uFF0C\u5426\u5219\u8D44\u6E90\u4F1A 404\u3002",paraId:8,tocIndex:5},{value:`// .dumirc.ts
const repo = 'dumi-book';

export default defineConfig({
  base: \`/\${repo}/\`,
  publicPath: \`/\${repo}/\`,
});
`,paraId:9,tocIndex:5},{value:`dumi-book/
\u251C\u2500\u2500 .dumirc.ts          # Dumi 2 \u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 .github/
\u2502   \u2514\u2500\u2500 workflows/
\u2502       \u2514\u2500\u2500 ci.yml      # GitHub Actions CI/CD
\u251C\u2500\u2500 docs/               # \u6587\u6863\u76EE\u5F55
\u2502   \u251C\u2500\u2500 index.md        # \u9996\u9875
\u2502   \u251C\u2500\u2500 getting-started.md
\u2502   \u251C\u2500\u2500 guide.md
\u2502   \u251C\u2500\u2500 components.md
\u2502   \u2514\u2500\u2500 help.md
\u251C\u2500\u2500 package.json
\u2514\u2500\u2500 yarn.lock
`,paraId:10,tocIndex:6}];a.d(e,["texts",0,d])}),59762:(function(I,e,a){a.r(e);const d=[{value:"Dumi 2 \u4F7F\u7528 ",paraId:0,tocIndex:1},{value:".dumirc.ts",paraId:0,tocIndex:1},{value:" \u4F5C\u4E3A\u914D\u7F6E\u6587\u4EF6\uFF0C\u57FA\u4E8E UmiJS 4\u3002",paraId:0,tocIndex:1},{value:`// .dumirc.ts
import { defineConfig } from 'dumi';

const repo = 'dumi-book';

export default defineConfig({
  title: 'dumi-book',
  base: \`/\${repo}/\`,
  publicPath: \`/\${repo}/\`,
});
`,paraId:1,tocIndex:2},{value:"dumi-theme-lobehub \u5B89\u88C5\u540E\u81EA\u52A8\u52A0\u8F7D\uFF0C\u53EF\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"themeConfig",paraId:2,tocIndex:3},{value:" \u8FDB\u884C\u5B9A\u5236\uFF1A",paraId:2,tocIndex:3},{value:`export default defineConfig({
  themeConfig: {
    name: 'dumi-book',
    logo: '/logo.png',
    giscus: {
      repo: 'pyd94666/dumi-book',
      repoId: 'your-repo-id', // \u4ECE giscus.app \u83B7\u53D6
      category: 'Announcements',
      categoryId: 'your-category-id', // \u4ECE giscus.app \u83B7\u53D6
    },
  },
});
`,paraId:3,tocIndex:3},{value:"Dumi 2 \u91C7\u7528\u7EA6\u5B9A\u5F0F\u8DEF\u7531\uFF0C",paraId:4,tocIndex:4},{value:"docs/",paraId:4,tocIndex:4},{value:" \u76EE\u5F55\u4E0B\u7684 ",paraId:4,tocIndex:4},{value:".md",paraId:4,tocIndex:4},{value:" \u6587\u4EF6\u81EA\u52A8\u751F\u6210\u8DEF\u7531\uFF1A",paraId:4,tocIndex:4},{value:"\u6587\u4EF6\u8DEF\u5F84",paraId:5,tocIndex:4},{value:"\u8DEF\u7531",paraId:5,tocIndex:4},{value:"docs/index.md",paraId:5,tocIndex:4},{value:"/",paraId:5,tocIndex:4},{value:"docs/getting-started.md",paraId:5,tocIndex:4},{value:"/getting-started",paraId:5,tocIndex:4},{value:"docs/guide.md",paraId:5,tocIndex:4},{value:"/guide",paraId:5,tocIndex:4},{value:"docs/components.md",paraId:5,tocIndex:4},{value:"/components",paraId:5,tocIndex:4},{value:"\u6BCF\u4E2A\u9875\u9762\u53EF\u901A\u8FC7 Frontmatter \u914D\u7F6E\u5BFC\u822A\u680F\u663E\u793A\uFF1A",paraId:6,tocIndex:5},{value:`---
nav:
  title: \u9875\u9762\u6807\u9898 # \u5BFC\u822A\u680F\u663E\u793A\u540D\u79F0
  order: 1 # \u6392\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5C0F\u8D8A\u9760\u524D
---
`,paraId:7,tocIndex:5},{value:"\u652F\u6301\u8BED\u6CD5\u9AD8\u4EAE\u548C\u4EE3\u7801\u6807\u9898\uFF1A",paraId:8,tocIndex:7},{value:`\`\`\`tsx | title="\u793A\u4F8B\u4EE3\u7801"
import React from 'react';

export default function App() {
  return <h1>Hello Dumi</h1>;
}
\`\`\`
`,paraId:9,tocIndex:7},{value:"Dumi 2 \u652F\u6301\u5728 Markdown \u4E2D\u76F4\u63A5\u5D4C\u5165 React \u7EC4\u4EF6 Demo\uFF0C\u8BE6\u89C1",paraId:10,tocIndex:8},{value:"\u7EC4\u4EF6\u793A\u4F8B",paraId:11,tocIndex:8},{value:"\u9875\u9762\u3002",paraId:10,tocIndex:8},{value:`| \u5217 1 | \u5217 2 | \u5217 3 |
| ---- | ---- | ---- |
| A    | B    | C    |
`,paraId:12,tocIndex:9},{value:"Dumi 2 \u5185\u7F6E\u5168\u6587\u641C\u7D22\u529F\u80FD\uFF0C\u57FA\u4E8E flexsearch\uFF0C\u65E0\u9700\u989D\u5916\u914D\u7F6E\uFF1A",paraId:13,tocIndex:10},{value:"\u641C\u7D22\u8303\u56F4\u8986\u76D6\u6807\u9898\u3001\u6B63\u6587\u3001Demo",paraId:14,tocIndex:10},{value:"\u652F\u6301\u4E2D\u82F1\u6587\u5206\u8BCD",paraId:14,tocIndex:10},{value:"\u79BB\u7EBF\u53EF\u7528\uFF08Service Worker\uFF09",paraId:14,tocIndex:10},{value:"Dumi 2 \u652F\u6301\u591A\u8BED\u8A00\uFF0C\u6587\u4EF6\u547D\u540D\u7EA6\u5B9A\uFF1A",paraId:15,tocIndex:11},{value:"\u6587\u4EF6",paraId:16,tocIndex:11},{value:"\u8BED\u8A00",paraId:16,tocIndex:11},{value:"docs/index.md",paraId:16,tocIndex:11},{value:"\u9ED8\u8BA4\uFF08\u82F1\u6587\uFF09",paraId:16,tocIndex:11},{value:"docs/index.zh-CN.md",paraId:16,tocIndex:11},{value:"\u4E2D\u6587",paraId:16,tocIndex:11},{value:"\u5982\u9700\u6DF1\u5EA6\u81EA\u5B9A\u4E49\u4E3B\u9898\u6837\u5F0F\uFF0C\u53EF\u901A\u8FC7\u8986\u76D6 CSS \u53D8\u91CF\u5B9E\u73B0\uFF1A",paraId:17,tocIndex:12},{value:`:root {
  --lobe-color-primary: #1677ff;
  --lobe-color-bg: #ffffff;
}
`,paraId:18,tocIndex:12}];a.d(e,["texts",0,d])}),90417:(function(I,e,a){a.r(e);const d=[{value:"\u68C0\u67E5 ",paraId:0,tocIndex:2},{value:".dumirc.ts",paraId:0,tocIndex:2},{value:" \u4E2D\u7684 ",paraId:0,tocIndex:2},{value:"base",paraId:0,tocIndex:2},{value:" \u548C ",paraId:0,tocIndex:2},{value:"publicPath",paraId:0,tocIndex:2},{value:" \u662F\u5426\u4E0E GitHub \u4ED3\u5E93\u540D\u4E00\u81F4\uFF1A",paraId:0,tocIndex:2},{value:"const repo = 'dumi-book';\n\nexport default defineConfig({\n  base: `/${repo}/`,\n  publicPath: `/${repo}/`,\n});\n",paraId:1,tocIndex:2},{value:"\u70B9\u51FB\u53F3\u4E0A\u89D2\u4E3B\u9898\u5207\u6362\u6309\u94AE\uFF0C\u652F\u6301 \u6D45\u8272 / \u6DF1\u8272 / \u8DDF\u968F\u7CFB\u7EDF \u4E09\u79CD\u6A21\u5F0F\u3002",paraId:2,tocIndex:3},{value:"\u5728 ",paraId:3,tocIndex:4},{value:"docs/",paraId:3,tocIndex:4},{value:" \u76EE\u5F55\u4E0B\u521B\u5EFA\u65B0\u7684 ",paraId:3,tocIndex:4},{value:".md",paraId:3,tocIndex:4},{value:" \u6587\u4EF6\uFF0C\u8DEF\u7531\u4F1A\u81EA\u52A8\u751F\u6210\u3002\u4F8B\u5982 ",paraId:3,tocIndex:4},{value:"docs/guide.md",paraId:3,tocIndex:4},{value:" \u5BF9\u5E94 ",paraId:3,tocIndex:4},{value:"/guide",paraId:3,tocIndex:4},{value:" \u8DEF\u7531\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 Frontmatter \u914D\u7F6E\u5BFC\u822A\u680F\u663E\u793A\uFF1A",paraId:4,tocIndex:4},{value:`---
nav:
  title: \u9875\u9762\u6807\u9898
  order: 1
---
`,paraId:5,tocIndex:4},{value:"\u672C\u9879\u76EE\u4F7F\u7528 Giscus\uFF08\u57FA\u4E8E GitHub Discussions\uFF09\u4F5C\u4E3A\u8BC4\u8BBA\u7CFB\u7EDF\u3002\u914D\u7F6E\u6B65\u9AA4\uFF1A",paraId:6,tocIndex:5},{value:"\u5728 GitHub \u4ED3\u5E93 Settings \u2192 General \u2192 Features \u4E2D\u52FE\u9009 ",paraId:7,tocIndex:5},{value:"Discussions",paraId:7,tocIndex:5},{value:"\u5B89\u88C5 ",paraId:7,tocIndex:5},{value:"Giscus App",paraId:7,tocIndex:5},{value:" \u5E76\u6388\u6743\u4ED3\u5E93",paraId:7,tocIndex:5},{value:"\u8BBF\u95EE ",paraId:7,tocIndex:5},{value:"giscus.app",paraId:7,tocIndex:5},{value:" \u83B7\u53D6 ",paraId:7,tocIndex:5},{value:"repoId",paraId:7,tocIndex:5},{value:" \u548C ",paraId:7,tocIndex:5},{value:"categoryId",paraId:7,tocIndex:5},{value:"\u5728 ",paraId:7,tocIndex:5},{value:".dumirc.ts",paraId:7,tocIndex:5},{value:" \u4E2D\u914D\u7F6E\uFF1A",paraId:7,tocIndex:5},{value:`export default defineConfig({
  themeConfig: {
    giscus: {
      repo: 'pyd94666/dumi-book',
      repoId: 'your-repo-id',
      category: 'Announcements',
      categoryId: 'your-category-id',
    },
  },
});
`,paraId:8,tocIndex:5},{value:"\u5BFC\u822A\u83DC\u5355\u7531 Frontmatter \u7684 ",paraId:9,tocIndex:6},{value:"nav",paraId:9,tocIndex:6},{value:" \u5B57\u6BB5\u63A7\u5236\uFF0C",paraId:9,tocIndex:6},{value:"order",paraId:9,tocIndex:6},{value:" \u51B3\u5B9A\u6392\u5217\u987A\u5E8F\uFF1A",paraId:9,tocIndex:6},{value:`---
nav:
  title: \u9875\u9762\u540D\u79F0
  order: 1 # \u6570\u5B57\u8D8A\u5C0F\u8D8A\u9760\u524D
---
`,paraId:10,tocIndex:6},{value:"\u9ED8\u8BA4\u7AEF\u53E3\u4E3A 1995\u3002\u5982\u9700\u4FEE\u6539\uFF0C\u5728 ",paraId:11,tocIndex:7},{value:".dumirc.ts",paraId:11,tocIndex:7},{value:" \u4E2D\u914D\u7F6E ",paraId:11,tocIndex:7},{value:"vite.server.port",paraId:11,tocIndex:7},{value:" \u6216\u542F\u52A8\u65F6\u6307\u5B9A\uFF1A",paraId:11,tocIndex:7},{value:`PORT=3000 yarn start
`,paraId:12,tocIndex:7},{value:"\u6280\u672F",paraId:13,tocIndex:8},{value:"\u7248\u672C",paraId:13,tocIndex:8},{value:"\u8BF4\u660E",paraId:13,tocIndex:8},{value:"Dumi",paraId:13,tocIndex:8},{value:"^2.4.0",paraId:13,tocIndex:8},{value:"\u6587\u6863\u7AD9\u70B9\u6846\u67B6",paraId:13,tocIndex:8},{value:"React",paraId:13,tocIndex:8},{value:"^19.0.0",paraId:13,tocIndex:8},{value:"UI \u5E93",paraId:13,tocIndex:8},{value:"UmiJS",paraId:13,tocIndex:8},{value:"^4.7.0",paraId:13,tocIndex:8},{value:"\u5E95\u5C42\u6846\u67B6",paraId:13,tocIndex:8},{value:"antd",paraId:13,tocIndex:8},{value:"^6.0.0",paraId:13,tocIndex:8},{value:"\u7EC4\u4EF6\u5E93",paraId:13,tocIndex:8},{value:"dumi-theme-lobehub",paraId:13,tocIndex:8},{value:"^5.0.0",paraId:13,tocIndex:8},{value:"\u4E3B\u9898\u5305",paraId:13,tocIndex:8},{value:"Giscus",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"\u8BC4\u8BBA\u7CFB\u7EDF",paraId:13,tocIndex:8},{value:"Dumi 2 \u6587\u6863",paraId:14,tocIndex:9},{value:"UmiJS 4 \u6587\u6863",paraId:14,tocIndex:9},{value:"dumi-theme-lobehub",paraId:14,tocIndex:9},{value:"Ant Design",paraId:14,tocIndex:9},{value:"Giscus",paraId:14,tocIndex:9}];a.d(e,["texts",0,d])}),38158:(function(I,e,a){a.r(e);const d=[{value:"\u8FD9\u662F\u4E00\u4E2A\u4F7F\u7528 ",paraId:0,tocIndex:0},{value:"Dumi 2",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"dumi-theme-lobehub",paraId:0,tocIndex:0},{value:" \u4E3B\u9898\u6784\u5EFA\u7684\u4E2A\u4EBA\u6587\u6863\u7AD9\u70B9\u3002",paraId:0,tocIndex:0}];a.d(e,["texts",0,d])}),28223:(function(I,e,a){a.r(e);const d=[{value:"\u6846\u67B6",paraId:0,tocIndex:1},{value:"\u8BF4\u660E",paraId:0,tocIndex:1},{value:"\u94FE\u63A5",paraId:0,tocIndex:1},{value:"Dumi 2",paraId:0,tocIndex:1},{value:"React \u7EC4\u4EF6\u6587\u6863\u6846\u67B6\uFF0C\u672C\u9879\u76EE\u4F7F\u7528",paraId:0,tocIndex:1},{value:"d.umijs.org",paraId:0,tocIndex:1},{value:"Docusaurus",paraId:0,tocIndex:1},{value:"Facebook \u51FA\u54C1\u7684\u6587\u6863\u7AD9\u70B9\u6846\u67B6",paraId:0,tocIndex:1},{value:"docusaurus.io",paraId:0,tocIndex:1},{value:"VitePress",paraId:0,tocIndex:1},{value:"Vue \u9A71\u52A8\u7684\u9759\u6001\u6587\u6863\u751F\u6210\u5668",paraId:0,tocIndex:1},{value:"vitepress.dev",paraId:0,tocIndex:1},{value:"Astro Starlight",paraId:0,tocIndex:1},{value:"Astro \u7684\u6587\u6863\u4E3B\u9898",paraId:0,tocIndex:1},{value:"starlight.astro.build",paraId:0,tocIndex:1},{value:"\u5E93",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u94FE\u63A5",paraId:1,tocIndex:2},{value:"Ant Design",paraId:1,tocIndex:2},{value:"\u4F01\u4E1A\u7EA7 React UI \u7EC4\u4EF6\u5E93",paraId:1,tocIndex:2},{value:"ant.design",paraId:1,tocIndex:2},{value:"@lobehub/ui",paraId:1,tocIndex:2},{value:"Lobehub \u73B0\u4EE3\u5316 UI \u7EC4\u4EF6",paraId:1,tocIndex:2},{value:"lobehub.com",paraId:1,tocIndex:2},{value:"Arco Design",paraId:1,tocIndex:2},{value:"\u5B57\u8282\u8DF3\u52A8\u51FA\u54C1\u7684\u8BBE\u8BA1\u7CFB\u7EDF",paraId:1,tocIndex:2},{value:"arco.design",paraId:1,tocIndex:2},{value:"Semi Design",paraId:1,tocIndex:2},{value:"\u6296\u97F3\u51FA\u54C1\u7684\u8BBE\u8BA1\u7CFB\u7EDF",paraId:1,tocIndex:2},{value:"semi.design",paraId:1,tocIndex:2},{value:"\u5DE5\u5177",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u94FE\u63A5",paraId:2,tocIndex:3},{value:"Giscus",paraId:2,tocIndex:3},{value:"\u57FA\u4E8E GitHub Discussions \u7684\u8BC4\u8BBA\u7CFB\u7EDF",paraId:2,tocIndex:3},{value:"giscus.app",paraId:2,tocIndex:3},{value:"GitHub Actions",paraId:2,tocIndex:3},{value:"CI/CD \u81EA\u52A8\u5316",paraId:2,tocIndex:3},{value:"docs.github.com",paraId:2,tocIndex:3},{value:"GitHub Pages",paraId:2,tocIndex:3},{value:"\u514D\u8D39\u9759\u6001\u7AD9\u70B9\u6258\u7BA1",paraId:2,tocIndex:3},{value:"pages.github.com",paraId:2,tocIndex:3},{value:"Vercel",paraId:2,tocIndex:3},{value:"\u524D\u7AEF\u90E8\u7F72\u5E73\u53F0",paraId:2,tocIndex:3},{value:"vercel.com",paraId:2,tocIndex:3},{value:"\u4E3B\u9898",paraId:3,tocIndex:4},{value:"\u7279\u70B9",paraId:3,tocIndex:4},{value:"\u94FE\u63A5",paraId:3,tocIndex:4},{value:"dumi-theme-lobehub",paraId:3,tocIndex:4},{value:"\u6E10\u53D8\u8272\u3001\u6BDB\u73BB\u7483\u3001Lobehub \u98CE\u683C",paraId:3,tocIndex:4},{value:"npm",paraId:3,tocIndex:4},{value:"dumi-theme-xieyezi",paraId:3,tocIndex:4},{value:"\u57FA\u4E8E lobehub \u4E8C\u5F00\uFF0C\u73B0\u4EE3\u5316\u8BBE\u8BA1",paraId:3,tocIndex:4},{value:"npm",paraId:3,tocIndex:4},{value:"dumi-theme-antd-style",paraId:3,tocIndex:4},{value:"\u6D41\u52A8\u8272\u3001\u6BDB\u73BB\u7483\uFF0Carvinxx \u51FA\u54C1",paraId:3,tocIndex:4},{value:"npm",paraId:3,tocIndex:4},{value:"\u8D44\u6E90",paraId:4,tocIndex:5},{value:"\u8BF4\u660E",paraId:4,tocIndex:5},{value:"\u94FE\u63A5",paraId:4,tocIndex:5},{value:"UmiJS \u6587\u6863",paraId:4,tocIndex:5},{value:"Dumi 2 \u5E95\u5C42\u6846\u67B6",paraId:4,tocIndex:5},{value:"umijs.org",paraId:4,tocIndex:5},{value:"React \u6587\u6863",paraId:4,tocIndex:5},{value:"\u5B98\u65B9\u6587\u6863\uFF08\u4E2D\u6587\uFF09",paraId:4,tocIndex:5},{value:"zh-hans.react.dev",paraId:4,tocIndex:5},{value:"TypeScript \u6587\u6863",paraId:4,tocIndex:5},{value:"\u7C7B\u578B\u7CFB\u7EDF",paraId:4,tocIndex:5},{value:"typescriptlang.org",paraId:4,tocIndex:5},{value:"MDN Web Docs",paraId:4,tocIndex:5},{value:"Web \u6280\u672F\u6587\u6863",paraId:4,tocIndex:5},{value:"developer.mozilla.org",paraId:4,tocIndex:5},{value:"\u5DE5\u5177",paraId:5,tocIndex:6},{value:"\u8BF4\u660E",paraId:5,tocIndex:6},{value:"\u94FE\u63A5",paraId:5,tocIndex:6},{value:"nvm",paraId:5,tocIndex:6},{value:"Node \u7248\u672C\u7BA1\u7406",paraId:5,tocIndex:6},{value:"github",paraId:5,tocIndex:6},{value:"pnpm",paraId:5,tocIndex:6},{value:"\u9AD8\u6027\u80FD\u5305\u7BA1\u7406\u5668",paraId:5,tocIndex:6},{value:"pnpm.io",paraId:5,tocIndex:6},{value:"yarn",paraId:5,tocIndex:6},{value:"\u5305\u7BA1\u7406\u5668",paraId:5,tocIndex:6},{value:"yarnpkg.com",paraId:5,tocIndex:6},{value:"Trae",paraId:5,tocIndex:6},{value:"AI \u9A71\u52A8\u7684 IDE",paraId:5,tocIndex:6},{value:"trae.cn",paraId:5,tocIndex:6}];a.d(e,["texts",0,d])})}]);
