<template>
  <div class="grid grid-cols-2 gap-4 p-8 pt-10">
    <div class="col-span-3 md:col-span-1">
      <h1 class="mb-10 heading-text">Welcome to my portfolio!</h1>
      <p class="text-lg subtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat,
        lorem eu ullamcorper vestibulum, lectus ex fermentum turpis, ac luctus
        velit tellus in purus.
      </p>
    </div>

    <div class="col-span-2 md:col-span-1 flex justify-center items-center">
      <img
        src="https://via.placeholder.com/400"
        alt="Placeholder Image"
        class="rounded-lg shadow-lg"
      />
    </div>

    <div class="col-span-2 mt-6">
      <plainbox heading="Summary" />
    </div>

    <div class="col-span-2">
      <h2 class="text-2xl font-bold mb-2">Latest News</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="component-style subtext p-4">News 1</div>
        <div class="component-style subtext p-4">News 2</div>
        <div class="component-style subtext p-4">News 3</div>
      </div>
    </div>
  </div>
  <!-- <div class="home">
    <h1>Home Page</h1>

    <div v-for="home in homes" :key="home.id">
      <p>{{ home.title }}</p>
    </div>
  </div> -->
</template>

<script>
import plainbox from '../components/Info-Containers/plainbox.vue'
export default {
  name: 'home',
  components:{
    plainbox
  },
  data(){
    return{
      homes:[]
    }
  },
  mounted(){
    fetch('http://localhost:3000/homePage')
      .then(res => res.json())
      .then(data => this.homes = data)
      .catch(err => console.log(err.message))
  }
}
</script>
