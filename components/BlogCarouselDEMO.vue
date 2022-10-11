<template>
    <carousel :items-to-show="3" :autoplay="2000" :wrapAround="true" :transition="2000">
      <slide v-for="slide in slides" :key="slide">
     
        <NuxtLink to="SunpowerSolceller"><img :src="slide.img" alt="--Image Missing--"></NuxtLink>
        <slot name="header"></slot>
        <slot name="date"></slot>
        <slot name="content"></slot>
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </template>
  
  <script>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  
  export default {
      props : {
        slides : Array
      },
      components : {
          Carousel, Slide, Pagination, Navigation,
      },
      data () {
        return{
  
        }
      },
  
  }
  </script>
  
  <style>
  
  </style>