<template>
  <div id="uer">
    <div class="book">
      <div class="tou">
        <span @click="dl">国际版</span>
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
          <div @click="open">
            <van-dropdown-menu :overlay="false" active-color="rgb(0, 134, 240)">
              <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
          </div>
          <router-link to="/zixun" tag="p">资讯</router-link>
            <router-link to="yuangon" tag="p">分析</router-link>
            <router-link to="yuangon" tag="p">研究</router-link>
            <router-link to="yuangon" tag="p">企业</router-link>
        </div>
      </van-popup>
    </div>
    <div class="uer">
      <div class="lun">
        <van-icon class="zuo" name="arrow-left" size="25" color="#1989fa" />
        <van-icon class="you" name="arrow" size="25" color="#1989fa" />
        <p class="xuxian"></p>
        <van-swipe :loop="false" :width="180" :show-indicators="false">
          <van-swipe-item>
            <div class="dada">
              <p>达达集团</p>
              <p>56.53</p>
              <p>8.53（+17.77%）</p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div @click="qiche" class="dada2">
              <p>小鹏汽车</p>
              <p>56.53</p>
              <p>8.53（+17.77%）</p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="dada">
              <p>阿里健康</p>
              <p>56.53</p>
              <p>8.53（+17.77%）</p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="dada2">
              <p>理想汽车</p>
              <p>56.53</p>
              <p>8.53（+17.77%）</p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="dada">
              <p>阿里健康</p>
              <p>56.53</p>
              <p>8.53（+17.77%）</p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="dada2">
              <p>理想汽车</p>
              <p>56.53</p>
              <p>8.53（+17.77%）</p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="dada">
              <p>阿里健康</p>
              <p>56.53</p>
              <p>8.53（+17.77%）</p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="dada2">
              <p>理想汽车</p>
              <p>56.53</p>
              <p>8.53（+17.77%）</p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="shanglun">
        快讯
        <a href="#">
          更多
          <van-icon name="arrow" size="10" color="#1989fa" />
        </a>
        <p class="hei"></p>
        <div class="lunbo">
          <van-swipe
            @click="open()"
            style="height: 80px;"
            :width="300"
            :autoplay="2000"
            :show-indicators="false"
            vertical
          >
            <van-swipe-item>
              <p style="height: 50px;width:300px">的法国红酒看来多红酒看来多线程v归还借款风格和</p>
              <van-icon name="clock-o">59分钟</van-icon>
            </van-swipe-item>
            <van-swipe-item>
              <p style="height: 50px;width:300px">的法国红酒看来多红酒看来多线程v归还借款风格和</p>
              <van-icon name="clock-o">59分钟</van-icon>
            </van-swipe-item>
            <van-swipe-item>
              <p style="height: 50px;width:300px">的法国红酒看来多红酒看来多线程v归还借款风格和</p>
              <van-icon name="clock-o">59分钟</van-icon>
            </van-swipe-item>
            <van-swipe-item>
              <p style="height: 50px;width:300px">的法国红酒看来多红酒看来多线程v归还借款风格和</p>
              <van-icon name="clock-o">59分钟</van-icon>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
    <div class="sheng">
      <div class="tupian">
        <img src="..\assets\15745667314270.jpg" alt />
        <p>深度</p>
      </div>
      <div class="wenzi">
        <div class="wenzi-xiao">
          <p>科技，可选消费</p>
          <p>小米停不下来</p>
          <p>昨天 09：00</p>
        </div>
        <div class="wenzi-nei">
          <p>新氧Q3实现交易额11亿，逆势增长凭什么？</p>
          <p>互联网巨头教育“购物车”大起底：大厂投资看什么？</p>
          <p>数字化转型激活家居家装产业，谁会成为最大受益者？</p>
        </div>
        <div class="wenzi-tu">
          <div class="tu-i">
            <div class="guandian">观点</div>
            <img src="..\assets\15766653486769.jpg" />
            <div class="ziti">
              <p>产业/工业</p>
              <p>亿欧智库黄渊普：理解数字经济（1）</p>
              <p>昨天 21:45</p>
            </div>
          </div>
        </div>
        <div class="wenzi-tu">
          <div class="tu-i">
            <div class="guandian">观点</div>
            <img src="..\assets\15755426917510.jpg" />
            <div class="ziti">
              <p>产业/工业</p>
              <p>亿欧智库黄渊普：理解数字经济（1）</p>
              <p>昨天 21:45</p>
            </div>
          </div>
        </div>
        <div class="wenzi-tu">
          <div class="tu-i">
            <img src="..\assets\15680277711052.jpg" />
            <div class="ziti">
              <p>· 分析</p>
              <p>巴比食品：一只馒头背后的早餐连锁增量空间</p>
              <p>2020-11-27 18:20</p>
            </div>
          </div>
        </div>
        <div class="wenzi-tu">
          <div class="tu-i">
            <img src="..\assets\15758039252007.jpg" />
            <div class="ziti">
              <p>· 分析</p>
              <p>电商巨头的二维到三维之路</p>
              <p>2020-11-27 18:10</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 下滚动条 -->
      <div class="xiagun">
        <div class="xiagun-ron">
          <img src="../assets/1.jpg" alt />
          <div class="xiagun-neiron">
            <p>科技</p>
            <p>
              荣耀终端有限公司CEO赵
              <br />明：做自己荣耀的骑士
            </p>
          </div>
          <img src="../assets/2.jpg" alt />
          <div class="xiagun-neiron2">
            <p>科技</p>
            <p>
              荣耀终端有限公司CEO赵
              <br />明：做自己荣耀的骑士
            </p>
          </div>
          <img src="../assets/3.jpg" alt />
          <div class="xiagun-neiron3">
            <p>科技</p>
            <p>
              荣耀终端有限公司CEO赵
              <br />明：做自己荣耀的骑士
            </p>
          </div>
        </div>
      </div>
      <!-- 报告 -->
      <div class="baogao">
        <div class="bao">
          <img src="../assets/4.jpg" alt />
          <div class="gao">
            <p>报告</p>
            <p>汽车</p>
            <p>【亿欧智库】2020中国智能网联汽车产业影响力指数研究</p>
            <p>2020-11-27 13:31</p>
          </div>
        </div>
        <div class="xiaofei">
          <div class="richan">
            <img src="../assets/1.jpg" alt />
            <p>
              <span>日常消费</span>
              <span>· 采访</span>
            </p>
            <p>
              知名国货布鲁可牵手拼多多开
              <br />启溯源直播，35万人围观拼单
            </p>
            <p>2020-11-27 18:09</p>
          </div>
          <div class="richan1">
            <div>观点</div>
            <img src="../assets/2.jpg" alt />
            <p>科技</p>
            <p>坚持自主创新道路，达梦在数据存储类数据库上取得新突破</p>
            <p>2020-11-27 18:09</p>
          </div>
        </div>
      </div>
      <div class="cheng">
            <img src="../assets/5.jpg" alt />
      </div>
      <!-- 粘贴的 -->
      <div class="tupian">
        <img src="..\assets\8.jpg" alt />
        <p>深度</p>
      </div>
      <div class="wenzi">
        <div class="wenzi-xiao1">
          <p>可选消费</p>
          <p>谁偷走了快递员的工资？</p>
          <p>在商业中，降低成本的方式大多只有两种——技术或人。</p>
        </div>
        <div class="wenzi-nei1">
          <p>2020-11-29 09:00</p>
        </div>
        <div class="wenzi-tu">
          <div class="tu-i">
            <img src="..\assets\9.jpg" />
            <div class="ziti">
              <p>产业/工业</p>
              <p>亿欧智库黄渊普：理解数字经济（1）</p>
              <p>昨天 21:45</p>
            </div>
          </div>
        </div>
        <div class="wenzi-tu">
          <div class="tu-i">
            <img src="..\assets\10.jpg" />
            <div class="ziti">
              <p>产业/工业</p>
              <p>亿欧智库黄渊普：理解数字经济（1）</p>
              <p>昨天 21:45</p>
            </div>
          </div>
        </div>
        <div class="wenzi-tu">
          <div class="tu-i">
            <img src="..\assets\11.jpg" />
            <div class="ziti">
              <p>· 分析</p>
              <p>巴比食品：一只馒头背后的早餐连锁增量空间</p>
              <p>2020-11-27 18:20</p>
            </div>
          </div>
        </div>
        <div class="wenzi-tu">
          <div class="tu-i">
            <img src="..\assets\12.jpg" />
            <div class="ziti">
              <p>· 分析</p>
              <p>电商巨头的二维到三维之路</p>
              <p>2020-11-27 18:10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chakan">
      查看更多资讯
    </div>
    <div class="wei">
      <span>版权声明</span>
      <span>服务条款</span>
      <span>隐私政策</span>
      <span>行为守着</span>
      <p> EqualOcean(国际版)</p>
      <p>Copyright ©2020 iyiou.com. All Rights Reserved</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      value1: 0,
      option1: [
        { text: '领域', value: 0 },
        { text: '科技', value: 1 },
        { text: '消费', value: 2 },
        { text: '产业/工业', value: 3 },
        { text: '大健康', value: 4 },
        { text: '汽车出行', value: 5 },
        { text: '金融', value: 6 },
        { text: '传媒', value: 7},
        { text: '房产', value: 8},
      ]
    };
  },
  mounted() {
    this.$refs.prev.click();
  },
  methods: {
    dl(){this.$router.push({
      path:'/login'
    })},
    open() {},
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
    },
    qiche(){
      this.$router.push({
        path:'/qiche'
      })
    }
  }
};
</script>
<style scoped>
#uer {
  widows: 100%;
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
.chebian img{
  width: 150px;
  margin-left:20px;
  margin-right:100px;  
}
.chebian>>>.van-icon{
  color:#fff;
  width:15px;
  position: absolute;
  top: 15px;
  right: 15px;
}
.chebian>>>.van-dropdown-menu__item{
  /* color:  */
  background-color: #fff;
}
.chebian>>>.chebian[data-v-8cf4f5ae] .van-ellipsis{
  color: rgb(0, 134, 240);
}
.chebian>>>.van-ellipsis{
  position: relative;
  right: 105px;
}
.chebian>>>.van-dropdown-menu__title--down::after{
  position: absolute;
  left: 124px;
}
.chebian>>>.van-cell__title, .van-cell__value{
  color: #fff;
}
.chebian>>>.van-dropdown-item__option{
  background-color: rgb(128,194,247);
}
.chebian p{
  padding: 10px 18px;
  color: #fff;
}

