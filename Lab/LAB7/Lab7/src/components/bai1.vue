<template>
  <div class="p-4">
    <h3>Quản lý công việc</h3>

    <form @submit.prevent="addJob">
      <input v-model="newJob" placeholder="Nhập công việc" />
      <button>Thêm công việc</button>
    </form>

    <ul>
      <li v-for="(job, index) in jobs" :key="index">
        {{ job }}
        <button @click="removeJob(index)">Xóa</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newJob = ref('')
const jobs = ref([])

const addJob = () => {
  if (newJob.value.trim() !== '') {
    jobs.value.push(newJob.value)
    newJob.value = ''
  }
}

const removeJob = (index) => {
  jobs.value.splice(index, 1)
}
</script>
