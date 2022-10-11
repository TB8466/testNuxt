<template>
    <button @click="collapse(this.$refs.content); this.expand = !this.expand" class="p-5 border-solid border-[#d9d9d9] border-[1px] relative sm:w-80 lg:w-full text-left">
      
        <div class="inline-block align-top w-[89%]">
            <slot name="collapse-header"></slot>
        </div>
      
            <!--Use ONLY if you want to override the default "+ -" symbols-->
            <slot name="collapse-icon">
                    <div class="inline-block align-top w-[9%]">
                        <div class="w-fit">
                            <h1 v-if="expand"   class="text-[#ffffff] bg-primary rounded-full text-center leading-6 w-[24px] h-[24px]">+</h1>
                            <h1 v-else          class="text-[#ffffff] bg-primary rounded-full text-center leading-6 w-[24px] h-[24px]">-</h1>
                        </div>
                    </div>
            </slot>
    <div :style="{maxHeight : null}" ref="content" class="content-container" >
        <slot name="collapse-content"></slot>
    </div>
</button>
</template>

<script>
export default {
    props : {
    },
    data() {
        return{
            expand: true,
        }      
    },
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