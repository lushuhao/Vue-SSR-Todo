import Vue from 'vue'
import App from './app.vue'

import './assets/styles/test.css'
import './assets/styles/test-scss.scss'
import './assets/images/bg.jpeg'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  el: App,
  render: h => h(App)
}).$mount(root)