<template>
<div class="col-span-2">
    <h2 class="heading-text text-left mb-2 pb-10">{{ heading }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="component-style subtext p-4">To Be Completed</div>
        <div class="component-style subtext p-4">To Be Completed</div>
        <div class="component-style subtext p-4">To Be Completed</div>
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
