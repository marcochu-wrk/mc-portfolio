<template>
  <div class="grid grid-cols-2 gap-4 pr-8 scroll-pt-1.5">
    <div class="col-span-2 md:col-span-2">
      <h1 class="mb-2 text-8xl text-center mt-28">Marco Chu</h1>
      <p class="text-xl text-center text-black border-b-2 border-purple-400 pb-3 mt-10">
        Front-End Vue.js Developer <b>|</b> UX/UI Designer
      </p>
    </div>
    <div class="col-span-1 md:col-span-1 ">
      <div class="col-span-2 md:col-span-2 flex justify-left items-center ml-24">
        <div class="row-container pr-12 mt-6">
          <div class="w-7 h-7 mb-2">
            <a href="https://github.com/marcochu-wrk">
              <img src="../assets//25231.png" alt="Github">
            </a>
        </div>
          <div class="w-7 h-7 mb-2">
            <a href="https://www.linkedin.com/in/marco-chu-965263217/">
              <img src="../assets/linkedin-black-icon-logo-ECC426C572-seeklogo.com.png" alt="LinkedIn">
            </a></div>
          <div class="w-7 h-7 mb-2">
            <a href="https://bpigeon.itch.io/">
              <img src="../assets/itch-io-logo-43B308E6B7-seeklogo.com.png" alt="itch.io">
            </a>
          </div>
        </div>
     
        <img
          src="../assets/Image-1.png"
          alt="Placeholder Image"
          class="rounded-full border-4 border-purple-400 w-1/3 mt-9 md:mt-9"
        />
      </div>
    </div>
    <div class="col-span-1 md:col-span-1">
        <div class="flex justify-left items-end h-full">
           My Tech Stack
        </div>
    </div>
    <div class="col-span-2 mt-10">
      <!-- My Profile Details -->
      <plainbox heading="Who Am I?" mainBodyHeading="Bio" subheading="My Details" :myStats="myStats" :hasXP="true" :numOfCards="5" :activities="myActivities" />
    </div>
      <equalplainbox heading="My Experience"/>
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
        Age: ' 25',
        Birthday:' 02 Jan 1999',
        Home:' Hong Kong',
        Residing:' Johannesburg, South Africa',
        Languages:' English, Cantonese'
      },
      myActivities:[
        {
          title: "Origins",
          body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae lacinia neque. Sed vehicula tortor mauris, ac ultrices lectus pretium ut. Pellentesque sagittis nunc sed pharetra lobortis. Integer ornare dolor sit amet dui facilisis, nec interdum ex blandit. Fusce nec augue in ante ullamcorper interdum ac sed libero. Aliquam erat volutpat. Pellentesque egestas leo magna, sit amet luctus ex consectetur et. Nullam suscipit eu magna non consequat."
        },
        {
          title: "Education",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae lacinia neque. Sed vehicula tortor mauris, ac ultrices lectus pretium ut. Pellentesque sagittis nunc sed pharetra lobortis. Integer ornare dolor sit amet dui facilisis, nec interdum ex blandit. Fusce nec augue in ante ullamcorper interdum ac sed libero. Aliquam erat volutpat. Pellentesque egestas leo magna, sit amet luctus ex consectetur et. Nullam suscipit eu magna non consequat."
        },
        {
          title:"Goals",
          body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae lacinia neque. Sed vehicula tortor mauris, ac ultrices lectus pretium ut. Pellentesque sagittis nunc sed pharetra lobortis. Integer ornare dolor sit amet dui facilisis, nec interdum ex blandit. Fusce nec augue in ante ullamcorper interdum ac sed libero. Aliquam erat volutpat. Pellentesque egestas leo magna, sit amet luctus ex consectetur et. Nullam suscipit eu magna non consequat."
        },
        {
          title:"Interests",
          body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae lacinia neque. Sed vehicula tortor mauris, ac ultrices lectus pretium ut. Pellentesque sagittis nunc sed pharetra lobortis. Integer ornare dolor sit amet dui facilisis, nec interdum ex blandit. Fusce nec augue in ante ullamcorper interdum ac sed libero. Aliquam erat volutpat. Pellentesque egestas leo magna, sit amet luctus ex consectetur et. Nullam suscipit eu magna non consequat."
        },
        {
          title:"Current Stats",
          body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae lacinia neque. Sed vehicula tortor mauris, ac ultrices lectus pretium ut. Pellentesque sagittis nunc sed pharetra lobortis. Integer ornare dolor sit amet dui facilisis, nec interdum ex blandit. Fusce nec augue in ante ullamcorper interdum ac sed libero. Aliquam erat volutpat. Pellentesque egestas leo magna, sit amet luctus ex consectetur et. Nullam suscipit eu magna non consequat."
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
