---
title: React Divider 分割线
components: Divider
---

### Select

<!-- prettier-ignore-start -->
<!-- prettier-ignore-end -->

| 参数   | 类型                              | 默认值       | 说明                       |
| :----- | :-------------------------------- | :----------- | :------------------------- |
| type   | 'horizontal'&#124;'vertical'      | 'horizontal' | 水平还是垂直类型           |
| align  | 'left'&#124;'right'&#124;'center' | 'center'     | 分割线标题的位置           |
| dashed | boolean                           | -            | 是否虚线                   |
| plain  | boolean                           | -            | 文字是否显示为普通正文样式 |
| color  | ColorTypes                        | -            | 组件颜色                   |

### ColorTypes

```ts
type ColorTypes =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "RGB"
    | "HEX";
```
