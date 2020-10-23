<template>
  <button 
    v-editable="blok" 
    class="floating-button"
  >
    <img :src="blok.icon.filename" alt="" />
  </button>
</template>

<script>
export default {
  name: 'TransactionHeader',
  props: ['blok']
}
</script>

<style lang="scss" scoped>
.floating-button {
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