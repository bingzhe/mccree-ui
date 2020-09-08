---
title: React Grid 栅格
components: Grid
---

# Grid 栅格

<p class="description">24 栅格系统</p>

栅格化系统使用 动态 CSS 媒体查询 实现响应式布局，基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。

## Basic 基础栅格

使用单一的一组 `Grid.Container` 和 `Grid` 栅格组件，就可以创建一个基本的栅格系统，所有 `Grid` 必须放在 `Grid.Container` 内。

{{"demo": "pages/grid/GridBase.js"}}

## Responsive 响应式布局

参照 `Bootstrap` 的 响应式设计，预设六个响应尺寸：`xs` `sm` `md` `lg` `xl` `xxl`。

{{"demo": "pages/grid/GridResponsive.js"}}

## Gutter 间隔

栅格常常需要和间隔进行配合，你可以使用 `Grid.Container` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔(`n` 是自然数)。

如果要支持响应式，可以写成 `{ xs: 8, sm: 16, md: 24, lg: 32 }`。

{{"demo": "pages/grid/GridGutter.js"}}

## Offset 偏移

使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移了 4 个列 `column` 的宽度。

{{"demo": "pages/grid/GridOffset.js"}}

## Pull/Push 移动

`pull`栅格向左移动格数, `push` 栅格向右移动格数。

{{"demo": "pages/grid/GridPullPush.js"}}

## Justify 排版

通过`Grid.Container`组件的`justify`属性来定义其在父节点里面的排版方式, 可以设置为`start`,`center`,`end`,`space-between`,`space-around`。和 Flex 布局的`justify-content`的排版保持一致。

{{"demo": "pages/grid/GridJustify.js"}}

## Align 对齐

通过`Grid.Container`组件的`align`属性来定义其在父节点里面的排版方式

{{"demo": "pages/grid/GridAlign.js"}}

## Order 排序

通过 `order` 来改变元素的排序

{{"demo": "pages/grid/GridOrder.js"}}

## Flex 填充

Grid 提供 flex 属性以支持填充。

{{"demo": "pages/grid/GridFlex.js"}}

## API

### Grid.Container

<!-- prettier-ignore-start -->
| 参数  | 类型                               | 默认值 | 说明         |
| :---- | :--------------------------------- | :----- | :----------- |
| gutter | number&#124;object&#124;array | 0 | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 `{ xs: 8, sm: 16, md: 24}`。或者使用数组形式同时设置 [水平间距, 垂直间距] |
| align | top&#124;middl&#124;bottom | top | 垂直对齐方式 |
| justify | start&#124;end&#124;center&#124;space-around&#124;space-between| start | 水平排列方式 |
<!-- prettier-ignore-end -->

### Grid

<!-- prettier-ignore-start -->
| 参数   | 类型               | 默认值 | 说明                                                           |
| :----- | :----------------- | :----- | :------------------------------------------------------------- |
| flex   | string&#124;number | -      | flex 布局属性                                                  |
| span   | number             | -      | 栅格占位格数，为 0 时相当于 `display: none`                    |
| offset | number             | 0      | 栅格左侧的间隔格数，间隔内不可以有栅格                         |
| order  | number             | 0      | 栅格顺序                                                       |
| pull   | number             | 0      | 栅格向左移动格数                                               |
| push   | number             | 0      | 栅格向右移动格数                                               |
| xs     | number&#124;object | -      | 屏幕 `< 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  |
| sm     | number&#124;object | -      | 屏幕 `≥ 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  |
| md     | number&#124;object | -      | 屏幕 `≥ 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象  |
| lg     | number&#124;object | -      | 屏幕 `≥ 992px` 响应式栅格，可为栅格数或一个包含其他属性的对象  |
| xl     | number&#124;object | -      | 屏幕 `≥ 1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 |
| xll    | number&#124;object | -      | 屏幕 `≥ 1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 |
<!-- prettier-ignore-end -->
