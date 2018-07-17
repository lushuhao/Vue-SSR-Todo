import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id',
    // props: true,
    // props: (route) => ({id: route.query.b})
    component: Todo
  },
  {
    path: '/login',
    component: Login
  }
]
