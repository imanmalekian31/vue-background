# Vue background

`vue-background` is a simple directive that allows you to apply [TailwindCss colors](https://tailwindcss.com/docs/customizing-colors) to an element's background.

## Installation

```bash
# npm
npm install vue-background
# yarn
yarn add vue-background
```

## Usage

```js
import bgDirective from "vue-background";

const app = createApp(App);
app.use(bgDirective);
app.mount("#app");
```

```html
<template>
  <h1 v-bg="'slate-500'" class="text-3xl font-bold underline">Hello world!</h1>
  <button v-bg="'lime-600'">Submit</button>
</template>
```
