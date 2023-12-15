<template>
   
    <div class="modal">
        <div class="modal-content">
            <p class="text-black text-xl font-bold">{{ ErrorMessage }}</p>
        </div>
    </div>
    
</template>
<script>
export default{
  props:['ErrorMessage']
}
</script>
<style>
.modal {
  display: block; /* Initially hidden */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  overflow: auto;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
</style>