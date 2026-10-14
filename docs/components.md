---
nav:
  title: 组件示例
  order: 3
---

# 组件示例

Dumi 2 支持在 Markdown 中直接编写 React 组件 Demo。

## 基础示例

```tsx
import React from 'react';

export default function Demo() {
  return (
    <div style={{ padding: 24, background: '#f0f2f5', borderRadius: 8 }}>
      <h3>Hello Dumi 2!</h3>
      <p>这是一个嵌入在 Markdown 中的 React 组件。</p>
    </div>
  );
}
```

## 交互示例

```tsx
import React, { useState } from 'react';

export default function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 24, textAlign: 'center' }}>
      <h3>计数器：{count}</h3>
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
          重置
        </button>
      </div>
    </div>
  );
}
```

## 使用 Ant Design

项目已安装 antd，可直接在 Demo 中使用：

```tsx
import React from 'react';
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
        点击我
      </Button>
      <Button>默认按钮</Button>
      <Button type="dashed">虚线按钮</Button>
    </Space>
  );
}
```

## API 表格

Dumi 2 支持通过 JSDoc 或 TypeScript 类型自动生成 API 表格：

| 属性    | 说明     | 类型       | 默认值 |
| ------- | -------- | ---------- | ------ |
| title   | 标题     | string     | -      |
| count   | 数量     | number     | 0      |
| onClick | 点击回调 | () => void | -      |
