---
title: React Radio 单选框组件
components: Radio
---

# Radio 单选框

<p class="description">单选框 用于在多个备选项中选中单个状态。</p>

## Basic

{{"demo": "pages/radio/RadioBase.js"}}

## Disabled

禁用状态

{{"demo": "pages/radio/RadioDisabled.js"}}

## Color

{{"demo": "pages/radio/RadioColor.js"}}

## Radio Button

通过`Radio.Button`渲染按钮样式

{{"demo": "pages/radio/RadioButton.js"}}

## Radio Group

{{"demo": "pages/radio/RadioGroup.js"}}

## Radio Button Group

按钮样式的单选组合

{{"demo": "pages/radio/RadioButtonGroup.js"}}

## API

### Radio/Radio.Button

<!-- prettier-ignore-start -->
| 参数           | 类型              | 默认值 | 说明                                    |
| :------------- | :---------------- | :----- | :-------------------------------------- |
| checked        | boolean           | false  | 指定当前是否选中                        |
| defaultChecked | boolean           | false  | 初始是否选中                            |
| disabled       | boolean           | false  | 禁止状态                                |
| onChange       | function(e:Event) | -      | 变化时回调函数                          |
| icon | ReactNode | `<Icon name="radio-unchecked" />` | 未选中时候图标 |
| checkIcon | ReactNode | `<Icon name="radio-checked" />` | 选中时候图标 |
| color | 'primary'&#124;'secondary'<br>&#124;'success'&#124;'warning'<br>&#124;error'&#124;'info' | 'primary' | 组件的颜色|
<!-- prettier-ignore-end -->

### Radio.Group

<!-- prettier-ignore-start -->
| 参数         | 类型                   | 默认值 | 说明           |
| :----------- | :--------------------- | :----- | :------------- |
| defaultValue | any                    | -      | 默认选中的选项 |
| value        | any                    | -      | 选中的选项     |
| disabled     | boolean                | false  | 整组失效       |
| options      | string[]&#124;Option[] | []     | 指定可选项     |
| onChange     | function(e:Event)      | -      | 变化时回调函数 |
| name | RadioGroup 下所有 <br>input[type="radio"] 的 name 属性 | - | string |
<!-- prettier-ignore-end -->

### Option

```ts
interface Option {
    label: React.ReactNode;
    value: string | number | boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
```

## 方法
