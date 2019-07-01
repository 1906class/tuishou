<template>
    <div class="my_creditor">
        <div class="header">
            <span @click="back">{{lt}}</span>
            <h2>我的承接-产品详情</h2>
        </div>
        <div class="details_scroll">
            <div>
                <M_details></M_details>
                <div class="status">
                    <div class="status_message">
                        订单状态：<span>待对方签债权合同</span>
                    </div>
                    <p>锁定到期时间:<span>2019-06-29 16:59:35</span></p>
                </div>
                
            </div>
        </div>
        <div class="footer">
            我有疑问联系客服
        </div> 
        
    </div>
</template>
<script>
import M_details from "components/m_details";
import BS from 'better-scroll';
export default {
    data(){
        return {
            lt:"<"
        }
    },
    components:{
        M_details
    },
    mounted(){
        this.scroll=new BS(".details_scroll");
        // console.log(1)
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
@import "~style/index.less";
.my_creditor{
    .w(375);
    .h(667);
    background:#f6f4fb;
    .header{
        .w(375);
        .h(47);
        display: flex;
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
            .margin(0,0,0,96px);
        }
        background: #fff;
    }
    .details_scroll{ 
        overflow: hidden;
        // position: flxed;
        // top: 0;
        // bottom: 0;
        .h(575);
        .status{
            .h(450);
            .margin(10px,0,0,0);
            background: #f6f4fb;
            .status_message{
                .w(359);
                .h(52);
                .lh(52);
                .fs(14);
                color:#9d9d9d;
                background: #fff;
                .padding(0,0,0,16px);
                span{
                     color:#222;
                }
            }
             p{
                text-align: center;
                .w(375);
                .h(72);
                .lh(72);
                .fs(14);
                color:#9d9d9d;
            }
        }
    }
    .footer{
        position: fixed;
        bottom: 0;
        .w(375);
        .h(45);
        background: #fff;
        .fs(14);
        .lh(45);
        color: #005beb;
        text-align: center;
    }
}
</style>

