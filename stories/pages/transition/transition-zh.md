---
title: React Transition 过渡动画
components: Transition
---

# Transition 过渡动画

<p class="description">过渡动画</p>

## fade

{{"demo": "pages/transition/TransitionFade.js"}}

## zoom

`timeout` 属性来更改动画进入时间

{{"demo": "pages/transition/TransitionZoom.js"}}

## slide

`mountOnEnter` 属性会在子组件进入动画展示前阻止子组件渲染。这样可以防止相对定位的组件从屏幕外滚到到视图中。 `unmountOnExit` 类似，移除动画展示后将子组件从 DOM 中移除。

{{"demo": "pages/transition/TransitionSlide.js"}}

## collapse

{{"demo": "pages/transition/TransitionCollapse.js"}}

## grow

{{"demo": "pages/transition/TransitionGrow.js"}}

## API

### Transition

<!-- prettier-ignore-start -->
| 参数     | 类型                                                        | 默认值 | 说明               |
| :------- | :---------------------------------------------------------- | :----- | :----------------- |
| children | React.ReactNode                                             | -      | 需要应用动画的组件 |
| visible  | boolean                                                     | false  | 控制组件显示       |
| type     | 'fade'&#124;'zoom'&#124;'slide'&#124;'collapse'&#124;'grow' | 'grow' | 动画效果的类型     |
| wrapper | boolean | true | 如果 true，将在目标外部嵌套一层 div 来显示动画，否则动画将直接显示在目标上。'collapse'类型必须为 true |
| mountOnEnter | boolean | false | 默认情况下，子组件与父组件一起立即挂载。如果您想“延迟挂载”第一个 in={true} 上的组件，可以设置 mountOnEnter。在第一次进入转换之后，组件将保持挂载状态，即使是在“退出”状态，除非您还指定了 unmountOnExit |
| unmountOnExit | boolean | false | 默认情况下，子组件在达到“退出”状态后仍然挂载。如果您希望在组件退出后卸载它，请设置 unmountOnExit |
| appear | boolean | true | 组件将在 <Transition> 挂载后立即转换 |
| enter | boolean | true | 启用或禁用进入过渡 |
| exit | boolean | true | 启用或禁用退出过渡 |
| timeout | number&#124;{ enter?: number, exit?: number, appear?: number } | true | 转换的持续时间，以毫秒为单位。若不提供 addEndListener 他就是必填项。您可以为所有过渡效果指定一个单独的超时时间 timeout={500} 或 timeout={{ appear: 500, enter: 300, exit: 500 }} |
<!-- prettier-ignore-end -->

查看更多细节 [React Transition Group](https://github.com/reactjs/react-transition-group)
