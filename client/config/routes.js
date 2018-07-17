const Todo = () => import('../views/todo/todo.vue')
const Login = () => import('../views/login/login.vue')

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    // props: true,
    // props: (route) => ({id: route.query.b})
    component: Todo
  },
  {
    path: '/login',
    component: Login
  }
]
