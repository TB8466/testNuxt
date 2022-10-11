<template>
    <div class="mt-5 ">
        <button class=" fixed left-[80%]" @click="collapse(this.$refs.content)">   
            <slot name="collapse-header"><img class="w-1/3 m-auto" src="../assets/img/menuIcon.png" alt="Se Menu"></slot>
        </button>
        <div :style="{maxHeight : null}" ref="content" class="content-container bg-white relative">
            <slot name="collapse-content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        collapse(content){
            if (content.style.maxHeight) {
              content.style.maxHeight = null
            } else {
              content.style.maxHeight = content.scrollHeight+"px"
            } 
          }
    },
}
</script>

<style scoped>
    .content-container {
        max-height: 0;
        overflow: hidden;
        transition: max-height 1s ease-out;
    }
</style>