<template>
  <div class="grid grid-cols-4 md:grid-cols-8 gap-1">
    <div class="col-span-1 md:col-span-1">
      <NavBar/>
    </div>
  <div class="col-span-7 md:col-span-7 md:ml-1">
    <router-view/>
  </div>
  
</div>
</template>

<script>
import NavBar from './components/SideBar/navbar.vue'

export default{
  components:{
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Ubuntu;
  font-weight: normal;
  text-align: center;
  color: #98FB98;
}

body{
  background: #4f545c;
}
</style>
