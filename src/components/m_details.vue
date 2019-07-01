<template>
    <div class="m_details">
        <div class="product">
           <div class="product_up">
               <div class="img"><img :src="message.image"></div>
               <h4>{{message.name}}</h4>
           </div>
           <ul class="product_down">
               <li><span>{{Number(message.price)/100}}</span><p>转让金额(元)</p></li>
               <li><span>{{Number(message.discount_price)/100}}</span><p>折扣金额(元)</p></li>
               <li><span>{{message.discount}}折</span><p>转让折扣</p></li>
           </ul>
       </div>
        <div class="message">
            <div class="message_time">
                {{message.rel_date}}发布
            </div>
            <div class="message_codenum">
                订单号：{{message.code_number}}
            </div>
            <ul class="message_details">
                <li><span>先息后本</span><p>还款方式</p></li>
                <li><span>{{message.surplus_day}}天</span><p>剩余期限</p></li>
                <li><span>{{message.validity_day}}天</span><p>转让有效</p></li>
            </ul>
            <div class="message_remark">
                备注：发布成功
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lt:"<",
            message:{},
            show:false
        }
    },
    mounted(){
        this.$axios.get("http://zqzr.ketao.com/api/creditor/sell/detail?creditor_id=154")
        .then((res)=>{
            this.message=res.data.data;
            // console.log(this.message.data)
        })
    },
}
</script>
<style lang="less" scoped>
@import "~style/index.less";
.m_details{
    .w(375);
    .h(388);
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
    .product{
        .w(375);
        .h(160);
        background: #005beb;
        overflow: hidden;
        .product_up{
            display: flex;
            .h(80);
            .img{
                .w(40);
                .h(40);
                img{
                    width: 100%;
                    height: 100%;
                    display: block;
                }
                .margin(20px,0,0,15px);
                border-radius: 8px;
                overflow: hidden;
            }
            h4{
                .fs(16);
                .margin(30px,0,0,10px);
                color: #fff;
            }
        }
        .product_down{
            .h(80);
            color: #fff;
            display: flex;
            li{
                .margin(0,25px,0,25px);
                .w(88);
                span{
                    text-align: center;
                    .fs(18);
                    .lh(18);
                    .h(18);
                    display: block;
                    .margin(12px,0,12px,0);
                    font-weight: bloder;
                }
                p{
                    text-align: center;
                    .fs(12);
                    .h(12);
                    .lh(12);
                }
            }
        }
    }
    .message{
        .h(218);
        background:#fff;
        .padding(10px,16px,0,16px);
        .message_time{
            .h(45);
            border-bottom: 2px solid #f5f5f5;
            .fs(14);
            .lh(45);
            color: #222;
        }
        .message_codenum{
            .h(54);
            .fs(10);
            .lh(34);
            color: #a9a9a9;
        }
        .message_details{
            display: flex;
            .h(72);
            border-bottom: 2px solid #f5f5f5;
            li{
                span{
                    display: block;
                    .fs(16);
                    .lh(16);
                    .w(124);
                    font-weight: bloder;
                    color: #222;
                    .margin(0,0,16px,0)
                }
                p{
                    .fs(12);
                    .lh(12);
                    .w(124);  
                    color: #a9a9a9;
                }
            }
            li:nth-child(3){
                span{
                    .w(100);
                }
                p{
                    .w(100);
                }
            }
        }
        .message_remark{
            .h(43);
            .fs(12);
            .lh(43);
            color: #a9a9a9;
        }
    }
}
</style>

