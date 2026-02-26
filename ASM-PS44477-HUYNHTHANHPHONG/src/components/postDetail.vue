<template>
  <div class="container mt-4">

    <!-- BACK BUTTON -->
    <div class="mb-4">
      <router-link to="/" class="btn btn-outline-secondary">
        ← Quay lại Trang chủ
      </router-link>
    </div>

    <!-- TITLE + INFO -->
    <div class="text-center mb-4" v-if="post">
      <h1 class="fw-bold display-5">
        {{ post.title }}
      </h1>
    </div>

    <!-- POST IMAGE -->
    <div class="rounded overflow-hidden mb-5 shadow-sm" v-if="post">
      <img
        :src="post.image"
        class="w-100"
        alt="Post Image"
      >
    </div>

    <!-- POST CONTENT -->
    <div class="mb-5" style="max-width: 900px; margin: auto;" v-if="post">
      <p class="fs-5 text-dark">
        {{ post.content }}
      </p>
    </div>


    <div class="border-top pt-5">
      <h2 class="fw-bold mb-4">Bình luận</h2>


      <h3 class="fw-bold mt-5 mb-3">Để lại bình luận</h3>

      <textarea
        class="form-control mb-3"
        rows="4"
        placeholder="Viết bình luận của bạn ở đây..."
        disabled
      ></textarea>

      <button class="btn btn-primary px-4 py-2 fw-bold" disabled>
        Gửi bình luận
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const post = ref(null)

const fetchPost = async () => {
  try {
    const res = await axios.get(
      `http://localhost:3000/posts/${route.params.id}`
    )
    post.value = res.data
  } catch (err) {
    console.error('Không tìm thấy bài viết', err)
  }
}

onMounted(fetchPost)
</script>
