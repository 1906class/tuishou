<template>
  <div class='my'>
     <div class="mine">
        <div class="wrap">
              <div class="top">
                <div class="money">
                  <p class="mon1">总资产（元） <span></span></p>
                  <p class="mon2">0.00</p>
                </div>
                <img src="/default.jpg">
              </div>
            </div>   
         <div class="reset">
            <div class="cont">  
             <p class="cont1">可用余额（元） </p>
             <p class="cont2">0.00</p>
            </div>
            <p class="cash">提现</p>
         </div>
         <ul class="list">
           <li><span><img src="/list4.jpg"></span> 我的转让 <span class="tg">&gt</span></li>
           <li><span><img src="/list3.jpg"></span> 我的承接 <span class="tg">&gt</span></li>
           <li><span><img src="/list2.jpg"></span> 资金流水 <span class="tg">&gt</span></li>
           <li @click="noopen"><span><img src="/list1.jpg"></span> 我的实名认证 <span class="tg">&gt</span></li>
         </ul>
         <p class="quit">退出登录</p>
      </div>

     <router-view></router-view>
  </div>
</template>
<script>
import {MessageBox} from 'mint-ui'
export default {
 methods:{
   noopen(){
     MessageBox.alert('此功能未开放','提示');
   }
  },
   mounted(){
     let login = true;
     if(login){
       this.$router.push('/my') 
      
     }else{
     this.$router.push('/my/login')   
     }
   }
  } 
</script>
<style lang="less" scope>
@import '~style/index.less';
.my{
  text-align: center;
  .mine{
    font-size:16px;
    .w(375);
    .h(667);
    background: #eee;
    .wrap{ 
      .w(375);
      .h(163);
      background:url(/my_bg.png) repeat-y;
     .top{
      color:#fff;
     .w(315);
      .h(128); 
      .padding(35,30,0,30);
      
      .money{
          .w(260);
          text-align:left;
          float: left;
          .mon1{
           font-size:14px;
           .w(260);
           .h(22);
           .lh(22)
         }
          .mon2{
           font-size:30px;
           .w(260);
           .h(48);
           .lh(48);
         }
      }
      img{
        float: right;
        .w(54);
        .h(54)
      }
    }
    }
    
    .reset{
      .w(305);
      .h(35);
      margin:-36px auto 16px;
      background: #fff;
      border-radius:4px;
      .padding(20,20,20,20);
      display: flex;
      justify-content:space-between;
      .cont{
        text-align: left;
        .cont1{
          font-size:13px;
           color:#999;
           .w(91);
           .h(20);
           .lh(20)
        }
        .cont2{
          font-size:15px;
          .w(91);
           .h(24);
           .lh(24)
        }
      }
      .cash{
        .w(80);
        .h(34);
        border:1px solid #ccc;
        border-radius:17px;
        .lh(34);  
      } 
    }
    .list{
      list-style: none;
      .w(345);
      margin:0 auto;
      background: #fff;
      .padding(0,15,0,15);
      text-align:left; 
      li{
        .h(56);
        .w(345);
        .lh(56); 
        border-bottom:1px solid #fefefe; 
        .tg{
          font-family: '宋体';
          font-weight: 700;
          float:right; 
          .margin(0,20,0,0)
        }
      }
    }
    .quit{
      margin-top:16px;
       .h(56);
        .w(375);
        .lh(56);
        background: #fff;
        color: #ff4c4c;
        font-size:18px;
        font-weight:700;
    }
   }
  
}

</style>
