<template>
  <div class="grid grid-cols-2 gap-4 pr-8 pt-10">
    <div class="col-span-2 md:col-span-1">
      <h1 class="mb-2 heading-text text-left text-5xl">Marco Chu</h1>
      <p class="text-xl text-left text-white border-b-2 border-green-400 pb-3">
        Front-End Web Developer | Unity Developer | Graphic Designer
      </p>
      <p class="subtext mt-6">
        Welcome to my portfolio! Here I describe my hobbies, experience and general projects I do from time to time. To give you a quick
        summary, I studied and recieved my National Senior Certificate in 2016 at Saheti. I then went on to study at the University of Witwaterstrand where
        I received a Bachelors of Arts in Digital Arts in 2021.<br> <br>
        Within the same year I started my career as a game 
        developer where I worked on VR simulations for the Boiler Room. I then moved into web development in 2022 with QwidPro where I am now working as a front-end developer whilst 
        honing my skills in the Vue.js and Laravel framework. <br><br>
        To sum myself up, I am passionate in the technological field and am always interested in finding unique and interesting ways to improve the projects I work on.
        I am always open to critcism and try my best to make sure that the work I put out are to the best of my capabilities.
      </p>
    </div>

    <div class="col-span-2 md:col-span-1 flex justify-center items-center mt-10">
      <img
        src="https://via.placeholder.com/400"
        alt="Placeholder Image"
        class="rounded-lg shadow-lg"
      />
    </div>

    <div class="col-span-2 mt-10">
      <plainbox cardHeading="Hobbies" heading="Overview" subheading="My Details" :myStats="myStats" :hasXP="true" />
    </div>

    <div class="col-span-2">
      <h2 class="text-2xl font-bold mb-2">Social Media</h2>
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
      homes:[],
      myStats:{
        Age: ' 24',
        Birthday:' 02 Jan 1999',
        Home:' Hong Kong',
        Residing:' Johannesburg, South Africa',
        Languages:' English, Cantonese'
      }
    }
  },
  mounted(){
    fetch('http://localhost:3000/home-page')
      .then(res => res.json())
      .then(data => this.homes = data)
      .catch(err => console.log(err.message))
  }
}
</script>
