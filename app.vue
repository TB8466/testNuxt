<template>
  <div class="w-fit xs:w-full">
    <NavBar/>

    <NuxtPage/>
    <FooterBarv2/>
  </div>
</template>

<script setup>
  useHead({
  title: ' 1234567890',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8'
})

</script>

<style>
    
</style>