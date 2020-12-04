<template>
  <div id="uer">
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
    <div class="xiang"></div>
    <div class="xiaopeng">
      <img src="../assets/24.jpg" alt />
      <span>小鹏汽车</span>
      <p>主要开发互联网汽车产品的企业</p>
      <p>
        小鹏是一家成立于2016年5月，总部位于中国广州市的智能汽车设计及制造商，
        创始人为何小鹏、夏珩、何涛；成立以来，先后获得了GGV纪源资本、经纬中国、
        阿里、高瓴资本等机构的投资。在中国和全球范围内，和小鹏在业务上有不同程
        度竞争关系的公司包括特斯拉、蔚来、比亚迪、北京宝沃等
      </p>
      <p>更多了解></p>
      <div class="fenlei">
        <div class="p1">
          <p>分类</p>
          <p>汽车</p>
        </div>
        <div class="p1">
          <p>二级行业</p>
          <p>汽车整车</p>
        </div>
        <div class="p1">
          <p>总部地区</p>
          <p>广东省广州市天河区长兴街松岗大街8号小鹏汽车</p>
        </div>
        <div class="p1">
          <p>网站</p>
          <p>https://www.xiaopeng.com/en/</p>
        </div>
        <div class="fenlei-p">
          <p>员工数量</p>
          <p>1001-5000</p>
        </div>
        <div class="yidon">
          <div class="p1">
            <p>一级行业</p>
            <p>汽车整车</p>
          </div>
          <div class="p1">
            <p>成立时间</p>
            <p>2015-01-01</p>
          </div>
          <div class="p1">
            <p>公司名称</p>
            <p>广州小鹏汽车科技有限公司</p>
          </div>
          <div class="p1">
            <p>电子邮件</p>
            <p>service@xiaopeng.com</p>
          </div>
        </div>
      </div>
    </div>
    <div class="book">
      <van-tabs v-model="active" title-active-color="rgb(0,134,240)">
        <van-tab title="全部">
          <div class="tab-1">
            <p class="tab-1-p">
              <span>快讯</span>
              <span>2小时前</span>
              <span>·汽车</span>
            </p>
            <p>瑞银将小鹏汽车评级下调至“中性</p>
          </div>
          <div class="tab-1">
            <p class="tab-1-p">
              <span>快讯</span>
              <span>2小时前</span>
              <span>·日常消费</span>
            </p>
            <p>热门中概股涨跌不一，拼多多涨5.51%</p>
          </div>
          <div class="wenzi-tu">
            <div class="tu-i">
              <div class="guandian">观点</div>
              <img src="..\assets\15766653486769.jpg" />
              <div class="ziti1">
                <p>产业/工业</p>
                <p>亿欧智库黄渊普：理解数字经济（1）</p>
                <p>昨天 21:45</p>
              </div>
            </div>
          </div>
          <div class="tab-1">
            <p class="tab-1-p">
              <span>快讯</span>
              <span>2小时前</span>
              <span>·汽车</span>
            </p>
            <p>瑞银将小鹏汽车评级下调至“中性</p>
          </div>
          <div class="tab-1">
            <p class="tab-1-p">
              <span>快讯</span>
              <span>2小时前</span>
              <span>·日常消费</span>
            </p>
            <p>热门中概股涨跌不一，拼多多涨5.51%</p>
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
          <div class="tab-1">
            <p class="tab-1-p">
              <span>快讯</span>
              <span>2小时前</span>
              <span>·汽车</span>
            </p>
            <p>瑞银将小鹏汽车评级下调至“中性</p>
          </div>
          <div class="tab-1">
            <p class="tab-1-p">
              <span>快讯</span>
              <span>2小时前</span>
              <span>·日常消费</span>
            </p>
            <p>热门中概股涨跌不一，拼多多涨5.51%</p>
          </div>
          <div class="tab-1">
            <p class="tab-1-p">
              <span>快讯</span>
              <span>2小时前</span>
              <span>·日常消费</span>
            </p>
            <p>热门中概股涨跌不一，拼多多涨5.51%</p>
          </div>
          <div class="tab-1">
            <p class="tab-1-p">
              <span>快讯</span>
              <span>2小时前</span>
              <span>·日常消费</span>
            </p>
            <p>热门中概股涨跌不一，拼多多涨5.51%</p>
          </div>
          <div class="wenzi-tu">
            <div class="tu-i">
              <img src="..\assets\25.jpg" />
              <div class="ziti1">
                <p>产业/工业</p>
                <p>亿欧智库黄渊普：理解数字经济（1）</p>
                <p>昨天 21:45</p>
              </div>
            </div>
          </div>
          <div class="wenzi-tu">
            <div class="tu-i">
              <div class="guandian">观点</div>
              <img src="..\assets\26.jpg" />
              <div class="ziti1">
                <p>产业/工业</p>
                <p>亿欧智库黄渊普：理解数字经济（1）</p>
                <p>昨天 21:45</p>
              </div>
            </div>
          </div>
          <div class="tab-1">
            <p class="tab-1-p">
              <span>快讯</span>
              <span>2小时前</span>
              <span>·汽车</span>
            </p>
            <p>瑞银将小鹏汽车评级下调至“中性</p>
          </div>
          <div class="tab-1">
            <p class="tab-1-p">
              <span>快讯</span>
              <span>2小时前</span>
              <span>·汽车</span>
            </p>
            <p>瑞银将小鹏汽车评级下调至“中性</p>
          </div>
          <div class="tab-1">
            <p class="tab-1-p">
              <span>快讯</span>
              <span>2小时前</span>
              <span>·汽车</span>
            </p>
            <p>瑞银将小鹏汽车评级下调至“中性</p>
          </div>
        </van-tab>
        <van-tab title="资讯">
          <div class="wenzi">
            <div class="wenzi-tu">
              <div class="tu-i">
                <div class="guandian">观点</div>
                <img src="..\assets\1.jpg" />
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
                <img src="..\assets\2.jpg" />
                <div class="ziti">
                  <p>产业/工业</p>
                  <p>亿欧智库黄渊普：理解数字经济（1）</p>
                  <p>昨天 21:45</p>
                </div>
              </div>
            </div>
            <div class="wenzi-tu">
              <div class="tu-i">
                <img src="..\assets\3.jpg" />
                <div class="ziti">
                  <p>· 分析</p>
                  <p>巴比食品：一只馒头背后的早餐连锁增量空间</p>
                  <p>2020-11-27 18:20</p>
                </div>
              </div>
            </div>
            <div class="wenzi-tu">
              <div class="tu-i">
                <img src="..\assets\4.jpg" />
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
        </van-tab>
        <van-tab title="分析">
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
        </van-tab>
        <van-tab title="报告">报告</van-tab>
      </van-tabs>
    </div>
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
export default {
  data() {
    return {
      active: 2
    };
  }
};
</script>
<style scoped>
.uer {
  margin-top: 10px;
  padding: 0px 16px;
  margin-right: 50px;
}
.lun {
  position: relative;
}
.zuo {
  position: absolute;
  top: 50px;
  right: -25px;
}
.you {
  position: absolute;
  top: 50px;
  right: -50px;
}
.xuxian {
  position: absolute;
  top: 0px;
  right: -25px;
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
.xiang {
  width: 90%;
  border: 2px solid rgb(0, 134, 240);
  margin: 20px 16px;
}
.xiaopeng {
  position: relative;
  margin: 0 16px;
  width: 90%;
}
.xiaopeng img {
  width: 34px;
  height: 34px;
  border: 1px solid #999;
  margin-bottom: 10px;
}
.xiaopeng span {
  font-size: 24px;
  position: absolute;
  top: 0;
  margin-left: 10px;
}
.xiaopeng p:nth-of-type(1) {
  font-size: 13px;
  margin-bottom: 8px;
}
.xiaopeng p:nth-of-type(2) {
  font-size: 14px;
}
.xiaopeng p:nth-of-type(3) {
  margin-top: 10px;
  font-size: 14px;
  margin-bottom: 20px;
}
.fenlei {
  border-bottom: 1px dotted rgba(0, 134, 240, 0.4);
  border-top: 1px dotted rgba(0, 134, 240, 0.4);
  position: relative;
}
.fenlei-p p:nth-of-type(1) {
  margin-top: 5px;
  color: #999;
  font-size: 12px;
}
.fenlei-p p:nth-of-type(2) {
  margin: 5px 0 10px 0;
}
.p1 {
  border-bottom: 1px dotted rgba(0, 134, 240, 0.4);
  width: 180px;
}
.p1 p:nth-of-type(1) {
  margin-top: 5px;
  font-size: 12px;
  color: #999;
}
.p1 p:nth-of-type(2) {
  margin: 5px 0;
  font-size: 16px;
  overflow-x: scroll;
}
.yidon {
  position: absolute;
  top: 0;
  right: 0;
}
.book {
  margin: 20px 16px 0 16px;
}
.tab-1 {
  border-top: 1px dotted rgba(0, 134, 240, 0.4);
}
.tab-1-p {
  font-size: 12px;
  color: #999;
  margin: 5px 0;
}
.tab-1-p span:nth-of-type(1) {
  display: inline-block;
  margin-right: 8px;
  width: 48px;
  margin-top: 10px;
  height: 24px;
  line-height: 24px;
  background: #eaeaea;
  color: #333;
  text-align: center;
}
.tab-1 p:nth-of-type(2) {
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 10px;
  font-weight: bold;
}
.tu-i img {
  width: 45%;
}
.guandian {
  position: absolute;
  top: 0px;
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
.ziti1 {
  font-size: 12px;
  position: absolute;
  left: 200px;
  top: 16px;
  color: #333;
}
.ziti1 p:nth-of-type(2) {
  font-weight: bold;
  margin-top: 3px;
  font-size: 14px;
}
.ziti1 p:nth-of-type(3) {
  position: absolute;
  top: 85px;
  color: #999;
}
.jiu {
  margin: 40px 0;
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
.wei {
  margin-top: 20px;
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