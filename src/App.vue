<template>
  <topbox headingLeft1="marcochuwrk@gmail.com"/>
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
import topbox from './components/Info-Containers/topbox.vue'
export default{
  components:{
    NavBar,
    topbox
  }
}
</script>

<style>
#app {
  font-family: Ubuntu;
  font-weight: normal;
  text-align: center;
}

body{
  background: #ffffff;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgb(35, 35, 35);
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-button {
  display: none;
}

</style>
