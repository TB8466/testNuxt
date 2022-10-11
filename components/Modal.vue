<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <span
        @click="isOpen = true">
        <slot name="openModal" class="text-primary"></slot>
      </span>

      <div v-show="isOpen" class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 overflow-y-auto ">
        <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            
            <h3 class="text-2xl" :class="{'text-left pl-3' :headerLeft}">
              <slot name="header"></slot>
            </h3>

          </div>
          <div class="mt-[180%]">
            
            <p class="mb-4 text-sm" :class="{'text-left pl-3' :bodyLeft}">
              <slot name="body"></slot>
            </p>
            <CalculatorButton> <p @click="isOpen = false"> Ok</p></CalculatorButton>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    props: {
        isBodyleft: Boolean,
        isHeaderleft: Boolean,

    },
    data() {
        return {
            isOpen: false,
            bodyLeft: this.isBodyleft,
            headerLeft: this.isHeaderleft
        };
    },
  
};
</script>

<style>

</style>