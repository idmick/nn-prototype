import Vue from 'vue'
import Page from '~/components/Page.vue'
import TransactionHeader from '~/components/TransactionHeader.vue'
import FloatingButton from '~/components/FloatingButton.vue'
import TransactionCard from '~/components/TransactionCard.vue'
import Button from '~/components/Button.vue'
import InsightCard from '~/components/InsightCard.vue'
import RichTextCompiler from '~/components/RichTextCompiler.vue'
import HorizontalScrollContainer from '~/components/HorizontalScrollContainer.vue'

Vue.component('blok-page', Page)
Vue.component('blok-transaction-header', TransactionHeader)
Vue.component('blok-floating-button', FloatingButton)
Vue.component('blok-transaction-card', TransactionCard)
Vue.component('blok-button', Button)
Vue.component('blok-insight-card', InsightCard)
Vue.component('blok-rich-text-compiler', RichTextCompiler)
Vue.component('blok-horizontal-scroll-container', HorizontalScrollContainer)
