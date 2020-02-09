<template>
    <div>
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
          <p><span>{{numm}}</span></p>
    </div>
</template>

<script>
    export default {
        props:{
           numm:Number
        },
        data() {
            return {
                num:0,
            }
        },
        methods: {
            increment(){
                // 触发了父组件的方法
                this.$emit("incre")
            },
            decrement(){
                // 触发了父组件的方法
               this.$emit("decre")
            }
        },
    }
</script>

<style>

</style>