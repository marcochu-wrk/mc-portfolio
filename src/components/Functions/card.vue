<template>
    <div class="flex">
        <div class="card-template" @mouseover="isHover = true" @mouseleave="isHover = false">
            <div class="p-4">
                <h2 class=" subheading mb-2">{{ title }}</h2>
                <p class="subtext text-center" >{{ body }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['title', 'body', 'img'],
    data() {
        return {
        isHover: false,
        }
    }
}
</script>
