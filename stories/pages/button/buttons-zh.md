---
title: React Button 按钮组件
components: Button
---

# Button 按钮

<p class="description">按钮用于开始一个即时操作</p>

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## Basic

实心按钮，`type`控制样式

{{"demo": "pages/button/ButtonBase.js"}}

## Outline

描边按钮, 用`variant="outline"`控制

{{"demo": "pages/button/ButtonOutline.js"}}

## Text

文本按钮, 用`variant="text"`控制

{{"demo": "pages/button/ButtonText.js"}}

## Disabled

不可用状态

{{"demo": "pages/button/ButtonDisabled.js"}}

## Size

通过设置 `size` 为 `large` `medium` `small` 分别把按钮设为大、中、小尺寸。若不设置 `size`，则尺寸为中

{{"demo": "pages/button/ButtonSize.js"}}

## Block

`block`属性将使按钮宽度调整为其父宽度

{{"demo": "pages/button/ButtonBlock.js"}}

## Link

`href`设置点击跳转的地址，设置了此属性 button 的行为和 a 链接一致

{{"demo": "pages/button/ButtonLink.js"}}

## Loading

加载中状态， 添加 loading 属性即可让按钮处于加载状态

{{"demo": "pages/button/ButtonLoading.js"}}

## Icon

图标按钮，按钮中嵌入图标时候，可以通过设置 `startIcon` `endIcon` 属性，或者直接在 Button 内使用 Icon 组件。

{{"demo": "pages/button/ButtonIcon.js"}}

## Shape

设置`shape`为 `round` `circle` 控制样式

{{"demo": "pages/button/ButtonShape.js"}}

### API

<!-- prettier-ignore-start -->
| 参数     | 类型    | 默认值 | 说明         |
| :------- | :------ | :----- | :----------- |
| disabled | boolean | false  | 按钮失效状态 |
| type | 'primary'&#124;'secondary'&#124;'success'&#124;<br>'warning'&#124;'error'&#124;'info' | - | 按钮颜色 |
| variant | 'contain'&#124;'outline'&#124;'text' | 'contain' | 按钮类型 |
| size | 'large'&#124;'medium'&#124;'large' | 'medium' | 设置按钮大小 |
| loading | boolean &#124; { delay: number } | false | 设置按钮加载中状态 |
| block | boolean | false | 将按钮宽度调整为其父宽度 |
| startIcon | React.ReactNode | - | 按钮前面的图标组件 |
| endIcon | React.ReactNode | - | 按钮后面的图标组件 |
| href | string | - | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 |
| target | string | - | 相当于 a 链接的 target 属性，href 存在时生效 |
| onClick | (event) => void | - | 点击按钮时的回调 |
| shape | 'circle'&#124;'round ' | - | 设置按钮形状 |
<!-- prettier-ignore-end -->
