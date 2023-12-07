<template>
  <div class="grid grid-cols-2 gap-4 p-2">
    <div class="col-span-2 md:col-span-1">
      <h1 class="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p class="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat,
        lorem eu ullamcorper vestibulum, lectus ex fermentum turpis, ac luctus
        velit tellus in purus.
      </p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <img
        src="https://via.placeholder.com/400"
        alt="Placeholder Image"
        class="rounded-lg shadow-lg"
      />
    </div>

    <div class="col-span-2">
      <h2 class="text-2xl font-bold mb-2">Featured Items</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Replace this with your featured items -->
        <div class="bg-gray-200 rounded-lg p-4">Item 1</div>
        <div class="bg-gray-200 rounded-lg p-4">Item 2</div>
        <div class="bg-gray-200 rounded-lg p-4">Item 3</div>
        <div class="bg-gray-200 rounded-lg p-4">Item 4</div>
      </div>
    </div>

    <div class="col-span-2">
      <h2 class="text-2xl font-bold mb-2">Latest News</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Replace this with your latest news articles -->
        <div class="bg-gray-300 rounded-lg p-4">News 1</div>
        <div class="bg-gray-300 rounded-lg p-4">News 2</div>
        <div class="bg-gray-300 rounded-lg p-4">News 3</div>
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
export default {
  name: 'home',

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
