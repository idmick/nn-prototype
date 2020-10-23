<template>
  <button v-editable="blok" :class="[buttonClass, { 'full-width': blok.full_width }, { 'small': blok.small }]">
    <template v-if="blok.icon_left.filename">
      <img class="button__icon button__icon--left" :src="blok.icon_left.filename" alt="">
    </template>
    <span>{{ blok.label }}</span>
    <template v-if="blok.icon_right.filename">
      <img class="button__icon button__icon--left" :src="blok.icon_right.filename" alt="">
    </template>
  </button>
</template>

<script>
export default {
  name: 'button',
  props: ['blok'],
  computed: {
    buttonClass() {
      if (this.blok.type === 'ghost') {
        return 'button button--ghost'
      }
      return 'button'
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 8px 16px;
  background-color: #EA650D;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  .button__icon {
    max-width: 16px;
  }
  .button__icon--left {
    margin-right: 8px;
  }
  .button__icon--right {
    margin-left: 8px;
  }
}
.button--ghost {
  background-color: transparent;
  color:#EA650D;
  padding: 8px 0;
}
.full-width {
  width: 100%;;
}
.small {
  font-size: 16px;
}
</style>