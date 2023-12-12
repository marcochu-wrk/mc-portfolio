<template>
    <div class="loading-bar rounded-lg bg-gray-900 mb-1">
        <div class="progress bg-yellow-300" :style="{ width: `${loadingProgress}%` }"></div>
    </div>
    <div class="text-sm">exp {{ currentDay }} / {{ numDaysInYear }}</div>
</template>

<script>
export default{
    data(){
        return{
            currentDate: new Date()
        }
    },
    computed:{
        loadingProgress() {
            const startOfYear = new Date(this.currentDate.getFullYear(), 0, 1);
            const currentDayOfYear = Math.floor(
                (this.currentDate - startOfYear) / (1000 * 60 * 60 * 24)
            ) + 1;
            
            const totalDaysInYear = Math.floor((new Date(this.currentDate.getFullYear() + 1, 0, 1) - startOfYear) / (1000 * 60 * 60 * 24));

            return (currentDayOfYear / totalDaysInYear) * 100;
    },
    currentDay(){
        const startOfYear = new Date(this.currentDate.getFullYear(), 0, 1);
        const currentDayOfYear = Math.floor(
                (this.currentDate - startOfYear) / (1000 * 60 * 60 * 24)
            ) + 1;
        return currentDayOfYear
    },
    numDaysInYear(){
        const startOfYear = new Date(this.currentDate.getFullYear(), 0, 1);
        const totalDaysInYear = Math.floor((new Date(this.currentDate.getFullYear() + 1, 0, 1) - startOfYear) / (1000 * 60 * 60 * 24));
        return totalDaysInYear
    }
    }
}
</script>

<style>
.loading-bar{
    width: 100%;
    height: 0.2rem;
}

.progress{
    height: 100%;
}
</style>