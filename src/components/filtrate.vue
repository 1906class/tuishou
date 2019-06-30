<template>
    <div class="filtrate">
        <transition name="hehe">
        <div class="wrap" v-if='haha'>
            <div class="content">
                <h2>债权状态</h2>
                <p>
                    <span @click="aToggle" :class='a?"blue":""'>可承接</span>
                    <span @click="bToggle" :class='b?"blue":""'>锁定中</span>
                    <span @click="cToggle" :class='c?"blue":""'>已转让</span>
                </p>
            </div>
            <div class="bts">
                <button class="reset">重置</button>
                <button class="sure" @click="close">确定</button>
            </div>
        </div>
        </transition>
        <div class="box" @click="close">

        </div>   
    </div>
</template>
<script>
export default {
    data(){
        return{
            haha:true,
            a:false,
            b:false,
            c:false
        }
    },
    props:['close'],
    methods:{
       opc(){
           this.haha = !this.haha;
       },
       aToggle(){
           this.a = !this.a;
       },
       bToggle(){
           this.b = !this.b;
       },
       cToggle(){
           this.c = !this.c;
       }
    }
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
.filtrate{
    position: fixed;
    .top(48);
    .bottom(0);
    .w(375);
    background: @bg-color-blackO4;
    border-top: 1px solid @bg-color-grayC;
    .hehe-enter,.hehe-leave-to{
      opacity: 0;
    }
    .hehe-enter-to,.hehe-leave{
      opacity: 1;
    }
    .hehe-enter-active,.hehe-leave-active{
      transition: all 2s;
    }
    .wrap{
        .h(163);
        .w(375);
        background: @font-color-white;
        .content{
            .padding(20,15,0,15);
            h2{
                .h(24);
                .fontSize(16);
            }
            p{
                .h(34);
                .margin(15,0,25,0);
                display: flex;
                justify-content: space-between;
                span{
                    .h(34);
                    .w(100);
                    .fontSize(14);
                    .l_h(34);
                    text-align: center;
                    background: @bg-color-gray;
                    border: 1px solid @bg-color-gray;
                }
                .blue{
                    border: 1px solid @bg-color-blue0;
                    color:@bg-color-blue0;
                }
            }
        }
        .bts{
            .w(375);
            .h(45);
            display: flex;
            button{
                width: 50%;
                border: 0;
                .fontSize(16);
                outline: none;
            }
            .reset{
                background: @bg-color-blueE;
                color: @font-color-blue8;
            }
            .sure{
                background: @bg-color-blue0;
                color: @font-color-white;
            }
        }
    }
    .box{
        width: 100%;
        height: 100%;
    }
}
</style>

