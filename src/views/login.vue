<template>
    <div>
        <div class="book">
            <h1 class="h1">人力资源管理系统</h1>
            <input class="input" placeholder="请输入内容" v-model="shu.zhan" />
            <input class="input" placeholder="请输入密码" v-model="shu.input"/>
            <button class="input" type="primary"  @click="deng()">主要按钮</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        shu:{
        input: '',
        zhan:''
        }
        
      }
    },
    methods: {
      deng() {
        var user = localStorage.setItem("shu",JSON.stringify(this.shu));
         this.$router.push({
           path:'/zixun'
         })
      }
    }
}
</script>
<style scoped>
    #app{
        background-color: blue;
        height: 590px;
        padding-top: 70px;
        padding-left: 460px;
    }
    .book{
        width: 400px;
        height: 460px;
        /* padding: 100px; */
        /* margin: 100px; */
        background-color: aliceblue;
        text-align: center;
    }
    .input{
        width: 300px;
        margin-top: 10px;
    }
    .h1{
        padding-top: 50px;
        margin-bottom: 100px;
    }
</style>