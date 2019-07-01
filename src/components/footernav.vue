<template>
    <div >
        <ul class="footernav">
              <router-link active-class="sel" tag="li"  to="/shouye"><i class="iconfont">&#xe61b;</i><p>首页</p></router-link>
              <router-link active-class="sel" tag="li"  to="/debt"><i class="iconfont ">&#xe621;</i><p>债转</p></router-link>
              <router-link active-class="sel" tag="li"  to="/my"><i class="iconfont ">&#xe66e;</i><p>我的</p></router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{ 
             sel:1
             }
    },
    methods:{
      changecolor(){
       
      }
    }
}
</script>
<style lang="less" scoped>
 @import "~style/index.less";
 @import  "~pages/font/iconfont.css";
 .footernav{
     .w(375);
     .h(50);
     li{
         .w(125);
         .h(50);
         float: left;
         text-align:center;
         
        .iconfont {
       font-family: "iconfont" !important;
       font-size: 20px;
       font-style: normal;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       display: block;
       line-height:30px;
        }  
        p{
        font-size:10px;
        color:#ccc;
        }
     }
   .sel{
      i{
          color:#84aff5
      };
      p{
          color:#84aff5 
      }
   }
 }
</style>
