<template>
    <div class="details">
        <div class="header">
           <span @click="back">{{lt}}</span>
           <h2>产品详情</h2>
        </div>
        <M_details></M_details>
        <div class="notice">
            注：每笔订单承接人需向平台额外支付0.6%的手续费
        </div>
        <div class="footer" @click="affirm" ref="footer">
            立即承接
        </div>
        <div class="popup" v-if="show">
            <div class="affirm">
                <h3>承接确认</h3>
                <p>是否确认承接该债权</p>
                <button @click="no">取消</button>
                <button @click="yes">确认</button>
            </div>
        </div>
    </div>
</template>
<script>
import M_details from "components/m_details";
export default {
    data(){
        return {
            lt:"<",
            // message:{},
            show:false
        }
    },
    // mounted(){
    //     this.$axios.get("http://zqzr.ketao.com/api/creditor/sell/detail?creditor_id=154")
    //     .then((res)=>{
    //         this.message=res.data;
    //         console.log(this.message)
    //     })
    // },
    components:{
        M_details
    },
    methods:{
        affirm(){
            this.show=true;
        },
        no(){
            this.show=false;
        },
        yes(){
            this.show=false;
            // console.log( this.$refs);
            this.$refs.footer.style.background="#ccc";
            this.$refs.footer.innerHTML="已承接";
            this.$router.push("/my_creditor");
        },
        back(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
@import "~style/index.less";
.details{
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
            .margin(0,0,0,126px);
        }
        background: #fff;
    }
    .notice{
        .fs(12);
        color: #a3b6ee;
        .lh(42);
        .margin(0,16px,0,16px);
    }
    .footer{
        .w(375);
        .h(45);
        background: #0d64ec;
        position: fixed;
        bottom: 0;
        text-align: center;
        .fs(16);
        .lh(45);
        color: #fff;
    }
    .popup{
        .w(375);
        .h(667);
        position: fixed;
        top: 0;
        bottom: 0;
        background: rgba(125,125,125,.5);
        .affirm{
            .w(252);
            .margin(294px,32px,0,32px);
            background: #fff;
            .h(162);
            .padding(0,29px,0,29px);
             h3{
                .fs(18);
                .lh(66);
                .h(60);
                color: #222;
                text-align: center;
            }
            p{
                .fs(12);
                .lh(12);
                .h(12);
                color: #a9a9a9;
                text-align: center; 
            }
            button{
                display: block;
                .w(106);
                .h(30);
                text-align: center;
                .fs(12);
                .lh(30);
                .h(30);
                float: left;
                outline: none;
                border: none;
                border-radius: 3px;
                .margin(32px,10px,0,10px)
            }
            button:nth-child(3){
                background: #cccccc;
            }
            button:nth-child(4){
                background: #005beb;
            }
        }
    }
    
}
</style>
