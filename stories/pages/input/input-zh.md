---
title: React Input 按钮组件
components: Input
---

# Input

<p class="description">处理用户的输入数据</p>

## 基本使用

基础的输入字段

{{"demo": "pages/input/InputBase.js"}}

## 宽度

设置宽度

{{"demo": "pages/input/InputWidth.js"}}

## 不可交互

禁用输入框地所有交互效果

{{"demo": "pages/input/InputDisabled.js"}}

## 清除按钮

在输入框内增加一个用于清除文本的按钮。

{{"demo": "pages/input/InputClearable.js"}}

## 前置/后置标签

用于配置一些固定组合

{{"demo": "pages/input/InputAddon.js"}}

## 前缀/后缀

添加前缀或后缀图标

{{"demo": "pages/input/InputAffix.js"}}

## 密码

显示或隐藏密码文本

{{"demo": "pages/input/InputPassword.js"}}

## 变化事件

捕获输入框的文本变化

{{"demo": "pages/input/InputEvent.js"}}

## API

### Input

| 参数         | 类型                  | 默认值    | 说明                   |
| :----------- | :-------------------- | :-------- | :--------------------- |
| defaultValue | string                | -         | 输入框默认内容         |
| value        | string                | -         | 输入框内容             |
| disabled     | boolean               | false     | 设置输入框为禁用       |
| readOnly     | boolean               | false     | 设置输入框为只读       |
| addonBefore  | string&#124;ReactNode | -         | 设置前置标签           |
| addonAfter   | string&#124;ReactNode | -         | 设置后置标签           |
| clearable    | boolean               | false     | 是否展示清除按钮       |
| prefix       | string&#124;ReactNode | -         | 设置前缀图标           |
| suffix       | string&#124;ReactNode | -         | 设置后缀图标           |
| width        | string                | 'initial' | 设置输入框宽度         |
| onChange     | function(e:Event)     | -         | 输入框内容变化时的回调 |
