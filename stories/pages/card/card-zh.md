---
title: React Checkbox 多选框组件
components: Checkbox
---

# Card 卡片

<p class="description">通用卡片容器</p>

卡片是一个显示与单个主题相关的内容和操作的容器。

## Basic

{{"demo": "pages/card/CardBase.js"}}

## variant

设置 `variant="outlined"` 来渲染一个有边框的卡片

{{"demo": "pages/card/CardVariant.js"}}

## hoverable

可悬停

{{"demo": "pages/card/CardHoverable.js"}}

## shadow

阴影

{{"demo": "pages/card/CardShadow.js"}}

## type

以各式色彩表达不同的类型或状态。

{{"demo": "pages/card/CardType.js"}}

## Card Footer

卡片页脚

{{"demo": "pages/card/CardFooter.js"}}

## API

### Card

<!-- prettier-ignore-start -->
| 参数      | 类型                        | 默认值      | 说明                 |
| :-------- | :-------------------------- | :---------- | :------------------- |
| variant   | 'contained'&#124;'outlined' | 'contained' | 卡片的样式             |
| hoverable | boolean                     | false       | 是否在悬停时增加阴影 |
| shadow    | boolean                     | false       | 是否总是显示阴影     |
| width     | string                      | 100%        | CSS 宽度属性         |
| type | 'primary'&#124;'secondary'<br>&#124;'success'&#124;'warning'<br>&#124;error'&#124;'info' | - | 卡片的类型|
<!-- prettier-ignore-end -->

### Card.Footer(别名：Card.Actions)/Card.Content

<!-- prettier-ignore-start -->
| 参数                  | 类型             | 默认值 | 说明     |
| :-------------------- | :--------------- | :----- | :------- |
| 'id', className', ... | 'HTMLAttributes' | -      | 原生属性 |
<!-- prettier-ignore-end -->
