<template>
  <div v-editable="blok" class="card__container" :style="{ 'background-image': `url(${blok.background_img.filename})` }">
    <div class="card__title">{{ blok.title }}</div>
    <blok-rich-text-compiler class="card__body" :text="blok.body" />
    <div class="card_cta">
      <blok-button :blok="cta"></blok-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InsightCard',
  props: ['blok'],
  computed: {
    cta() {
      return this.blok.cta.find((i) => {
        return i.component === 'Button'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card__container {
  height: 166px;
  font-size: 16px;
  width: 270px;
  min-width: 270px;
  padding: 16px;
  margin-left: 16px;
  border: 1px solid #EEEEEE;
  border-radius: 3px;
  background-size: 110px;
  background-repeat: no-repeat;
  background-position: 152px;
  flex: 0 0 auto;
  .card__title {
    font-size: 24px;
    font-weight: bold;
  }
  .card__body {
    margin-top: 4px;
    margin-bottom: 8px;
  }
}
</style>