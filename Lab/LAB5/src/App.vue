<template>
  <div class="container py-4">

    <h1 class="text-center mb-4">LAB5</h1>

    <ul class="nav nav-tabs mb-4">
      <li class="nav-item">
        <button class="nav-link" :class="{ active: page === 'bai1' }" @click="page='bai1'">Bài 1</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" :class="{ active: page === 'bai2' }" @click="page='bai2'">Bài 2</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" :class="{ active: page === 'bai3' }" @click="page='bai3'">Bài 3</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" :class="{ active: page === 'bai4' }" @click="page='bai4'">Bài 4</button>
      </li>
    </ul>


    <Bai1 v-if="page === 'bai1'" />
    <Bai2 v-if="page === 'bai2'" />
    <Bai3 v-if="page === 'bai3'" />
    <div v-if="page === 'bai4'">
      <CreatePost @add-post="addPost" />
      <PostList :posts="posts" />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Bai1 from './components/Bai1.vue'
import Bai2 from './components/Bai2.vue'
import Bai3 from './components/Bai3.vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

const page = ref("bai1")

const posts = ref([])

function addPost(post) {
  posts.value.push(post)
}
</script>
