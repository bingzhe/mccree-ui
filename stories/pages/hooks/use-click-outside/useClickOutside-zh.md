---
title: React useClickOutside
components: useClickOutside
---

# useClickOutside

<p class="description">订阅点击元素以外位置的事件</p>

## Basic

{{"demo": "pages/hooks/use-click-outside/useClickOutside.js"}}

## API

```ts
const useClickAway = (
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void,
) => void
```
