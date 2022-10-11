<template>
  <div>
    <div>
      <textarea v-model="this.source" class="border-2 border-solid border-black" name="" id="" cols="90" rows="20"></textarea>
    </div>
    <Markdown :linkify="true" :html="true" :breaks="true" :source="source"/>
    <ButtonCom>Hello</ButtonCom>
  </div>
</template>

<script>
import Markdown from 'vue3-markdown-it';

export default {
  components: {
    Markdown,
  },
  data() {
    return {
      source: '#test'
    }
  }
}
</script>
<script setup>
  useHead({
    meta: [
      { name: '', 
      content: '' }
    ],
    bodyAttrs: {
      class: ''
    }
  })
  </script>