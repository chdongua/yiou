import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import zhuye from './views/zhuye.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'zhuye',
      component: zhuye
    },
    {
      path: '/yiou',
      name: 'yiou',
      component: () => import('./components/yiou.vue'),
      children:[
        {
          path:'/zixun',
          name:'/zixun',
          component:()=>import('./views/zixun.vue'),
          beforeEnter: (to, from, next) => {
            var user = JSON.parse(localStorage.getItem("shu"))
            if(user){
              next()
            }else{
              if(to.path==="/login"){
                next()
              }else{
                next('/zixun')
              }
            }
          }
        },
        {
          path:'/keji',
          name:'/keji',
          component:()=>import('./views/keji.vue')
        },
        {
          path:'/qiche',
          name:'/qiche',
          component:()=>import('./views/qiche.vue')
        }
      ]
    },
    {
      path: '/zhuye',
      name: 'zhuye',
      component: () => import('./views/zhuye.vue')
    }
    ,
    {
      path: '/login',
      component: () => import('./views/login'),
    
    }
  ]
})
