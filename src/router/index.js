import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import school from '@/components/school'
import dream from '@/components/dream'
import strength from '@/components/strength'
import weakness from '@/components/weakness'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dream',
      name: 'dream',
      component: dream
    },
    {
      path: '/strength',
      name: 'strength',
      component: strength
    },
    {
      path: '/weakness',
      name: 'weakness',
      component: weakness
    },
    {
      path: '/school',
      name: 'school',
      component: school
    }
  ]
})
