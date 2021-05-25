<template>
  <div id="nav">
    <router-link to="/" >景點</router-link>
    <router-link to="/about">About Me</router-link>
  </div>
   
  <Footer class="Footer"></Footer>
  <router-view/>

</template>
<script>
import Footer from '@/components/Footer'

export default {
  components:{ 
    Footer
  },
  setup() {
   
  }
}
 
// }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: rgb(245, 245, 245);

}

#nav {
  background-color: #fff;
  box-shadow:1px 1px 6px rgba(0, 0, 0, 0.342);
  padding: 15px;
  text-align: right;
  z-index: 1;
  a {
    padding: 0 20px;
    font-weight: bold;
    color: #2c3e50;
    font-size: 18px;
    &.router-link-exact-active {
      color: #3f9759;
    }
  }
}




</style>
