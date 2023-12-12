<template>
    <h2 class="heading-text text-left mb-2 pb-10">{{ heading }}</h2>
    <div class=" heading-text grid grid-cols-1 md:grid-cols-5 gap-6">
        
        <div class="component-style subtext md:col-span-4 overflow-hidden relative">
            <h1 class="subheading text-left mb-6 ml-4"> {{cardHeading}} </h1>
            <div ref="cardContainer" class="flex space-x-4 ml-4 mr-4 mb-4 overflow-x-auto" @wheel.prevent = "onWheel">
                <card class="ml-4 mb-4" title="Video Games" body="Something about video games"/>
                <card class="ml-4 mb-4" title="Video Games" body="Something about video games"/>
                <card class="ml-4 mb-4" title="Video Games" body="Something about video games"/>
                <card class="ml-4 mb-4" title="Video Games" body="Something about video games"/>
                <card class="ml-4 mb-4" title="Video Games" body="Something about video games"/>
            </div>
        </div>
            <div class="component-style subtext">
                <h1 class="subheading mb-4">{{ subheading }}</h1>
                <div v-if="hasXP" class="mb-2"><xp /></div>
                <div v-for="(stat,index) in formattedStats" :key="index" class="mb-2 subtext">
                    <span class="text-green-300">{{ stat.headingText }}</span>: <span class="font-normal">{{ stat.remainingText }}</span> <br>
                </div> 
        </div>
    </div>
</template>

<script>
import xp from '../Functions/xpbar.vue'
import card from '../Functions/card.vue'
export default{
    props:['cardHeading','heading','subheading','myStats', 'maincontext','hasXP'],
    components:{
    xp,
    card
},
    computed:{
        formattedStats(){
            return Object.keys(this.myStats).map(key => {
                return{
                    headingText:key,
                    remainingText: this.myStats[key]
                }
            })
        },

        formattedmain(){
            return Object.keys(this.maincontext).map(key =>{
                return{
                    headingText:key,
                    subText: this.maincontext[key]
                }
            })
        }
    },
    methods:{
        scroll(scrollOffSet){
            const container = this.$refs.cardContainer
            container.scrollLeft += scrollOffSet
        },
        onWheel(event) {
            const container = this.$refs.cardContainer;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            if (event.deltaY !== 0) {
                container.scrollLeft += event.deltaY;
            }

            // Prevent scrolling beyond the content width
            if (container.scrollLeft < 0) {
                container.scrollLeft = 0;
            } else if (container.scrollLeft > maxScrollLeft) {
                container.scrollLeft = maxScrollLeft;
            }
        }
    }
}
</script>
