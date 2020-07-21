---
title: React Checkbox 多选框组件
components: Checkbox
---

# Checkbox 多选框

<p class="description">多选框</p>

在一组可选项中进行多项选择时

单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般 于状态标记，需要和提交操作配

## Basic

{{"demo": "pages/checkbox/CheckboxBase.js"}}

## Disabled

{{"demo": "pages/checkbox/CheckboxDisabled.js"}}

## Controlled

联动 checkbox

{{"demo": "pages/checkbox/CheckboxControlled.js"}}

## Color

{{"demo": "pages/checkbox/CheckboxColor.js"}}

## Checkbox Button

通过`Checkbox.Button`渲染按钮样式

{{"demo": "pages/checkbox/CheckboxButton.js"}}

## Checkbox Group

从数组中渲染`Checkbox`组

{{"demo": "pages/checkbox/CheckboxGroup.js"}}

## Checked All

{{"demo": "pages/checkbox/CheckboxCheckedAll.js"}}

## Checkbox Group Button

按钮样式的多选组合

{{"demo": "pages/checkbox/CheckboxGroupButton.js"}}

## API

### Checkbox/Checkbox.Button

<!-- prettier-ignore-start -->
| 参数           | 类型              | 默认值 | 说明                                    |
| :------------- | :---------------- | :----- | :-------------------------------------- |
| checked        | boolean           | false  | 指定当前是否选中                        |
| defaultChecked | boolean           | false  | 初始是否选中                            |
| indeterminate  | boolean           | false  | 设置 indeterminate 状态，只负责样式控制 |
| disabled       | boolean           | false  | 禁止状态                                |
| onChange       | function(e:Event) | -      | 变化时回调函数                          |
| icon | ReactNode | `<Icon name="checkbox-outline" />` | 未选中时候图标 |
| checkIcon | ReactNode | `<Icon name="checkbox" />` | 选中时候图标 |
| indeterminateIcon | ReactNode | `<Icon name="checkbox-indeterminate" />` | indeterminate 状态图标 |
| color | 'primary'&#124;'secondary'<br>&#124;'success'&#124;'warning'<br>&#124;error'&#124;'info' | 'primary' | 组件的颜色|
<!-- prettier-ignore-end -->

### Checkbox.Group

<!-- prettier-ignore-start -->
| 参数         | 类型                   | 默认值 | 说明           |
| :----------- | :--------------------- | :----- | :------------- |
| defaultValue | string[]               | []     | 默认选中的选项 |
| value        | string[]               | []     | 选中的选项     |
| disabled     | boolean                | false  | 整组失效       |
| options      | string[]&#124;Option[] | []     | 指定可选项     |
| onChange     | function(checkValue)   | -      | 变化时回调函数 |
| name | CheckboxGroup 下所有 <br>input[type="checkbox"] 的 name 属性 | - | string |
<!-- prettier-ignore-end -->

### Option

``` ts
interface Option {
    label: React.ReactNode;
    value: string | number | boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
```

## 方法
