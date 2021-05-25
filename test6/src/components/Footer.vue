<template>
  <div class="footer">
    <p>使用版本 Vue3 cli4.5 Composition API  與 連結政府開放資料庫</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .footer{
    text-align: center;
    z-index: 1;
    box-shadow:1px 1px 6px rgba(0, 0, 0, 0.342);
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
  }
</style>
