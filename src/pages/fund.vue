<template>
    <div class="fund">
        <div class="header">
           <span  @click="back">{{lt}}</span>
           <h2>产品详情</h2>
        </div>
        <div class="money">
            <div @click="toggle_in" :class="show?'blue':''">收入</div>
            <div @click="toggle_out" :class="show?'':'blue'">支出</div>
        </div>
        <div v-if="show">
            <div class="all_money"> 
                <h3>2019年6月</h3>
                <p>收入￥<span>10,997.00</span></p>
            </div >
            <div class="money_inscroll" ref="money_inscroll">
                <ul class="money_in">
                    <li>
                        <div>
                            <h3>佣金</h3>
                            <p>收入￥<span>10,997.00</span></p>
                        </div>
                        <div>
                            +<span>100.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>佣金</h3>
                            <p>收入￥<span>10,997.00</span></p>
                        </div>
                        <div>
                            +<span>100.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>佣金</h3>
                            <p>收入￥<span>10,997.00</span></p>
                        </div>
                        <div>
                            +<span>100.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>佣金</h3>
                            <p>收入￥<span>10,997.00</span></p>
                        </div>
                        <div>
                            +<span>100.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>佣金</h3>
                            <p>收入￥<span>10,997.00</span></p>
                        </div>
                        <div>
                            +<span>100.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>佣金</h3>
                            <p>收入￥<span>10,997.00</span></p>
                        </div>
                        <div>
                            +<span>100.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>佣金</h3>
                            <p>收入￥<span>10,997.00</span></p>
                        </div>
                        <div>
                            +<span>100.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>佣金</h3>
                            <p>收入￥<span>10,997.00</span></p>
                        </div>
                        <div>
                            +<span>100.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>佣金</h3>
                            <p>收入￥<span>10,997.00</span></p>
                        </div>
                        <div>
                            +<span>100.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>佣金</h3>
                            <p>收入￥<span>10,997.00</span></p>
                        </div>
                        <div>
                            +<span>100.00</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div v-else>
            <div class="all_money"> 
                <h3>2019年6月</h3>
                <p>支出￥<span>10,997.00</span></p>
            </div>
            <div class="money_outscroll" ref="money_outscroll">
                <ul class="money_in">
                    <li>
                        <div>
                            <h3>提现</h3>
                            <p>11-11 09:40</p>
                        </div>
                        <div>
                            +<span>1000.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>提现</h3>
                            <p>11-11 09:40</p>
                        </div>
                        <div>
                            +<span>1000.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>提现</h3>
                            <p>11-11 09:40</p>
                        </div>
                        <div>
                            +<span>1000.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>提现</h3>
                            <p>11-11 09:40</p>
                        </div>
                        <div>
                            +<span>1000.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>提现</h3>
                            <p>11-11 09:40</p>
                        </div>
                        <div>
                            +<span>1000.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>提现</h3>
                            <p>11-11 09:40</p>
                        </div>
                        <div>
                            +<span>1000.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>提现</h3>
                            <p>11-11 09:40</p>
                        </div>
                        <div>
                            +<span>1000.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>提现</h3>
                            <p>11-11 09:40</p>
                        </div>
                        <div>
                            +<span>1000.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>提现</h3>
                            <p>11-11 09:40</p>
                        </div>
                        <div>
                            +<span>1000.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>提现</h3>
                            <p>11-11 09:40</p>
                        </div>
                        <div>
                            +<span>1000.00</span>
                        </div>
                    </li><li>
                        <div>
                            <h3>提现</h3>
                            <p>11-11 09:40</p>
                        </div>
                        <div>
                            +<span>1000.00</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>提现</h3>
                            <p>11-11 09:40</p>
                        </div>
                        <div>
                            +<span>1000.00</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div> 
</template>
<script>
import BS from "better-scroll";
export default {
    data(){
        return {
            lt:"<",
            show:true,
            focus:true
        }
    },
    methods:{
        toggle_in(){
            this.show=true;
            this.$nextTick(()=>{
                 this.scroll1=new BS(this.$refs.money_inscroll);
            })
        },
        toggle_out(){
            this.show=false;
            this.$nextTick(()=>{
                this.scroll2=new BS(this.$refs.money_outscroll)
            })
        },
        back(){
            this.$router.go(-1);
        }   
    },
    mounted(){
        this.scroll1=new BS(this.$refs.money_inscroll);
    }
}
</script>
<style lang="less" scoped>
@import "~style/index.less";
.fund{
    .w(375);
    .h(667);
    background:#f6f4fb;
    .header{
        .w(375);
        .h(47);
        display: flex;
        margin: 0,0,1px,0;
        span{
            .fs(24);
            .lh(47);
            font-family: "宋体";
            .margin(0,0,0,14px);
        }
        h2{
            text-align: center;
            .fs(17);
            .lh(47);
            .margin(0,0,0,126px);
        }
        background: #fff;
    }
    .money{
        .w(375);
        .h(43);
        background: #fff;
        display: flex;
        justify-content: space-around;
        div{
            .w(44);
            .h(43);
            .lh(43);
            text-align: center;
            .fs(16);
            // border-bottom: 2px solid #0d64ec;
        }
    }
    .all_money{
        .w(375);
        .h(51);
        h3{
            .w(350);
            .h(22);
            .lh(31);
            .fs(13);
            .padding(0,0,0,14px);
            color:#171717;
        }
        p{
            .w(350);
            .h(20);
            .lh(31);
            .fs(11);
            .padding(0,0,0,14px);
            color:#adadad;
        }
    }
    .money_in{
        .w(347);
        .padding(0,14px,0,14px);
        background: #fff;
        li{ 
            .w(347);
            .h(59);
            display: flex;
            justify-content: space-between;
            h3{
            .w(175);
            .h(29);
            .lh(44);
            .fs(14);
            color:#171717;
            }
            p{
                .w(175);
                .h(22);
                .lh(22);
                .fs(10);
                color:#adadad;
            }
            div:nth-child(2){
                .h(59);
                .lh(60);
                .fs(12);
                color:#ff5a5a;
                span{
                .w(175);
                .h(59);
                .lh(60);
                .fs(12);
                color:#ff5a5a;
            }
            }
        }
    }
    .money_inscroll,.money_outscroll{
        .w(375);
        .h(526);
        overflow: hidden;
    }
    .blue{
        color: #0d64ec;
        border-bottom: 2px solid #0d64ec;
    }
}
</style>
