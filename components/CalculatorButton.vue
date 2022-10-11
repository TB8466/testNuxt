<template>
    <div>
    <div v-if="!blackTransparent && !send && !back" class="w-[50%] m-auto bg-primary hover:bg-white hover:text-primary border-[2px] border-primary text-white font-bold py-2 lg:px-[50px] rounded duration-300 cursor-pointer  ">
      <slot></slot>
    </div>
    <div v-if="blackTransparent" class=" w-[50%] m-auto bg-white text-black font-bold py-2 lg:px-[50px] border-[2px] border-black rounded duration-300 cursor-not-allowed ">
      <slot></slot>
    </div>
    <div v-if="send" class="w-[50%] m-auto bg-primary hover:bg-white hover:text-primary border-[2px] border-primary text-white font-bold py-2 lg:px-[50px] rounded duration-300 cursor-pointer  ">
        <button><slot></slot></button>
    </div>
    <div v-if="back" class=" text-primary text-xl cursor-pointer">
      <slot></slot>
    </div>
    </div>
  
</template>

<script>
export default {
    props:{
        blackTransparent : Boolean,
        send : Boolean,
        back : Boolean
    }

}
</script>

<style>

</style>