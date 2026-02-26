<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const job = ref({})

const getDetail = async () => {
  const res = await axios.get(`http://localhost:3000/jobs/${route.params.id}`)
  job.value = res.data
}

onMounted(() => {
  getDetail()
})
</script>

<template>
  <div class="container mt-4">
    <h2>Chi tiết công việc</h2>

    <p><b>ID:</b> {{ job.id }}</p>
    <p><b>Title:</b> {{ job.title }}</p>
    <p><b>Salary:</b> {{ job.salary }}</p>
    <p><b>Skills:</b> {{ job.skills }}</p>
  </div>
</template>