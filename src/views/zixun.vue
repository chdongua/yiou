<template>
  <div id="book">
    <!-- <Header></Header> -->
    <div class="xiala">
      <p @click="dian">
        <span class="gen">最新</span>
        <van-icon name="arrow-down" />
      </p>
      <div v-if="show" class="xia">
        <p>最新</p>
        <p>科技</p>
        <p>消费</p>
        <p>产业/工业</p>
        <p>大健康</p>
        <p>汽车</p>
        <p>金融</p>
        <p>传媒</p>
        <p>房地产</p>
      </div>
    </div>
    <div class="wenzi">
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
      <div class="wenzi-tu">
        <div class="tu-i">
          <img src="..\assets\1.jpg" />
          <div class="ziti">
            <p>· 分析</p>
            <p>电商巨头的二维到三维之路</p>
            <p>2020-11-27 18:10</p>
          </div>
        </div>
      </div>
      <div class="wenzi-tu">
        <div class="tu-i">
          <img src="..\assets\2.jpg" />
          <div class="ziti">
            <p>· 分析</p>
            <p>电商巨头的二维到三维之路</p>
            <p>2020-11-27 18:10</p>
          </div>
        </div>
      </div>
      <div class="wenzi-tu">
        <div class="tu-i">
          <img src="..\assets\3.jpg" />
          <div class="ziti">
            <p>· 分析</p>
            <p>电商巨头的二维到三维之路</p>
            <p>2020-11-27 18:10</p>
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
      <div class="wenzi-tu">
        <div class="tu-i">
          <img src="..\assets\7.jpg" />
          <div class="ziti">
            <p>· 分析</p>
            <p>电商巨头的二维到三维之路</p>
            <p>2020-11-27 18:10</p>
          </div>
        </div>
      </div>
      <div class="wenzi-tu">
        <div class="tu-i">
          <img src="..\assets\8.jpg" />
          <div class="ziti">
            <p>· 分析</p>
            <p>电商巨头的二维到三维之路</p>
            <p>2020-11-27 18:10</p>
          </div>
        </div>
      </div>
      <div class="wenzi-tu">
        <div class="tu-i">
          <img src="..\assets\9.jpg" />
          <div class="ziti">
            <p>· 分析</p>
            <p>电商巨头的二维到三维之路</p>
            <p>2020-11-27 18:10</p>
          </div>
        </div>
      </div>
      <div class="wenzi-tu">
        <div class="tu-i">
          <img src="..\assets\10.jpg" />
          <div class="ziti">
            <p>· 分析</p>
            <p>电商巨头的二维到三维之路</p>
            <p>2020-11-27 18:10</p>
          </div>
        </div>
      </div>
      <div class="wenzi-tu">
        <div class="tu-i">
          <img src="..\assets\11.jpg" />
          <div class="ziti">
            <p>· 分析</p>
            <p>电商巨头的二维到三维之路</p>
            <p>2020-11-27 18:10</p>
          </div>
        </div>
      </div>
    </div>
    <div class="chakan">查看更多资讯</div>
    <div class="wei">
      <span>版权声明</span>
      <span>服务条款</span>
      <span>隐私政策</span>
      <span>行为守着</span>
      <p>EqualOcean(国际版)</p>
      <p>Copyright ©2020 iyiou.com. All Rights Reserved</p>
    </div>
  </div>
</template>
<script>
// import Header from "../components/yiou"
export default {
  // components: {
  //     Header
  // },
  data() {
    chu: 0;
    return {
      show: ""
    };
  },
  methods: {
    dian() {
      this.show = !this.show;
    }
  }
};
</script>
<style scoped>
.xiala {
  position: relative;
}
.gen {
  font-weight: bold;
  width: 70px;
  line-height: 50px;
  font-size: 20px;
  margin: 0 16px;
}
.xia {
  border: 1px solid rgb(0, 134, 240);
  padding: 5px;
  width: 130px;
  z-index: 99;
  background-color: #fff;
  position: absolute;
  top: 50px;
  left: 10px;
}
.xia p {
  padding: 5px;
}
.xia p:nth-of-type(1) {
  background-color: rgb(0, 134, 240);
  color: #fff;
}
.wenzi {
  padding: 0 16px;
  margin-top: 10px;
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
.chakan {
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
.wei {
  font-size: 13px;
  text-align: center;
}
.wei span {
  padding: 0 10px;
  border-right: 1px solid #999;
}
.wei p {
  margin: 10px 0;
}
.wei p:nth-of-type(2) {
  color: #999;
}
</style>