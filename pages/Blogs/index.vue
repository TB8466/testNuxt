<template>
  <div>
    <section class="text-left leading-[1.9em] sm:mx-20 md:mx-40 lg:mx-96 pt-20">
        <div v-for="blog in blogs.slice().reverse()" :key="blog">
            <div class="my-10 border-b">
                <NuxtLink :to="blog.url">
                    <img class="w-full" :src="blog.img" alt="--IMAGE MISSING--">
                    <p class="text-slate-400">
                        by : {{blog.author}}
                        | {{blog.date}}
                    </p>
                    <p class="text-xl font-black p-2">
                        {{blog.name}}
                    </p>
                    <p class="truncate">
                        {{blog.preview}}
                    </p>
                </NuxtLink>
            </div>
        </div>
    </section>
  </div>
</template>

<script setup>
    /* onMounted( async () => {
        const data = await fetch('http://localhost:8080/api/db')
        .then(res => res.json())
        return data
    }), */
    /* useHead({
      meta: [
        { name: '', 
        content: '' }
      ],
      bodyAttrs: {
        class: ''
      }
    }) */
    const {data : blogs} = await useFetch('/api/db')
</script>

<script>
export default {
    props : {
        blogs : Array
    },
}
</script>

<style>

</style>