<template>
  <div class="login">
      <div class="rigist">
        <p class="head">
          <img src="/1.png" @click="back"> 
           登录
        </p>
        <div class="slect">
          <span :class="show?'span1':'span2'" @click='toggle1'
          >账户密码登录</span>
          <span :class="show?'span2':'span1'" @click='toggle2'
          >短信快捷登陆</span>
          
        </div>
        <div class="content">
            <div class="change1" v-if='show'>
                <p class="p1"><img src="/rg1.jpg"><input type="text"  placeholder="请输入手机号" v-model='value1'></p>
                <p class="p1"><img src="/rg2.jpg"><input type="password"  placeholder="请输入密码" v-model='value2'></p>
                <p class="fogit" @click="goForget">
                    忘记密码？
                </p>
             </div> 
             <div class="change2" v-else>
                <p class="p1"><img src="/fs1.png"><input type="text"  placeholder="请输入手机号"><span>获取验证码</span></p>
                <p class="p1"><img src="/rg3.jpg"><input type="password"  placeholder="请输入6位短信验证码"></p>
                
             </div>    
            <p class="btn" @click="log">
                登录
            </p>
            <p class="noaccount" @click="goRegister">
                没有账号，立即注册
            </p>
        </div>
        <router-view></router-view>
    </div> 
  </div>
</template>
<script>
import {MessageBox} from 'mint-ui'
export default {
  data(){
  return {show:"true",
         value1:"",
         value2:"",
  } 
    },
  
   methods:{
     back(){
      this.$router.go(-1);
     },
     toggle1(){
       this.show=true;
        
       },
     toggle2(){
       this.show=false;
       }, 
     goForget(){
       this.$router.push({path:'/my/forget',query:{name:"wangyi",age:11}})
     }, 
      goRegister(){
       this.$router.push({path:'/my/register'})
     } ,
     log(){
        var user=this.value1;
        var password=this.value2;
        console.log(user,password);
         var obj = JSON.parse(localStorage.getItem('data1'));
         console.log(obj);
         var bStop = true;
          for(var i=0;i<obj.length;i++){
            if(obj[i].id == user){
              if(obj[i].num == password){
                  this.$router.push({path:'/my'});
                }else{
                 MessageBox.alert('密码错误','提示');
                }
               bStop = false; 
             }
          }  
           if(bStop){
              MessageBox.alert('用户不存在，请注册','提示');
            
               this.$router.push({path:'/my/register'});
           }  
     }  
   }
  } 
</script>
<style lang="less" scope>
@import '~style/index.less';
.login{
  position: fixed;
      .top(0);
      bottom:0;
      .w(375);
      z-index: 1;
      background: #fff;
 .rigist{
      .w(375);
      .h(667);
      .head{
        margin-bottom: 10px;  
        .w(375);
        .h(48) ;
        position: relative;
        background: #0d64ec; 
        font-size:18px;
        color:#fff;
        .lh(48);
        img{
            position: absolute;
            .left(15);
            .top(14);
          }
       }
      .slect{
          .w(375);
          .h(35);
          border-bottom: 1px solid #eee;
          font-size:18px; 
          .margin(0,0,14,0) ;
          span{
              display: inline-block;
              .padding(5,0,5,0);
             .margin(0,20,0,20);
          } 
          .span1{
              border-bottom:3px solid  #0d64ec; 
              color:#0d64ec
          }
          .span2{
              border:none; 
             
          }
        }
        .content{
          .w(375);
          .h(308);
            .change1{ 
              .w(375);
              .h(140);
              .p1{
                 img{
                     position: relative;
                     .left(20);
                     .top(5);

                 }
                  input{
                   border: 0;
                    font-size:15px;
                    color:#333; 
                    .w(260);
                    .h(48);
                   
                    .padding(0,20,0,26);
                    border-bottom: 1px solid #eee;
                  }
            }
               
          .fogit{
            margin:12px auto 0;   
           .w(305);
           .h(20) ;
           text-align:right;
           font-size:12px; 
           color:#666;
            }
          }
           .change2{ 
              .w(375);
              .h(140);
              .p1{
                position: relative;
                 img{
                     position: relative;
                     .left(20);
                     .top(5);

                 }
                 span{
                   font-size:12px;
                  border:1px solid #eee;
                   .padding(0,10,0,10) ;
                   .w(60);
                   .h(25);
                   position:absolute;
                   .right(28);
                    .top(14);
                    .lh(25);
                   background: #92b4e9;
                   border-radius:12px; 
                   color:#eee

                 }
                  input{
                   border: 0;
                    font-size:15px;
                    color:#ccc; 
                    .w(260);
                    .h(48);
                    .padding(0,20,0,26);
                    border-bottom: 1px solid #eee;
                  }
              }   
            }   
          .btn{
              .w(305);
              .h(45) ;
              .lh(45);
              color:#FFF;
              text-align: center;
               margin:0 auto ;   
             border-radius: 4px;  
             background: #92b4e9;
             font-size:19px;
              margin:70px auto 0 ;   
          }
          .noaccount{
              font-size:14px;  
              .w(305);
              .h(24) ;
              .lh(24);
              font-weight: 400px;
              color:#888;
              text-align: center;
              margin:24px auto 0 ; 
          }
        }
  }
  
}
</style>
