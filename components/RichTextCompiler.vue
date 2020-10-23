<template>
  <div>
    <div v-html="richtext"></div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  computed: {
    richtext() {
      return this.$storyapi.richTextResolver.render(this.text)
    }
  }
}
</script>
