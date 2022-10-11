<template>
  <section class="lg:px-[33px] py-5">
    <p v-if="hasHeader" class="pb-10 text-3xl">
      <slot name="header"></slot>
    </p>
    <div class="text-left leading-[1.9em]" :class="{'lg:px-[10%]' : isWide, 'lg:px-[20%]' : !isWide, 'lg:px-[2%]' : noPading}">
        <div v-if="this.$slots.col1" class="lg:inline-block align-top lg:px-[33px]" :class="{'lg:w-1/2' : colAmount===2, 'lg:w-1/3' : colAmount===3, 'lg:w-1/4' : colAmount===4}">
            <slot name="col1"></slot>
        </div>
        <div v-if="this.$slots.col2" class="lg:inline-block align-top lg:px-[33px]" :class="{'lg:w-1/2' : colAmount===2, 'lg:w-1/3' : colAmount===3, 'lg:w-1/4' : colAmount===4}">
            <slot name="col2"></slot>
        </div>
        <div v-if="this.$slots.col3" class="lg:inline-block align-top lg:px-[33px]" :class="{'lg:w-1/2' : colAmount===2, 'lg:w-1/3' : colAmount===3, 'lg:w-1/4' : colAmount===4}">
            <slot name="col3"></slot>
        </div>
        <div v-if="this.$slots.col4" class="lg:inline-block align-top lg:px-[33px]" :class="{'lg:w-1/2' : colAmount===2, 'lg:w-1/3' : colAmount===3, 'lg:w-1/4' : colAmount===4}">
            <slot name="col4"></slot>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  props : {
    wide : Boolean,
    nopading : Boolean
  },
  data () {
    return {
      isWide : this.wide,
      noPading : this.nopading
    }
  },
  computed : {
    hasHeader() {
      return !!this.$slots.header; 
    },
    colAmount() {
      const amount = []
      if(!!this.$slots.col1){
      amount.push(this.$slots.col1)
      }
      if(!!this.$slots.col2){
      amount.push(this.$slots.col2)
      }
      if(!!this.$slots.col3){
      amount.push(this.$slots.col3)
      }
      if(!!this.$slots.col4){
      amount.push(this.$slots.col4)
    }
      return amount.length
    }
  }

}
</script>

<style>
</style>