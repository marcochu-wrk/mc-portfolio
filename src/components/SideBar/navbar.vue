<template>
    <div class="fixed top-0 left-0 h-screen w-24 m-0 flex flex-col bg-primary text-secondary shadow-lg  border-yellow-400 border-r-4 border-solid">
        <div v-for="page in pages" key="page.id">
            <SideBarIcons :icon="page.icon" :pageData="page" />
        </div>
    </div>
   <div v-if="isErr" @click="clickable">
        <ErrorModal ErrorMessage="Data has not been fetched from server. Please run npx json-server --watch data/db.json in the console."/>
    </div>
    
</template>

<script>
import SideBarIcons from './SideBarIcons.vue'
import ErrorModal from '../Functions/errormodal.vue'
export default{

    data(){
        return{
            pages:[],
            isErr: false
        }
    },
    components:{
        SideBarIcons,
        ErrorModal
    },
    methods:{
        clickable(){
            this.isErr =  false
            console.log('Clicked')
        }
    },
    mounted(){
        fetch('http://localhost:3000/pages')
        .then(res => res.json())
        .then(data => this.pages = data)
        .catch(
            err => 
            {console.log(err.message)
            this.isErr = true})
    }
}
</script>
