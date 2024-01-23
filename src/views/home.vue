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
    <div class="relative">
      <div class="col-span-2 md:col-span-1 flex justify-center items-center relative">
        <img
          src="../assets/Image-1.png"
          alt="Placeholder Image"
          class="rounded-full border-4 border-green-500 w-3/5 mt-9 md:mt-9"
        />
      </div>
    </div>
    <div class="col-span-2 mt-10">
      <!-- My Profile Details -->
      <plainbox heading="My Profile" mainBodyHeading="Recent Activities" subheading="My Details" :myStats="myStats" :hasXP="true" :numOfCards="5" :activities="myActivities" />
    </div>
      <equalplainbox heading="Social Media"/>
  </div>
</template>

<script>
import plainbox from '../components/Info-Containers/plainbox.vue'
import equalplainbox from '../components/Info-Containers/equalplainbox.vue'
export default {
  name: 'home',
  components:{
    plainbox,
    equalplainbox
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
      },
      myActivities:[
        {
          title: "Sports",
          body:"The goal for this year was to be more active and I think I managed to achieve that to a degree. I started going to weekly pick-up basketball with some old mates. I also tried paddle, pool and bowling which I am not too great at but the company I have was great which made it really fun."
        },
        {
          title: "Games",
          body: "This year I have diversified the games I played by a bit. I have started getting into more boardgames and have even started going to a weekly boardgames night with friends as often as I can. In terms of video games, I am still trying to finish Baldurs Gate which has taken up more time than I am willing to admit."
        },
        {
          title:"Reading",
          body:"Aside from increasing my visual novel collection I started reading The Wheel of Time series and so far have been enjoying the narrative so far. I have also tried my hand at writing but I can most certainly say that I am a novice story writer at best."
        },
        {
          title:"Traveling",
          body:"Traveling has been a huge highlight this year, I went to Spain for the first time and tested my Spanish for the first time, the locals definitely had a good laugh. Then visited some friends in the UK which is always an amazing experience."
        },
        {
          title:"Goals",
          body:"This year I aimed to get better at creating a solid routine for myself. The first was to go to gym regularly which I am proud to say I have been going for 3 months straight now. I also dedicated myself to improving my programming ability which I hope is reflecting here."
        }
      ]
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
