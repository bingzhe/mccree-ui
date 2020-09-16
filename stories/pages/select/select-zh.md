---
title: React Select 选择器组件
components: Select
---

### Select

<!-- prettier-ignore-start -->
<!-- prettier-ignore-end -->

| 参数         | 类型                               | 默认值 | 说明                   |
| :----------- | :--------------------------------- | :----- | :--------------------- |
| value        | string&#124;string[]               | -      | 设置选择器的值         |
| defaultValue | string&#124;string[]               | -      | 选择器初始值           |
| placeholder  | string                             | -      | 占位文本内容           |
| width        | string                             | "100%" | 选择器宽度             |
| pure         | boolean                            | false  | 隐藏右侧图标组件       |
| multiple     | boolean                            | false  | 是否多选               |
| disabled     | boolean                            | false  | 禁用                   |
| onChange     | (val: string&#124;string[]) => voi | -      | value 改变时触发的时间 |

### Select.Option

| 参数     | 类型    | 默认值 | 说明               |
| :------- | :------ | :----- | :----------------- |
| value    | string  | -      | 唯一鉴别值         |
| disabled | boolean | false  | 禁用当前选项       |
| label    | boolean | false  | 是否为选项分组标签 |
| divider  | boolean | false  | 是否为修饰用的线条 |
