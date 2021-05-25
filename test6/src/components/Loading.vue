<template>
  <div class="loading">
    <p>資料讀取中..請稍後</p>
  </div>
  
</template>

<script>
export default {
  name: 'Loading' // 定义的组件名称 使用时写法：loading
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loading {
  p{
    width: 100px;
    margin: auto;
    position: absolute;
    top: 48%;
    left: calc(50% - 50px);
  }
  position: fixed;
  left: 0;
  top: 0;
  background: url('~@/assets/Loading-Ora.gif') center center no-repeat #fff;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
</style>
