---
title: React Button 按钮组件
components: Button
---

## Button

<!-- prettier-ignore-start -->
| 参数     | 类型    | 默认值 | 说明         |
| :------- | :------ | :----- | :----------- |
| disabled | boolean | false  | 按钮失效状态 |
| color | 'primary'&#124;'secondary'&#124;'success'&#124;<br>'warning'&#124;'error'&#124;'info' | - | 按钮颜色 |
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
