<template>
    <h2 class="heading-text text-left mb-2 pb-10">{{ heading }}</h2>
    <div class=" heading-text grid grid-cols-1 md:grid-cols-5 gap-6">
        
        <div class="component-style subtext md:col-span-4"></div>
            <div class="component-style subtext">
                <h1 class="subheading mb-4">{{ subheading }}</h1>
                <div v-for="(stat,index) in formattedStats" :key="index" class="mb-2 subtext">
                    <span class="text-green-300">{{ stat.headingText }}</span>: <span class="font-normal">{{ stat.remainingText }}</span> <br>
                </div> 
        </div>
    </div>
</template>

<script>
export default{
    props:['heading','subheading','myStats', 'maincontext'],
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
    }
}
</script>
