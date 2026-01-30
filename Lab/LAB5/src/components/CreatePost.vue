<template>
  <div class="mb-4">
    <h2 class="mb-3">Tạo bài viết mới</h2>
    <div class="mb-3">
      <input v-model="tieude" placeholder="Tiêu đề bài viết"/>
      <br>
      <input v-model="tacgia" placeholder="Tên tác giả" />
      <br>
      <textarea v-model="noidung" placeholder="Nội dung bài viết"></textarea>
    </div>
    <button class="btn btn-primary" @click="submitPost">Đăng bài</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// sự kiện 
const emit = defineEmits(['add-post'])

const tieude = ref('')
const tacgia = ref('')
const noidung = ref('')

function submitPost() {
  if (tieude.value && tacgia.value && noidung.value) {
    const newPost = {
      tieude: tieude.value,
      tacgia: tacgia.value,
      noidung: noidung.value,
    }
// phát sự kiện
    emit('add-post', newPost)

    // reset
    tieude.value = ''
    tacgia.value = ''
    noidung.value = ''
  }
}
</script>

<style>
input,
textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>





































<!-- _____  _    _  ____  _   _  _____ _    _ _    ___     ___   _ _    _ 
 |  __ \| |  | |/ __ \| \ | |/ ____| |  | | |  | \ \   / / \ | | |  | |
 | |__) | |__| | |  | |  \| | |  __| |__| | |  | |\ \_/ /|  \| | |__| |
 |  ___/|  __  | |  | | . ` | | |_ |  __  | |  | | \   / | . ` |  __  |
 | |    | |  | | |__| | |\  | |__| | |  | | |__| |  | |  | |\  | |  | |
 |_|    |_|  |_|\____/|_| \_|\_____|_|  |_|\____/   |_|  |_| \_|_|  |_|
                                                                        -->
                                                                       