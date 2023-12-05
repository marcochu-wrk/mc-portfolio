<template>
    <div class="fixed top-0 left-0 h-screen w-24 m-0 flex flex-col bg-primary text-secondary shadow-lg">
        <SideBarIcons icon="home"/>
        <SideBarIcons icon="code"/>
        <SideBarIcons icon="calendar"/>
        <SideBarIcons icon="camera"/>
        <SideBarIcons icon="game"/>
    </div>
</template>

<script>
import SideBarIcons from '../components/SideBar/SideBarIcons.vue'

export default{
    components:{
        SideBarIcons
    }
}
</script>
