<template>
  <div v-editable="blok" class="tabBar__container">
    <nuxt-link 
      v-for="(navItem, index) in blok.nav_item"
      :key="index"
      :class="['tab', { 'tab--active': navItem.route === $nuxt.$route.path } ]"
      :to="navItem.route"
    >
      <img class="tab__icon" :src="navItem.icon.filename" alt="">
      <div class="tab__label">
        <span>{{ navItem.label }}</span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  props: ['blok'],
}
</script>

<style lang="scss" scoped>
.tabBar__container {
  height: 62px;
  background: #fff;
  box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.1);
  position: fixed;
  left:0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 48px;
    text-decoration: none;
    color: #999999;
    .tab__icon {
      max-width: 20px;
      margin-bottom: 4px;
    }
    .tab__label {
      font-size: 12px;
    }
  }
  .tab--active {
    color: #EA650D;
  }
}
</style>
