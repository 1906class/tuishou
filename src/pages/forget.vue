<template>
<div class='forget'>
       <p class="head">
          <img src="/1.png" @click="back"> 
           找回密码
        </p>
        <div class="content">
            <p class="p1"><img src="/fs1.png"><input type="text"  placeholder="请输入手机号"><span>获取验证码</span></p>
            <p class="p1"><img src="/rg3.jpg"><input type="text"  placeholder="请输入6位短信验证码"></p>
            <p class="p1"><img src="/rg2.jpg"><input type="text"  placeholder="请输入新密码(6-16)数字字母组合"></p>
            <p class="p1"><img src="/rg2.jpg"><input type="password"  placeholder="请确认新密码"></p>    
        </div>  
       <p class="btn">确 定</p>

</div>
</template>
<script>
export default {
  methods:{
      back(){
          this.$router.go(-1);
      }
  }
}
</script>
<style lang="less" scope>
@import '~style/index.less';
.forget{
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
                    color:#ccc; 
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
             background: #92b4e9;
             font-size:19px;
              margin:-40px auto 0 ;   
          }    
       }
       
</style>
