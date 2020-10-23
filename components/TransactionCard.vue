<template>
  <div v-editable="blok" class="container">

    <div class="row">
      <img class="main-image" :src="mainInfo.image.filename" alt="">
      <div class="col">
        <span class="title">{{ mainInfo.title }}</span>
        <span class="subtitle">{{ mainInfo.subtitle }}</span>
      </div>
      <span class="amount align-right">{{ mainInfo.amount }}</span>
    </div>

    <div class="row">
      <hr class="row__divider">
      <img class="main-image" :src="relatedCategory.icon_left.filename" alt="">
      <div class="col">
        <span class="subtitle secondary-item__title">{{ relatedCategory.title }}</span>
      </div>
      <button class="button align-right">
        <img class="button__image" :src="relatedCategory.actionButton.filename" alt="">
      </button>
    </div>

    <div class="row">
      <hr class="row__divider">
      <img class="main-image" :src="paymentRequest.icon_left.filename" alt="">
      <div class="col">
        <span class="subtitle secondary-item__title">{{ paymentRequest.title }}</span>
      </div>
      <button class="button align-right">
        <img class="button__image button__image--small" :src="paymentRequest.actionButton.filename" alt="">
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TransactionCard',
  props: ['blok'],
  computed: {
    mainInfo() {
      return this.blok.main_info.find((item) => {
        return item.component === 'MainTransactionInfo'
      })
    },
    relatedCategory() {
      return this.blok.main_info.find((item) => {
        return item.type === 'related_category'
      })
    },
    paymentRequest() {
      return this.blok.main_info.find((item) => {
        return item.type === 'payment_request'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  margin: -34px 16px 0 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(102, 102, 102, 0.1), 0px 1px 6px rgba(128, 128, 128, 0.1), 0px 2px 16px rgba(114, 114, 114, 0.08);
}
.row {
  position: relative;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
}
.row__divider {
  position: absolute;
  left: 16px;
  right: 16px;
  top: 0;
  border: 1px solid #E3E3E3;
}
.col {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
}
.main-image {
  max-width: 32px;
}
image {
  max-width: 24px;
}
.title {
  font-size: 20px;
  font-weight: bold;
}
.subtitle {
  font-size: 14px;
  color: #999999;
}
.secondary-item__title {
  font-size: 16px;
}
.amount {
  font-size: 24px;
  font-weight: bold;
}
.align-right {
  margin-left: auto;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border: none;
  background: none;
}
.button__image {
  max-width: 16px;
}
.button__image--small {
  max-width: 8px;
}
</style>

