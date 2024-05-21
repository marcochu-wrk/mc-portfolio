<template>
    <div class="sticky top-0  flex justify-between items-center bg-gray-900">
        <div>{{ headingRight }}</div>
            <div class="flex items-center mr-6 mt-2 mb-2">
                <div>{{ headingLeft1 }}</div>
                <div class="ml-4">{{ headingLeft2 }}</div>
        </div>
  </div>
</template>

<script>
export default{
    props:['headingRight', 'headingLeft1', 'headingLeft2']
}
</script>