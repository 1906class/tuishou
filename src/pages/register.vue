<template>
<div class='register'>
       <p class="head">
          <img src="/1.png" @click="back"> 
           注册
        </p>
        <div class="content">
            <p class="p1"><img src="/fs1.png"><input type="text"  placeholder="请输入手机号" v-model='value1'><span>获取验证码</span></p>
            <p class="p1"><img src="/rg3.jpg"><input type="text"  placeholder="请输入验证码6867"></p>
            <p class="p1"><img src="/rg2.jpg"><input type="password"  placeholder="请输入新密码(6-16)数字字母组合" v-model='value2'></p>
            <p class="p1"><img src="/rg2.jpg"><input type="password"  placeholder="请确认新密码"></p>    
        </div>  
       <p class="btn" @click="get">注册并登录</p>
       <div class="agreement">
          <div class="tu"><img src="/dui.jpg"></div>
          <div class="section">
             <p> 
                 我已阅读并同意以下协议，接收免除或限制责任，诉讼管辖约定等条款，愿意同步创建账户
            </p>
             <p class="blue">
               《推手服务协议》《账户管理协议》《推手风险提示与免责声明》
             </p>
         </div>
      
       </div>

</div>
</template>
<script>
import {MessageBox} from 'mint-ui'
export default {
 data(){
  return {
    value1:"",
    value2:"",
  }
 },
  methods:{
      back(){
          this.$router.go(-1);
      },


      get(){
        var user=this.value1;
        var password=this.value2;
        console.log(user,password);
        var phone=/^1[3|4|5|7|8][0-9]\d{8}$/;
          if(phone.test(user)){
          
          if(!localStorage.getItem('data1')){
           localStorage.setItem("data1",JSON.stringify([{id:user,num:password}]));
           this.$router.push({path:'/my'})
            }else{
              var obj = JSON.parse(localStorage.getItem('data1'));
               var bStop = true;
                for(var i=0;i<obj.length;i++){
                    if(obj[i].id == user){
                        bStop = false;
                      MessageBox.alert('用户已存在,请登录','提示');
                      this.$router.push({path:'/my/login'});
                      break 
                    }
                    
                }
                if(bStop){
                   obj.push({id:user,num:password});
                    localStorage.setItem("data1",JSON.stringify(obj));
                    this.$router.push({path:'/my'})
                 }           
            }
           
           }else{
       
           MessageBox.alert('手机号格式不正确','提示');
           }
        }
  },
 

}
</script>
<style lang="less" scope>
@import '~style/index.less';
.register{
      position: fixed;
      .top(0);
      bottom:0;
      .w(375);
      z-index: 1;
      font-size:14px;
      background: #fff;
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
       .content{ 
              .w(375);
              .h(330);
              
              .p1{
                position: relative;
                
                
                 img{
                     position: relative;
                     .left(20);
                     .top(0);
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
                   color:#eee; 
                  }
                  input{
                   border: 0;
                    font-size:12px;
                    color:#333; 
                    .w(260);
                    .h(48);
                    .padding(0,20,0,26);
                    border-bottom: 1px solid #eee;
                    margin-bottom: 20px; 
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
             background: #0d64ec; 
             font-size:19px;
              margin:-40px auto 0 ;   
          }
     .agreement{
        overflow: hidden;
        text-align:left;  
       .w(305);
       .h(78);
       margin:20px auto 0;
       font-size:12px;
       color:#999;
       .blue{
           color: #0d64ec; ;
       }
       .section{
        .w(278);
        .h(78);
        float: right;  
       }
       .tu{
         .w(20);
          float: left;   
       }
     }
      
 }
       
</style>
