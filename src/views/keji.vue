<template>
  <div id="uer">
    <div class="luno">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        :show-indicators="false"
        :touchable="false"
      >
        <van-swipe-item>
          <div class="lun-ru1">
            <img src="../assets/13.jpg" alt />
            <div class="lunbo">
              <p>报告</p>
              <p>新变化 新趋势 新风口——2020中国云报告</p>
              <p>本篇报告以云服务使用者视角出发，分析中国云计化，以及未来前进方向，从中归纳出云管理层</p>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="lun-ru1">
            <img src="../assets/14.jpg" alt />
            <div class="lunbo">
              <p>报告</p>
              <p>新变化 新趋势 新风口——2020中国云报告</p>
              <p>本篇报告以云服务使用者视角出发，分析中国云计化，以及未来前进方向，从中归纳出云管理层</p>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="lun-ru1">
            <img src="../assets/15.jpg" alt />
            <div class="lunbo">
              <p>报告</p>
              <p>新变化 新趋势 新风口——2020中国云报告</p>
              <p>本篇报告以云服务使用者视角出发，分析中国云计化，以及未来前进方向，从中归纳出云管理层</p>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="lun-ru1">
            <img src="../assets/16.jpg" alt />
            <div class="lunbo">
              <p>报告</p>
              <p>新变化 新趋势 新风口——2020中国云报告</p>
              <p>本篇报告以云服务使用者视角出发，分析中国云计化，以及未来前进方向，从中归纳出云管理层</p>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
      <p class="keji">
        <van-icon name="volume-o" />科技头条快讯：
      </p>
      <van-swipe
        style="height: 20px;width:220px;font-size:12px;position: absolute;left:150px;top: 528px;z-index:99;"
        vertical
        :show-indicators="false"
        :loop="true"
        autoplay="3000"
      >
        <van-swipe-item>小米集团在香港暂停交易。</van-swipe-item>
        <van-swipe-item>高通总裁：与新荣耀开展了一些对话</van-swipe-item>
        <van-swipe-item>小米以每股23.70港元的价格配售</van-swipe-item>
        <van-swipe-item>首套青藏高原地—气相互作用高时</van-swipe-item>
      </van-swipe>
    </div>
    <div class="uer1">
      <div class="xian">
        <h2>热门企业看板</h2>
        <p></p>
      </div>
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
            <div class="dada2">
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
    </div>
    <div class="kexing">
      <div class="pian">
        <img src="../assets/18.png" alt />
        <p>
          <span>科技</span>
          <span>分析</span>
        </p>
        <p>专访悠络客沈修平：视频+AI分析是当前最合适的零售数字化方向</p>
        <p>2019年中国零售总量突破40万亿元，其中有30万亿元来自线下零售场景</p>
        <p>23 分钟前</p>
      </div>
      <div class="wenzi">
        <div class="wenzi-tu">
          <div class="tu-i">
            <img src="..\assets\18.jpg" />
            <div class="ziti">
              <p>科技· 分析</p>
              <p>用工人数减八成，兰剑智能引领仓储物流行业变革？</p>
              <p>1 小时前</p>
            </div>
          </div>
        </div>
        <div class="wenzi-tu">
          <div class="tu-i">
            <img src="..\assets\19.jpg" />
            <div class="ziti">
              <p>科技· 采访</p>
              <p>亿欧智库黄渊普：理解数字经济（1）</p>
              <p>昨天 21:45</p>
            </div>
          </div>
        </div>
        <div class="wenzi-tu">
          <div class="tu-i">
            <img src="..\assets\20.jpg" />
            <div class="ziti">
              <p>科技· 分析</p>
              <p>嗅觉AI：为减少食物浪费出点力</p>
              <p>2020-11-30 17:26</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 研究报告 -->
    <div class="yanjiu">
      <div class="xian">
        <h2>
          研究报告
          <span>更多></span>
        </h2>
        <p class="hei"></p>
      </div>
      <div class="jiu">
        <div class="jiu1">
          <img src="../assets/21.png" alt />
        </div>
        <div class="jiu2">
          <img src="../assets/22.jpg" alt />
        </div>
        <div class="jiu3">
          <img src="../assets/23.jpg" alt />
        </div>
        <div class="jiu4">
          <img src="../assets/21.png" alt />
        </div>
        <div class="gao">
          <p>报告</p>
          <p>科技</p>
          <p>万物互联时代的操作系统</p>
          <p></p>
          <p>2020-11-27 13:31</p>
        </div>
        <div class="gao1">
          <p>报告</p>
          <p>科技</p>
          <p>万物互联时代的操作系统</p>
          <p></p>
          <p>2020-11-27 13:31</p>
        </div>
        <div class="gao2">
          <p>报告</p>
          <p>科技</p>
          <p>万物互联时代的操作系统</p>
          <p></p>
          <p>2020-11-27 13:31</p>
        </div>
        <div class="gao3">
          <p>报告</p>
          <p>科技</p>
          <p>万物互联时代的操作系统</p>
          <p></p>
          <p>2020-11-27 13:31</p>
        </div>
      </div>
    </div>
    <!-- 资讯 -->
    <div class="zhixun">
      <div class="xian">
        <h2>
          资讯
          <span>更多></span>
        </h2>
        <p class="hei"></p>
          <div class="wenzi-tu">
            <div class="tu-i">
              <img src="..\assets\1.jpg" />
              <div class="ziti">
                <p>科技· 分析</p>
                <p>用工人数减八成，兰剑智能引领仓储物流行业变革？</p>
                <p>1 小时前</p>
              </div>
            </div>
          </div>
          <div class="wenzi-tu">
            <div class="tu-i">
              <img src="..\assets\2.jpg" />
              <div class="ziti">
                <p>科技· 采访</p>
                <p>亿欧智库黄渊普：理解数字经济（1）</p>
                <p>昨天 21:45</p>
              </div>
            </div>
          </div>
          <div class="wenzi-tu">
            <div class="tu-i">
              <img src="..\assets\3.jpg" />
              <div class="ziti">
                <p>科技· 分析</p>
                <p>嗅觉AI：为减少食物浪费出点力</p>
                <p>2020-11-30 17:26</p>
              </div>
            </div>
          </div>
          <div class="wenzi-tu">
            <div class="tu-i">
              <img src="..\assets\7.jpg" />
              <div class="ziti">
                <p>科技· 分析</p>
                <p>嗅觉AI：为减少食物浪费出点力</p>
                <p>2020-11-30 17:26</p>
              </div>
            </div>
          </div>
      </div>
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
export default {};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  height: 400px;
  background-color: #39a9ed;
}
.luno {
  margin: 16px;
}
.lun-ru1 {
  position: relative;
  width: 100%;
  height: 100%;
}
.lun-ru1 img {
  width: 100%;
  height: 100%;
}
.lunbo {
  position: absolute;
  bottom: 16px;
  margin: 0 16px;
  height: 188px;
  width: 350px;
}
.lunbo p:nth-of-type(1) {
  font-size: 12px;
  background: #0086f0;
  padding: 5px;
  color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.lunbo p:nth-of-type(2) {
  font-size: 18px;
  position: absolute;
  top: 50px;
  width: 350px;
  height: 20px;
  overflow: hidden;
}
.lunbo p:nth-of-type(3) {
  font-size: 14px;
  position: absolute;
  top: 100px;
  width: 350px;
  height: 40px;
  overflow: hidden;
}
.keji {
  margin-top: 20px;
}
.keji >>> .van-icon-volume-o::before {
  color: #0086f0;
  font-size: 18px;
}
.uer1 {
  margin-top: 20px;
  margin-right: 70px;
  margin-left: 16px;
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
.xian h2 {
  margin: 5px 0;
}
.xian h2 span {
  font-size: 14px;
  position: absolute;
  right: 0;
  top: 20px;
}
.hei {
  border: 2px solid;
  width: 50px;
  margin-bottom: 20px;
}
.kexing {
  margin: 10px 16px 0 16px;
}
.pian {
  padding: 20px 0;
  border-bottom: 1px solid rgb(148, 201, 144);
}
.pian img {
  width: 100%;
}
.pian p {
  color: #333;
  margin: 8px 0;
}
.pian p:nth-of-type(1) {
  font-size: 12px;
  color: #999;
}
.pian p:nth-of-type(1) span:nth-of-type(2) {
  margin-left: 10px;
}
.pian p:nth-of-type(2) {
  font-size: 18px;
  font-weight: bold;
}
.pian p:nth-of-type(4) {
  font-size: 12px;
}
.wenzi {
  margin-top: 20px;
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
.yanjiu {
  position: relative;
  margin: 0 16px;
  border-bottom: 1px dotted rgba(0, 134, 240, 0.4);
  padding-bottom: 20px;
}
.jiu {
  position: relative;
  width: 380px;
  height: 300px;
  overflow-x: scroll;
}
.jiu1 {
  width: 200px;
  height: 300px;
}
.jiu1 img {
  height: 100%;
  width: 100%;
}
.jiu2 {
  width: 200px;
  height: 300px;
}
.jiu2 img {
  height: 100%;
  width: 100%;
}
.jiu3 {
  width: 200px;
  height: 300px;
}
.jiu3 img {
  height: 100%;
  width: 100%;
}
.jiu4 {
  width: 200px;
  height: 300px;
}
.jiu4 img {
  height: 100%;
  width: 100%;
}
.jiu div:nth-of-type(2) {
  position: absolute;
  top: 0;
  left: 240px;
}
.jiu div:nth-of-type(3) {
  position: absolute;
  top: 0;
  left: 480px;
}
.jiu div:nth-of-type(4) {
  position: absolute;
  top: 0;
  left: 720px;
}
.gao {
  position: absolute;
  bottom: 10px;
  height: 176px;
  background-color: #fff;
  width: 180px;
  margin-left: 16px;
  color: #333;
  padding: 0 16px;
}
.gao p:nth-of-type(1) {
  width: 40px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  background: rgb(0, 134, 240);
  text-align: center;
  color: #fff;
  margin-bottom: 8px;
}
.gao p:nth-of-type(3) {
  font-weight: bold;
  margin: 8px 0 10px 0;
}
.gao p:nth-of-type(4) {
  width: 50px;
  border: 2px solid;
  margin-bottom: 30px;
}
.gao p:nth-of-type(5) {
  font-size: 12px;
  margin-top: 10px;
}
.gao1 {
  position: absolute;
  bottom: 10px;
  left: 240px;
  height: 176px;
  background-color: #fff;
  width: 180px;
  margin-left: 16px;
  color: #333;
  padding: 0 16px;
}
.gao1 p:nth-of-type(1) {
  width: 40px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  background: rgb(0, 134, 240);
  text-align: center;
  color: #fff;
  margin-bottom: 8px;
}
.gao1 p:nth-of-type(3) {
  font-weight: bold;
  margin: 8px 0 10px 0;
}
.gao1 p:nth-of-type(4) {
  width: 50px;
  border: 2px solid;
  margin-bottom: 30px;
}
.gao1 p:nth-of-type(5) {
  font-size: 12px;
  margin-top: 10px;
}
.gao2 {
  position: absolute;
  bottom: 10px;
  left: 480px;
  height: 176px;
  background-color: #fff;
  width: 180px;
  margin-left: 16px;
  color: #333;
  padding: 0 16px;
}
.gao2 p:nth-of-type(1) {
  width: 40px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  background: rgb(0, 134, 240);
  text-align: center;
  color: #fff;
  margin-bottom: 8px;
}
.gao2 p:nth-of-type(3) {
  font-weight: bold;
  margin: 8px 0 10px 0;
}
.gao2 p:nth-of-type(4) {
  width: 50px;
  border: 2px solid;
  margin-bottom: 30px;
}
.gao2 p:nth-of-type(5) {
  font-size: 12px;
  margin-top: 10px;
}
.gao3 {
  position: absolute;
  bottom: 10px;
  left: 720px;
  height: 176px;
  background-color: #fff;
  width: 180px;
  margin-left: 16px;
  color: #333;
  padding: 0 16px;
}
.gao3 p:nth-of-type(1) {
  width: 40px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  background: rgb(0, 134, 240);
  text-align: center;
  color: #fff;
  margin-bottom: 8px;
}
.gao3 p:nth-of-type(3) {
  font-weight: bold;
  margin: 8px 0 10px 0;
}
.gao3 p:nth-of-type(4) {
  width: 50px;
  border: 2px solid;
  margin-bottom: 30px;
}
.gao3 p:nth-of-type(5) {
  font-size: 12px;
  margin-top: 10px;
}
.zhixun {
  position: relative;
  margin: 20px 16px 0 16px;
}
.wei{
    margin-top: 20px;
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