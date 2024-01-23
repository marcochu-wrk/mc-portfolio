<template>
<div class="col-span-2">
    <h2 class="text-2xl font-bold mb-2">{{ heading }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="component-style subtext p-4"></div>
        <div class="component-style subtext p-4"></div>
        <div class="component-style subtext p-4"></div>
    </div>
</div>
</template>

<script>
export default{
    props:{
        heading: String
    }
}
</script>
