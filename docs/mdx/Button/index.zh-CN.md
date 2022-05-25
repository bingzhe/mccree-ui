---
title: Button 按钮
mobile: true
nav:
    path: /components
---

# Button 按钮

```tsx
import React from "react";
import { Button } from "@mccree-ui/components";
import "@mccree-ui/components/Button/style/index";

export default () => {
    return <Button>default</Button>;
};
```

## API

| 属性        | 说明                                                   | 类型                                                                           | 默认值    |
| ----------- | ------------------------------------------------------ | ------------------------------------------------------------------------------ | --------- |
| className   | 节点类名                                               | `string`                                                                       | -         |
| style       | 节点样式                                               | `CSSProperties`                                                                | -         |
| variant     | 按钮形式                                               | `"default" &#124; "dashed" &#124; "text" &#124; "outline"`                     | `default` |
| theme       | 按钮主题                                               | `"default" &#124; "primary" &#124; "success" &#124; "danger" &#124; "warning"` | `default` |
| size        | 按钮尺寸                                               | `"small" &#124; "default" &#124; "large"`                                      | `default` |
| shape       | 按钮形状                                               | `"circle" &#124; "round" &#124; "square"`                                      | `square`  |
| disabled    | 是否禁用                                               | `boolean`                                                                      | `false`   |
| loading     | 是否加载状态                                           | `boolean`                                                                      | `false`   |
| block       | 按钮宽度随容器自适应                                   | `boolean`                                                                      | `false`   |
| ghost       | 是否是幽灵按钮                                         | `boolean`                                                                      | `false`   |
| icon        | 按钮图标                                               | `ReactNode`                                                                    | `false`   |
| href        | 添加跳转链接，设置此属性，`button` 表现跟 `a` 标签一致 | `string`                                                                       | -         |
| anchorProps | `a` 链接的原生属性，`href` 存在时生效                  | `HTMLProps<HTMLAnchorElement>`                                                 | -         |
| onClick     | 点击按钮的回调                                         | `(e: MouseEvent) => void`                                                      | -         |
