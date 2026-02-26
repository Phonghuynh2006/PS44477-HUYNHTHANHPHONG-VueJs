<template>
  <div class="col">
    <h2>Bình luận bài viết</h2>
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_NrLmx2ubTubTGlsf79l-gvcJE_5A1y3Maw&s" alt="Hình ảnh" />
      <div class="card-body">
        <h3 class="card-title">8 loại rau củ quả giàu canxi</h3>
        <p class="card-text">Canxi là khoáng chất cần thiết đối với cơ thể người...</p>
      </div>
    </div>

    <form @submit.prevent="submitComment">
      <div class="mt-3">
        <textarea id="commentText" cols="60" v-model="commentText" placeholder="Nhập bình luận của bạn"></textarea>
      </div>
      <button type="submit" class="btn btn-success">Gửi bình luận</button>
    </form>

    <div v-if="comments.length" class="mt-3">
      <h5>Danh sách các bình luận:</h5>
      <ul style="list-style-type: circle;">
        <li v-for="(comment, index) in comments" :key="index">
          <p><strong>{{ comment.name }}</strong>: {{ comment.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['username']);
const commentText = ref('');
const comments = ref([]);

function submitComment() {
  if (commentText.value) {
    comments.value.push({
      name: props.username,
      text: commentText.value
    });
    commentText.value = '';
  }
}
</script>