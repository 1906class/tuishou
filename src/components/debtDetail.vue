<template>
    <div class="debtDetail">
        <ul class="content">
            <li v-for="(item,index) in debtlist"
                :key="index"
            >
                <div class="top">
                    <div class="logo">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="intro">
                        <h2>{{item.name}}</h2>
                    </div>
                    <div class="tips" :style="`background-image:url(${item.sttbg})`">
                        {{item.stt}}
                    </div>
                </div>
                <div class="btm">
                    <div class="lf">
                        <p>
                            <span>转让金额(元)</span>
                            <span class="oprice">{{(item.price/100).toFixed(2)}}</span>
                        </p>
                        <p>
                            <span>折扣金额(元)</span>
                            <span class="cprice">{{(item.discount_price/100).toFixed(2)}}</span>
                        </p>
                    </div>
                    <div class="rt">
                        <p>
                            <span>{{item.discount}}</span>折
                        </p>
                        <p class="text">转让折扣</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

import BScroll from 'better-scroll';
export default {
    data(){
        return {
            debtlist:[]
        }
    },
    props:['list'],
    watch:{
        list(next,prev){
            // console.log(next,prev)
            this.debtlist = next;
        }
    },
    mounted(){
        new BScroll('.debtDetail');
    }
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
.debtDetail{
    position:fixed;
    .top(152);
    .bottom(48);
    .padding(0,15,0,15);
    overflow: hidden;
    .content{
        li{
            .w(345);
            .margin(0,0,20,0);
            .padding(15,0,44,0);
            border-bottom: 1px solid @bg-color-gray;
            .top{
                .h(41);
                display: flex;
                justify-content: space-between;
                .logo{
                    .w(41);
                    .h(41);
                    .b_r(10);
                    background: @bg-color-grayC;
                    img{
                        .w(41);    
                    }
                    
                }
                .intro{
                    flex: 1;
                    .padding(0,10,0,10);
                    h2{
                        .fontSize(16);
                        font-weight: bold;
                        color:@bg-color-black2;
                    }
                }
                .tips{
                    .w(56);
                    .h(41);
                    // background: url(http://ts.365cf.com/static/image/bg2.png);
                    background-size: 100% 110%;
                    .l_h(41);
                    text-align: center;
                    .fontSize(12);
                    color: @font-color-white;
                }
            }
            .btm{
                .w(345);
                .h(67);
                .padding(15,0,0,0);
                // background: greenyellow;
                display: flex;
                .lf{
                    flex: 1;
                    p{
                        .w(200);
                        .h(26);
                        display: flex;
                        align-items: center;
                        span{
                            .w(86);
                            color: @font-color-black8;
                            .fontSize(14);
                        }
                        .oprice{
                            .fontSize(16);
                            color: @font-color-black3;
                        }
                        .cprice{
                            .fontSize(16);
                            color: @font-color-red;
                        }
                    }
                }
                .rt{
                    .w(145);
                    P{
                        .fontSize(28);
                        .l_h(30);
                        color: @font-color-red;
                        span{
                            .fontSize(30);
                            .l_h(30);
                            color: @font-color-red;
                            .margin(0,5,0,0);
                        }
                        
                    }
                    .text{
                        color: @font-color-black8;
                        .fontSize(14);
                    }
                }
            }
        }
    }
}
</style>


