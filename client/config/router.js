import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/',
    scrollBehavior (to, from, savedPosition) {
      return savedPosition || {x: 0, y: 0}
    }
  })
}
