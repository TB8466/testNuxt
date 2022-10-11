<template>
    <div>
        <button v-if="!green && !transparent && !whiteAndBlue && !blackWhiteOutline && !blackTransparent"   class=" bg-primary hover:bg-white hover:text-primary border-[2px] border-primary text-white font-bold py-2 lg:px-[50px] rounded duration-300"><slot></slot></button>
        <button v-if="green"                    class=" bg-[#2cc995] hover:bg-[#05a36f] text-white font-bold py-2 lg:px-[50px] border-[2px] border-white rounded duration-300"><slot></slot></button>
        <button v-if="transparent"              class=" hover:bg-white hover:text-primary text-white font-bold py-2 lg:px-[50px] border-[2px] border-white rounded duration-300"><slot></slot></button>
        <button v-if="whiteAndBlue"             class=" bg-white hover:bg-primary hover:text-white text-primary font-bold py-2 lg:px-[50px] border-[2px] border-primary rounded duration-300"><slot></slot></button>
        <button v-if="blackWhiteOutline"        class=" bg-white hover:bg-gray-700 hover:text-white text-black font-bold py-2 lg:px-[50px] border-[2px] border-black rounded duration-300"><slot></slot></button>
        <button v-if="blackTransparent"         class=" bg-white text-black font-bold py-2 lg:px-[50px] border-[2px] border-black rounded duration-300"><slot></slot></button>
    </div>
</template>

<script>
export default {
    props:{
        green: Boolean,
        transparent: Boolean,
        whiteAndBlue : Boolean,
        blackWhiteOutline : Boolean,
        blackTransparent : Boolean,
        isCenter : Boolean
    },
    data() {
        return {
            Center : this.isCenter
        }
    },

}
</script>

<style>

</style>