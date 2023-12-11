<template>
    <div class="fixed top-0 left-0 h-screen w-24 m-0 flex flex-col bg-primary text-secondary shadow-lg  border-yellow-400 border-r-4 border-solid">
        <div v-for="page in pages" key="page.id">
            <SideBarIcons :icon="page.icon" :pageData="page" />
        </div>
    </div>
</template>

<script>
import SideBarIcons from './SideBarIcons.vue'

export default{

    data(){
        return{
            pages:[]
        }
    },
    components:{
        SideBarIcons
    },
    mounted(){
        fetch('http://localhost:3000/pages')
        .then(res => res.json())
        .then(data => this.pages = data)
        .catch(err => console.log(err.message))
    }
}
</script>
