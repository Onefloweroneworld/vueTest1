<template>
    <div>
        这是商品列表页面
        <!-- 动态路由 -->
        <!-- 动态传参 -->
        <!-- params是路由的参数，并不是跳转的参数 -->
        <span>{{$route.params.goodsId}}</span>
        <br>
        <span>{{$route.params.name}}</span>

        <!-- 嵌套路由 -->
          <router-link to="/goods/title">显示商品标题</router-link>
          <router-link to="/goods/image">显示商品图片</router-link>

        <div>
            <router-view></router-view>
        </div>

          <router-link to="/cart">跳转到购物车页面</router-link>
           <button @click="action">button - 跳转到购物车页面</button>
    </div>
</template>

<script>
    export default {
        methods: {
            action(){
                // this.$router.push("/cart")  //跳转页面
                // 传参
                this.$router.push({
                    path:"/cart?goodsId=123"//跟动态传参不一样
                })
            }
        },
    }
</script>

<style>

</style>