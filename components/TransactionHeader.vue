<template>
  <div v-editable="blok" class="header__container" :style="{ 'background-image': `url(${blok.background_image.filename})` }">
    <blok-floating-button :blok="blok.button[0]" />
  </div>
</template>

<script>
export default {
  name: 'TransactionHeader',
  props: ['blok']
}
</script>

<style lang="scss" scoped>
.header__container {
  height: 204px;
  max-height: 204px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}
.header__button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 44px;
  height: 44px;
  left: 16px;
  top: 46px;
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(102, 102, 102, 0.1), 0px 1px 6px rgba(128, 128, 128, 0.1), 0px 2px 16px rgba(114, 114, 114, 0.08);
  border: none;
}
</style>