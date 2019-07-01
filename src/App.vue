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
   #app{
    width:375px;
    position:fixed;
    top:0;
    bottom:0;
  .fnav{
    position: absolute;
    bottom:0
  }
  }
</style>
