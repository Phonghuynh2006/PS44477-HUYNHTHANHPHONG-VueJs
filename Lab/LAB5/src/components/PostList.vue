<template>
  <div>
    <h2 class="mb-3">Danh sách bài viết</h2>
    <div v-for="(post, index) in posts" :key="index" class="p-3 mb-3 border rounded" :class="{ 'border-primary': post.tieude.length > 20 }" :style="{ backgroundColor: post.textColor }">
      <h4 class="text-success">{{ post.tieude }}</h4>
            <h5 class="text-danger">{{ post.tacgia }}</h5>
      <p>{{ post.noidung }}</p>

    </div>
  </div>
</template>

<script setup>
defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>


