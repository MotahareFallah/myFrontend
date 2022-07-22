<template>
<Navbar/>
<div class="container">
<router-view />
</div>

</template>


<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  watch:{
    $rout(){
      this.$store.commit("onStart")
    }
  },
  mounted(){
    this.$store.commit("onStart")

  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

#nav a{
  font-weight: bold;
  color: #3795c0;
}
#nav a:hover{
  color: rgb(3, 64, 73);
}

.navbar-brand{
  color: #2c3e50 !important;
}

nav a.router-link-exact-active {
  color: #3a6b74;
}
</style>
