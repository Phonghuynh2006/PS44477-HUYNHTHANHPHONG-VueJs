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

      <div class="d-flex justify-content-center gap-3 mt-3 text-secondary">
        <span>Tác giả: Admin</span>
        <span>|</span>
        <span>Ngày đăng: 2026</span>
      </div>
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

    <!-- COMMENTS (KHÔNG HOẠT ĐỘNG) -->
    <div class="border-top pt-5">
      <h2 class="fw-bold mb-4">Bình luận (2)</h2>

      <!-- COMMENT 1 -->
      <div class="d-flex gap-3 mb-4">
        <div class="bg-secondary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center"
             style="width: 48px; height: 48px;">
          <span class="text-secondary fs-4">👤</span>
        </div>

        <div>
          <p class="fw-bold mb-1">phong</p>
          <p class="text-muted small mb-2">2 ngày trước</p>
          <p>Bài viết tuyệt vời! Rất nhiều thông tin hữu ích.</p>
        </div>
      </div>

      <!-- COMMENT 2 -->
      <div class="d-flex gap-3 mb-4">
        <div class="bg-secondary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center"
             style="width: 48px; height: 48px;">
          <span class="text-secondary fs-4">👤</span>
        </div>

        <div>
          <p class="fw-bold mb-1">phong1</p>
          <p class="text-muted small mb-2">1 ngày trước</p>
          <p>Hướng dẫn rất rõ ràng và dễ hiểu.</p>
        </div>
      </div>

      <!-- COMMENT FORM (FAKE) -->
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
