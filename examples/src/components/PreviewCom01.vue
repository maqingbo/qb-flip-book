<template>
  <div ref="bookArea">{{ msg }}</div>
</template>

<script setup>
// import { PageFlip } from '../../../src/main.ts'
import { PageFlip } from '../../../dist/qb-flip-book.js'
import { ref } from 'vue'

defineProps({
  msg: String,
})

const bookArea = ref(null)
const obj = new PageFlip(bookArea.value, {
  width: 500,
  height: 700,
  showCover: false,
})
console.log('%c PageFlip: ', 'background-color: pink', obj)
</script>

<style scoped lang="scss"></style>
