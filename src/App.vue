<template>
  <div id="app">
   
     <fnav class="fnav"></fnav>
   <router-view></router-view>
  </div>
</template>
<script>
 import  fnav from './components/footernav'
export default {
  name: 'app',
  components: {
   fnav,
  }
}

</script>

<style lang="less" scoped>
@import '~style/index.less';
   #app{
    .w(375);
    position:fixed;
    top:0;
    bottom:0;
    .fnav{
      position: absolute;
      bottom:0
    }
  }
</style>
