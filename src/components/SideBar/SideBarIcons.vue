<template>

    <router-link :to="{name:pageData.pageName}">
        <div class="sidebar-icon group"> 
            <component :is="selectedIcon" class="h-8 w-8"/>
            <span class="sidebar-tooltip group-hover:scale-100">
                {{ selectedToolTip }}
            </span>      
        </div>
    </router-link>
    
</template>

<script>
import {BIconCamera2, BIconCalendar3RangeFill, BIconController, BIconHouseDoorFill,
BIconFileEarmarkCodeFill} from 'bootstrap-icons-vue';

export default{
    props:{
        icon: String,
        tooltip:{
            type:String,
            default:'text'
        },
        pageData: Object
    },
    components:{
        BIconCamera2,
        BIconCalendar3RangeFill,
        BIconController,
        BIconHouseDoorFill,
        BIconFileEarmarkCodeFill
    },
    computed:{
        selectedIcon(){
            switch(this.icon){
                case'camera':
                    return 'BIconCamera2';
                case 'calendar':
                    return 'BIconCalendar3RangeFill';
                case 'game':
                    return 'BIconController';
                case 'home':
                    return 'BIconHouseDoorFill';
                case 'code':
                    return 'BIconFileEarmarkCodeFill';
                default:
                    return 'div';
            }
        },
        selectedToolTip(){
            switch(this.icon){
                case'camera':
                    return 'Photo Album';
                case 'calendar':
                    return 'Timeline';
                case 'game':
                    return 'Games';
                case 'home':
                    return 'Home Page';
                case 'code':
                    return 'Projects';
                default:
                    return 'div';
            }
        }
    },
    method:{
        findRoute(){
            // get list of pages from db
            //check icon id
        }
    }
}
</script>