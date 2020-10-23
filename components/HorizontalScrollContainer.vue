<template>
  <div v-editable="blok" class="scrolling-wrapper" :style="{ 'margin-top': blok.margin_top + 'px' }">
    <component :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component | dashify"></component>
  </div>
</template>

<script>
export default {
  name: 'HorizontalScrollContainer',
  props: ['blok']
}
</script>

<style lang="scss" scoped>
.scrolling-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
</style>