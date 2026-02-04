<template>
  <h3>Xin chào {{ user }}</h3>
  <input v-model="comment" placeholder="Nhập bình luận" />
  <button @click="send">Gửi</button>

  <ul>
    <li v-for="(c, i) in comments" :key="i">{{ c }}</li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
defineProps(['user'])

const comment = ref('')
const comments = ref([])

const send = () => {
  comments.value.push(comment.value)
  comment.value = ''
}
</script>