.uer {
  margin-top: 110px;
  padding: 0px 16px;
  margin-right: 50px;
}
.dada {
  font-family: PingFang SC, Lantinghei SC, Helvetica Neue, Helvetica, Arial,
    Microsoft YaHei, 微软雅黑, STHeitiSC-Light, simsun, 宋体, WenQuanYi Zen Hei,
    WenQuanYi Micro Hei, "sans-serif";
  border-right: 1px dotted rgba(0, 134, 240, 0.4);
  margin-right: 24px;
}
.dada p {
  padding: 5px 0;
}
.dada p:nth-of-type(3) {
  color: rgb(225, 0, 0);
}
.dada2 {
  font-family: PingFang SC, Lantinghei SC, Helvetica Neue, Helvetica, Arial,
    Microsoft YaHei, 微软雅黑, STHeitiSC-Light, simsun, 宋体, WenQuanYi Zen Hei,
    WenQuanYi Micro Hei, "sans-serif";
  margin-right: 24px;
  border-right: 1px dotted rgba(0, 134, 240, 0.4);
}
.dada2 p {
  padding: 5px 0;
}
.dada2 p:nth-of-type(3) {
  color: rgb(148, 201, 144);
}
.lun {
  position: relative;
}
.zuo {
  position: absolute;
  top: 50px;
  left: 300px;
}
.you {
  position: absolute;
  top: 50px;
  left: 325px;
}
.xuxian {
  position: absolute;
  top: 0px;
  left: 325px;
  border-left: 1px dotted rgba(0, 134, 240, 0.4);
  height: 90px;
}
.shanglun {
  margin-top: 20px;
  border: 1px dotted rgba(0, 134, 240, 0.4);
  padding: 16px;
  width: 105%;
}
.shanglun a {
  font-size: 12px;
  margin-left: 230px;
}
.hei {
  width: 48px;
  height: 4px;
  background: #333;
}
.lunbo {
  margin-top: 10px;
}
.sheng {
  margin: 0 16px;
  margin-top: 20px;
}
.tupian {
  position: relative;
  widows: 100%;
  flex: none;
  overflow: hidden;
}
.tupian img {
  display: block;
  width: 100%;
}
.tupian p {
  padding: 5px 11px;
  background: #0086f0;
  color: #fff;
  font-size: 14px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.wenzi {
  margin-top: 10px;
}
.wenzi-xiao p:nth-of-type(1) {
  font-size: 12px;
}
.wenzi-xiao p:nth-of-type(2) {
  margin: 8px 0;
  font-size: 24px;
}
.wenzi-xiao p:nth-of-type(3) {
  font-size: 12px;
  margin-bottom: 12px;
  color: #999;
}
.wenzi-xiao1 p:nth-of-type(1) {
  font-size: 12px;
}
.wenzi-xiao1 p:nth-of-type(2) {
  margin: 8px 0;
  font-size: 28px;
  font-weight: bold;
}
.wenzi-xiao1 p:nth-of-type(3) {
  font-size: 14px;
  margin-bottom: 20px;
  color: #333;
}
.wenzi-nei {
  border-bottom: 1px solid rgb(148, 201, 144);
  margin-bottom: 32px;
}
.wenzi-nei p {
  border-top: 1px solid rgb(148, 201, 144);
  padding: 16px 0;
  font-size: 12px;
}
.wenzi-nei1 {
  border-bottom: 1px solid rgb(148, 201, 144);
  margin-bottom: 32px;
}
.wenzi-nei1 p {
  border-top: 1px solid #000;
  padding: 16px 0;
  font-size: 12px;
}
.wenzi-tu {
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(148, 201, 144);
}
.tu-i img {
  width: 45%;
}
.guandian {
  position: absolute;
  top: 0;
  padding: 4px 8px;
  font-size: 12px;
  background: #0086f0;
  color: #fff;
}
.ziti {
  font-size: 12px;
  position: absolute;
  left: 200px;
  top: 0;
  color: #333;
}
.ziti p:nth-of-type(2) {
  font-weight: bold;
  margin-top: 3px;
  font-size: 14px;
}
.ziti p:nth-of-type(3) {
  position: absolute;
  top: 85px;
  color: #999;
}
.xiagun {
  width: 100%;
}
.xiagun-ron {
  position: relative;
  overflow-x: scroll;
  word-break: break-all;
}
.xiagun-ron img {
  width: 130px;
}
.xiagun-ron img:nth-of-type(1) {
  padding-bottom: 10px;
}
.xiagun-ron img:nth-of-type(2) {
  position: absolute;
  left: 320px;
}
.xiagun-ron img:nth-of-type(3) {
  position: absolute;
  left: 630px;
}
.xiagun-neiron {
  width: 180px;
  position: absolute;
  left: 150px;
  top: 0;
}
.xiagun-neiron p:nth-of-type(1) {
  font-size: 12px;
  color: #999;
}
.xiagun-neiron p:nth-of-type(2) {
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  color: #333;
}
.xiagun-neiron2 {
  width: 180px;
  position: absolute;
  left: 460px;
  top: 0;
}
.xiagun-neiron2 p:nth-of-type(1) {
  font-size: 12px;
  color: #999;
}
.xiagun-neiron2 p:nth-of-type(2) {
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  color: #333;
}
.xiagun-neiron3 {
  width: 180px;
  position: absolute;
  left: 770px;
  top: 0;
}
.xiagun-neiron3 p:nth-of-type(1) {
  font-size: 12px;
  color: #999;
}
.xiagun-neiron3 p:nth-of-type(2) {
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  color: #333;
}
.baogao {
  margin-top: 20px;
  width: 100%;
  overflow-x: scroll;
  position: relative;
}
.bao {
  position: relative;
}
.bao img:nth-of-type(1) {
  border: 1px solid;
  width: 300px;
}
.gao {
  position: absolute;
  bottom: 30px;
  height: 200px;
  background-color: rgb(0, 134, 240);
  width: 240px;
  color: #fff;
  padding: 0 20px;
}
.gao p:nth-of-type(1) {
  width: 40px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  background: #fff;
  text-align: center;
  color: #0086f0;
  margin-bottom: 8px;
}
.gao p:nth-of-type(3) {
  font-weight: bold;
  margin: 8px 0;
}
.gao p:nth-of-type(4) {
  font-size: 12px;
  margin-top: 70px;
}
.xiaofei {
  position: absolute;
  top: 0;
  left: 330px;
  width: 380px;
  border-bottom: 1px solid rgb(148, 201, 144);
}
.richan {
  font-size: 12px;
}
.richan img {
  width: 180px;
}
.richan p span:nth-of-type(1) {
  margin-right: 10px;
}
.richan p:nth-of-type(2) {
  font-size: 14px;
  font-weight: bold;
}
.richan p:nth-of-type(3) {
  margin-top: 10px;
  color: #999;
  margin-bottom: 10px;
}
.richan1 {
  position: absolute;
  top: 0;
  left: 190px;
  font-size: 12px;
}
.richan1 img {
  width: 180px;
}
.richan1 p span:nth-of-type(1) {
  margin-right: 10px;
}
.richan1 p:nth-of-type(2) {
  font-size: 14px;
  font-weight: bold;
}
.richan1 p:nth-of-type(3) {
  margin-top: 10px;
  color: #999;
  margin-bottom: 10px;
}
.richan1 div {
  position: absolute;
  padding: 4px 8px;
  font-size: 12px;
  background: #0086f0;
  color: #fff;
}
.cheng img{
  margin-bottom:10px; 
  margin-top:20px; 
  width: 100%;
}
.chakan{
  color: #0086f0;
    margin: 24px auto 48px;
    cursor: pointer;
    background: #fff;
    border: 1px solid #0086f0;
  text-align: center;
  width: 160px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
}
.wei{
  font-size: 13px;
  text-align: center;
}
.wei span{
  padding: 0 10px;
  border-right:1px solid #999;
}
.wei p{
  margin: 10px 0;
}
.wei p:nth-of-type(2){
  color: #999;
}
</style>