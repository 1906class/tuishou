<template>
  <div class="debt">
    <div class="header">
      <span class="back" @click="$router.go(-1)">&lt;</span>
      <span class="tit">债权转让</span>
    </div>
    <div class="search-box-wrap">
      <div class="search-box">
        <span class="icon"></span>
        <input type="text" placeholder="请输入平台名称" v-model="content">
      </div>
    </div>
    <div class="like-list">
      <ul>
        <li @click="play('news')" :class='state=="news"?"self":""'>最新</li>
        <li @click="play('sort')" :class='state=="sort"?"self":""'>
          <p>折扣金</p> 
          <span>
            <!-- <i>&lt;</i> -->
            <!-- <i>&gt;</i> -->
          </span>
        </li>
        <li @click="play('order')" :class='state=="order"?"self":""'>
          <p>折扣</p>
          <span>
            <!-- <i>&lt;</i> -->
            <!-- <i>&gt;</i> -->
          </span>
        </li>
        <li @click="toggle">筛选</li>
      </ul>
    </div>
    <!-- <DebtNav></DebtNav> --> 
    <!-- <router-view></router-view> -->
    <DebtDetail :list='lists'></DebtDetail>
    <Filtrate v-if="show" :close='toggle'></Filtrate>
  </div>
</template>

<script>
import Axios from 'axios';
import DebtDetail from 'components/debtDetail';
import Filtrate from 'components/filtrate';
export default {
  components:{
    DebtDetail,
    Filtrate
  },
  data(){
    return{
      lists:[],
      mid:'news',
      state:'news',
      show:false,
      content:''
    }
  },
  computed:{
    searchData(){
      var content = this.content;
      Axios.get('http://ts.365cf.com/api/creditor/sell/list?from=0&limit=6&callback=&search='+content)
      .then((res)=>{
        console.log("search",res)
      })
    }
  },
  methods:{
    toggle(){
      this.show = !this.show;
      
    },
    play(str){
      this.state = str;
      console.log(str)
      this.initList(str);
      this.mid = str;
    },
    // search(){
    //   Axios.get('http://ts.365cf.com/api/creditor/sell/list?from=0&limit=6&callback=&search='+content)
    //   .then((res)=>{
    //     console.log("search",res)
    //   })
    // },
    initList(n){ 
      
      if(n=="news"){
          Axios.get('http://ts.365cf.com/api/creditor/sell/list?from=0&limit=18&callback=')
          .then((res)=>{
          console.log(res.data.data.list);
          this.getListData(res.data.data.list)
          })
      }
      if(n=="sort"){
          Axios.get('http://ts.365cf.com/api/creditor/sell/list?from=0&limit=6&callback=&sort=1&order=1')
          .then((res)=>{
          console.log(res.data.data.list);
          this.getListData(res.data.data.list)
          })
      }
      if(n=="order"){
          Axios.get('http://ts.365cf.com/api/creditor/sell/list?from=0&limit=6&callback=&sort=1&order=2')
          .then((res)=>{
          console.log(res.data.data.list);
          this.getListData(res.data.data.list)
          })
      }
        
    },
    getListData(data){
        for (let index = 0; index < data.length; index++) {
            if(data[index].status==3){
                data[index].stt = "可承接";
                data[index].sttbg ='http://ts.365cf.com/static/image/bg1.png'
            }else if(data[index].status==4){
                data[index].stt = "锁定中";
                data[index].sttbg ='http://ts.365cf.com/static/image/bg2.png'
            }else{
                data[index].stt = "已转让";
                data[index].sttbg ='http://ts.365cf.com/static/image/bg3.png'
            } 
        }
        this.lists = data;
    }
  },
  mounted(){
    this.initList(this.mid);
  }
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
.debt{
  position: fixed;
  .top(0);
  .bottom(48);
  background: @bg-color-white;
  .header{
    .h(48);
    .w(375);
    .fontSize(18);
    color:@font-color-black3;
    display: flex;
    text-align: center;
    .l_h(48);
    .back{
      .w(40);
      .h(48);
      font-family: "宋体";
      font-weight: bold;
    }
    .tit{
      .h(48);
      .w(295);
    }
  }
  .search-box-wrap{
    .w(375);
    .h(60);
    .padding(13,0,0,0);
    background:@bg-color-gray;
    .search-box{
      .h(40);
      .padding(0,22,0,22);
      display: flex;
      align-items: center;
      .icon{
        .w(36);
        .h(34);
        background: url('../../search.png');
      }
      input{
        .h(34);
        .padding(0,0,0,5);
        flex: 1;
        border: none;
        outline: none;
        color: @font-color-black3;
      }
    }
  }
  .like-list{
    .w(375);
    .h(44);
    .padding(0,15,0,15);
    ul{
      display:flex;
      justify-content: space-between;
      text-align: center;
      li{
        .h(44);
        .l_h(44);
        color: @font-color-black9;
        .fontSize(16);
        display: flex;
        span{
          .h(44);
          display: flex;
          flex-direction: column;
          justify-content: center;
          i{
            .h(12);
            .l_h(12);
          }
        }
      }
      .self{
        color: @font-color-black3;
      }
    }
  }
}
</style>

