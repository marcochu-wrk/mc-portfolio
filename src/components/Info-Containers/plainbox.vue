<template>
    <h2 class="heading-text mb-2 pb-10">{{ heading }}</h2>
    <div class=" heading-text grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="component-style subtext md:col-span-2">Item 1</div>
        <div class="component-style subtext">{{ myStats.age }}</div>
        </div>
</template>

<script>
export default{
    props:['heading','myStats']
}
</script>
