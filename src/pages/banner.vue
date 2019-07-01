<template>
  <div>
    <div class="homepage">
      <div class="top">
        <h3>首页</h3>
        <mt-swipe class="banner" :auto="4000">
          <mt-swipe-item v-for="(item,index) in bannerimg" :key="index">
            <img :src="item" alt />
          </mt-swipe-item>
        </mt-swipe>
        <div>
          <ul class="SaleandPurchase">
            <li>
              <i class="iconfont">&#xe76a;</i>
              <div>
                <h3>求购债权</h3>
                <p>安全放心</p>
              </div>
            </li>
            <li>
              <i class="iconfont">&#xe61f;</i>
              <div>
                <h3>出售债转</h3>
                <p>专业担保</p>
              </div>
            </li>
          </ul>
          <p class="more">
            出售债转
            <b>更多</b>
          </p>
          <div class="section">
            <ul class="Website">
              <li v-for="(value,index) in address" :key="index">
                <img :src="value.image" alt />
                <p>{{value.name}}</p>
              </li>
            </ul>
          </div>

          <p class="p2ptille"  @click="tomore">
            P2P债权
              <b>更多</b>
          </p>
          <a v-for="(item,index) in ptwop" :key="index" class="p2p" @click="todetails" href="##">
            <div class="p2pimgdiv">
              <img :src="item.image" alt />
              <p>{{item.name}}</p>
              <div class="money">
                <p>
                  转让金额(元)
                  <b>33390.68</b>
                </p>
                <p>
                  折扣金额(元)
                  <b class="color">26712.54</b>
                </p>
              </div>
              <div class="discount">
                <h4>{{item.Discount}}</h4>
                <p>{{item.Transferdiscount}}</p>
              </div>
              <div class="cheng"></div>
            </div>
          </a>
        </div>
        <!--top  -->
      </div>
    </div>
  </div>
</template>
<script>
import BS from "better-scroll";
export default {
  data() {
    return {
      bannerimg: [
        "http://ts.365cf.com/uploads/banner/1559214025595681.jpg",
        "http://ts.365cf.com/uploads/banner/1559213935907409.jpg",
        "http://ts.365cf.com/uploads/banner/1557488160588307.png"
      ],
      address: "",
      ptwop: ""
    };
  },
  methods: {
    tomore(){
      console.log(1)
      this.$router.push("/debt");
    },
    todetails(){
      this.$router.push("/details");
    },
    bannerimage() {
      this.$axios.get("/dev/api/platform/list?from=0&limit=10").then(res => {
        this.address = res.data.data.list;
        // console.log(this.address)
      });
    },
    p2pmenu() {
      this.$axios
        .get("http://ts.365cf.com/api/creditor/sell/list?from=0&limit=3")
        .then(res => {
          let num = 1;
          for (var i = 0; i < res.data.data.list.length; i++) {
            res.data.data.list[i].Discount = num + "折";
            res.data.data.list[i].Transferdiscount = "转让折扣";
            num++;
          }
          this.ptwop = res.data.data.list;
          console.log(this.ptwop);
        });
    },
    hengxiang() {
      this.scroll = new BS(".section", {
        scrollX: true
      });
    }
  },
  mounted() {
    this.hengxiang();
    this.bannerimage();
    this.p2pmenu();
    this.scroll = new BS(".homepage",{click:true});

    console.log(this.scroll);
  }
};
</script>
<style lang="less" scoped>
@import "~style/index.less";
@import "~pages/font/iconfont.css";
.homepage {
  position: fixed;
  .top(0);
  .bottom(50);
  overflow: hidden;

  .top {
    .w(375);
    background: #fff;
    .p2p {
      display: block;
      margin: 0 auto;
      border-bottom: 2px solid #e0e0e0;
      .w(345);
      .h(167);
      background: #fff;
      .p2pimgdiv {
        position: relative;
        .cheng {
          .w(48);
          .h(29);
          background: url(http://ts.365cf.com/static/image/bg3.png) no-repeat;
        }
        img {
          .w(42);
          .h(42);
          border-radius: 10%;
          float: left;
          .margin(9, 0, 0, 0);
        }
        p {
          font-size: 15px;
          float: left;
          color: #000;
          font-weight: bold;
          .margin(8, 0, 0, 10);
        }
        .discount {
          position: absolute;
          .w(84);
          .h(50);
          text-align: center;
          .top(49%);
          .right(25%);
          h4 {
            font-size: 23px;
            color: #ff4c4c;
            font-weight: normal;
          }
          p {
            font-size: 12px;
            color: #949494;
          }
        }
        .money {
          .w(156);
          .h(30);
          p {
            .w(156);
            .h(30);
            .margin(10, 0, 0, 0);
            font-size: 12px;
            .color {
              color: #f00;
            }
            b {
              float: right;
              font-size: 16px;
            }
          }
        }
      }
    }
    .more {
      .margin(5, 0, 0, 0);
      background: #fff;
      .padding(0, 0, 0, 10);
      .padding(0, 10, 0, 0);
      .w(375);
      .h(46);
      .lh(46);
      font-size: 16px;
      font-weight: bold;
      b {
        float: right;
        font-weight: normal;
        color: #8b8b8b;
        font-size: 13px;
      }
    }
    .p2ptille {
      .margin(5, 0, 0, 0);
      .padding(0, 10, 0, 0);
      background: #fff;
      .w(375);
      .h(46);
      .lh(46);
      font-size: 16px;
      font-weight: bold;
      b {
        float: right;
        font-weight: normal;
        color: #8b8b8b;
        font-size: 13px;
      }
    }
    .section {
      .Website {
        .w(1100);
        display: flex;
        .h(115);
        overflow: scroll-x;
        li {
          //  .w(50);
          .h(115);
          .padding(0, 30, 0, 30);
          text-align: center;
          background: #fff;
          img {
            .w(50);
            .h(50);
          }
          p {
            .w(50);
            font-size: 12px;
            .margin(15, 0, 0, 0);
          }
        }
      }
    }
    h3 {
      .w(375);
      .h(46);
      font-size: 16px;
      text-align: center;
      .lh(46);
      color: #333;
      font-weight: normal;
      background: #fff;
    }
    .banner {
      .w(375);
      .h(210);
      img {
        width: 100%;
      }
    }
  }
  .SaleandPurchase {
    .w(375);
    .h(137);
    .margin(5, 0, 0, 0);
    background: #fff;
    li {
      .w(187.5);
      .h(137);
      position: relative;
      float: left;
      .iconfont {
        font-family: "iconfont" !important;
        font-size: 35px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: block;
        //   .w(25px);
        //   .h(25);
        position: absolute;
        .top(50%);
        .left(51%);
        color: #5b91f2;
      }
      div {
        .w(64);
        .h(38.5);
        text-align: center;
        position: absolute;
        .top(50%);
        .left(89%);
        h3 {
          font-size: 16px;
          .h(16);
          .w(64);
          .lh(16);
          font-weight: bolder;
          .margin(0, 0, 5, 0);
        }
        p {
          font-size: 11px;
          color: #a8a8a8;
        }
      }
    }
  }
}
</style>


