<template>
  <div id="app">
    <page-default></page-default>
  </div>
</template>

<script>

import pageDefault from './components/pagesDefault/pagesDefault.vue'

export default {
  name: "App",
  components: {
    pageDefault
  }
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
