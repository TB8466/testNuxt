<template>
  <div>
    <div class="flex p-2 rounded hover:bg-gray-100">
      <label for="default-toggle-1" class="inline-flex relative items-center w-full cursor-pointer">
          <input type="checkbox" name="DKK_kWh" value="false" v-model="DKK_kWh" id="default-toggle-1" class="sr-only peer">
          <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{DKK_kWh}}</span>
      </label>
    </div>
    <div></div>

    

  </div>
</template>

<script>
export default {
  props: {
    value:{
      type: Boolean,
      default: false
    } 
  }

}
</script>

<style>

</style>