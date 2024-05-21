<template>
  <div class="grid grid-cols-2 gap-4 pr-8 scroll-pt-1.5">
    <div class="col-span-2 md:col-span-1">
      <h1 class="mb-2 text-8xl text-center mt-28">Marco Chu</h1>
      <p class="text-xl text-center text-white border-b-2 border-green-400 pb-3 mt-10">
        Front-End Vue.js Developer | Unity Developer | UX/UI Designer
      </p>
    </div>
    <div>
      <div class="col-span-2 md:col-span-1 flex justify-center items-center">
        <img
          src="../assets/Image-1.png"
          alt="Placeholder Image"
          class="rounded-full border-4 border-green-300 w-3/5 mt-9 md:mt-9"
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
