<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!--<todo></todo>-->
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'

export default {
  components: {
    Header,
    Footer,
    Todo
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['fullName'])
  },
  methods: {
    ...mapMutations(['updateCount']),
    ...mapActions(['updateCountAsync'])
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


