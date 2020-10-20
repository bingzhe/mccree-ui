---
title: React Loading 选择器组件
components: Loading
---

### Loading

<!-- prettier-ignore-start -->
| 参数     | 类型       | 默认值 | 说明             |
| :------- | :--------- | :----- | :--------------- |
| type | "default"&#124;"waves"&#124; "corners"&#124;"border"&#124;<br>"points"&#124;"square"&#124; "gradient"&#124;"rectangle"&#124;<br>"circles"&#124;"scale"&#124;"dots" | 'default' | 水平还是垂直类型 |
| tip      | string     | -      | 自定义描述文案   |
| spinning | boolean    | true   | 是否为加载中状态 |
| color    | ColorTypes | -      | 组件颜色         |
<!-- prettier-ignore-end -->

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
