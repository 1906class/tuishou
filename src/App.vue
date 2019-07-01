<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="less" scoped>
@import '~style/index.less';
#app{
  background: @bg-color-black2;
  position: fixed;
  .top(0);
  .bottom(0);
}
#nav{
  position: fixed;
  .bottom(0);
  .h(48);
  background: red;
  .w(375);
}
</style>
