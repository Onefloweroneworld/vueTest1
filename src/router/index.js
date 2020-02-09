import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShopList from "../views/ShopList";
import Title from "../views/Title";
import Image from "../views/Image";
import Cart from "../views/Cart";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"hello",
      component:HelloWorld,
    },
    {
      // path: '/goods/:goodsId/user/:name',//动态路由
      path:"/goods",//一级路由
      name: 'ShopList',
      component: ShopList,
      // 嵌套路由
      children:[
         {
           path:"title",//二级路由
           name:"title",
           component:Title,
        },
        {
          path:"image",
          name:"image",
          component:Image,
       },
      ]
    },
    {
      path:"/cart",
      name:"cart",
      component:Cart,
    }
  ]
})
