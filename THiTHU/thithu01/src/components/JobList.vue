<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const jobs = ref([])

const getJobs = async () => {
  const res = await axios.get('http://localhost:3000/jobs')
  jobs.value = res.data
}

const goDetail = (id) => {
  router.push(`/detail/${id}`)
}

onMounted(() => {
  getJobs()
})
</script>

<template>
  <div class="container mt-4">
    <h2>Danh sách công việc</h2>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in jobs" :key="job.id"
            @click="goDetail(job.id)"
            style="cursor:pointer">
          <td>{{ job.id }}</td>
          <td>{{ job.title }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>