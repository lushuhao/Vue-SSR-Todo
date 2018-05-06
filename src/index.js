import Vue from 'vue'
import App from './app.vue'

const root = document.creatElement('div')
document.body.appendChild(root)

new Vue({
  el: App,
  render: h => h(App)
})