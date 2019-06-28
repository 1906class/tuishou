<template>
  <div class="debt">
    <div class="header">
      <span class="back">&lt;</span>
      <span class="tit">债权转让</span>
    </div>
    <div class="search-box-wrap">
      <div class="search-box">
        <span class="icon"></span>
        <input type="text" placeholder="请输入平台名称">
      </div>
    </div>
    <div class="like-list">
      <ul>
        <li>最新</li>
        <li>
          <p>折扣金</p> 
          <span>
            <i>&lt;</i>
            <i>&gt;</i>
          </span>
        </li>
        <li>
          <p>折扣</p>
          <span>
            <i>&lt;</i>
            <i>&gt;</i>
          </span>
        </li>
        <li>筛选</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
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
    }
  }
}
</style>

