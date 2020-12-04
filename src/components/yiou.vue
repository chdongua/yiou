<template>
  <div class="uer">
    <div id="app">
      <div class="book">
        <div class="tou">
          <span>国际版</span>
          <span>亿欧企业官网</span>
        </div>
        <div class="dianji">
          <p class="che">
            <van-cell @click="showPopup"></van-cell>
          </p>
          <p @click="zhuye">
            <img src="..\assets\dian2.png" />
          </p>
          <p>
            <img src="../assets/dian3.png" />
          </p>
        </div>
      </div>
      <div>
        <van-popup v-model="show" :style="{ height: '100%' }" position="left" :overlay="false">
          <div class="chebian">
            <img src="..\assets\dian2.png" />
            <van-icon name="cross" @click="showPopup2" />
            <div  @click="open">
              <van-dropdown-menu :overlay="false" active-color="rgb(0, 134, 240)">
                <van-dropdown-item v-model="value1" :options="option1"/>
              </van-dropdown-menu>
            </div>
            <router-link to="/zixun" tag="p">资讯</router-link>
            <router-link to="yuangon" tag="p">分析</router-link>
            <router-link to="yuangon" tag="p">研究</router-link>
            <router-link to="yuangon" tag="p">企业</router-link>
          </div>
        </van-popup>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      value1: 0,
      option1: [
        { text: "领域", value: 0 },
        { text: "科技", value: 1 },
        { text: "消费", value: 2 },
        { text: "产业/工业", value: 3 },
        { text: "大健康", value: 4 },
        { text: "汽车出行", value: 5 },
        { text: "金融", value: 6 },
        { text: "传媒", value: 7 },
        { text: "房产", value: 8 }
      ]
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    showPopup2() {
      this.show = false;
    },
    zhuye() {
      this.$router.push({
            path:'/zhuye'
        })
    },
    open(){
      if(this.value1==1){
        this.$router.push({
            path:'/keji'
        })
      }
    }
  }
};
</script>
<style scoped>
#app {
  width: 100%;
  height: 90px;
  overflow-x: scroll;
}
.book {
  background-color: rgb(0, 134, 240);
  opacity: 1;
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
}
.tou {
  font-size: 12px;
  color: #fff;
  padding: 8px 16px 5px 16px;
  text-align: right;
  border-bottom: 0.1px solid rgba(255, 255, 255, 0.2);
}
.tou span:nth-of-type(1) {
  margin-right: 18px;
}
.dianji {
  padding: 0 16px;
  height: 60px;
  overflow-x: scroll;
  font-size: 20px;
}
.dianji p:nth-of-type(3) {
  position: absolute;
  right: 16px;
  top: 50px;
  width: 30px;
}
.dianji p:nth-of-type(1) {
  position: absolute;
  top: 20px;
  width: 25px;
  top: 50px;
}
.dianji p:nth-of-type(2) {
  position: absolute;
  top: 45px;
  width: 120px;
  left: 120px;
}
.che >>> .van-cell {
  background: url("../assets/dian1.png") no-repeat;
}
.chebian {
  position: relative;
  border: 1px solid rgb(0, 134, 240);
  height: 98%;
  padding-top: 10px;
  background-color: rgb(0, 134, 240);
}
.chebian img {
  width: 150px;
  margin-left: 20px;
  margin-right: 100px;
}
.chebian >>> .van-icon {
  color: #fff;
  width: 15px;
  position: absolute;
  top: 15px;
  right: 15px;
}
.chebian >>> .van-dropdown-menu__item {
  /* color:  */
  background-color: #fff;
}
.chebian >>> .chebian[data-v-8cf4f5ae] .van-ellipsis {
  color: rgb(0, 134, 240);
}
.chebian >>> .van-ellipsis {
  position: relative;
  right: 105px;
}
.chebian >>> .van-dropdown-menu__title--down::after {
  position: absolute;
  left: 124px;
}
.chebian >>> .van-cell__title,
.van-cell__value {
  color: #fff;
}
.chebian >>> .van-dropdown-item__option {
  background-color: rgb(128, 194, 247);
}
.chebian p {
  padding: 10px 18px;
  color: #fff;
}
</style>