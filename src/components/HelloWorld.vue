<template>
  <div class="hello">
   <h1>{{msg}}</h1>

   <Couter :numm="num" @incre="increment" @decre="decrement" />
   <p>parent:{{num}}</p>
  </div>
</template>

<script>
import Couter from "./Couter";
export default {
  name: 'HelloWorld',
  components:{
    Couter,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num:10,//num数据又传给子组件，单向流动
    }
  },
  methods: {
    increment(){
      // 父组件同步更改了num数据
      this.num ++
    },
    decrement(){
      this.num --
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
