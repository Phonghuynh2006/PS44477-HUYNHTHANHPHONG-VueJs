<template>
  <div class="mb-4">
    <h2 class="mb-3">Tạo bài viết mới</h2>

    <div class="mb-3">
      <input 
        v-model="tieude" 
        class="form-control" 
        placeholder="Tiêu đề bài viết" 
      />
    </div>

    <div class="mb-3">
      <input 
        v-model="tacgia" 
        class="form-control" 
        placeholder="Tên tác giả" 
      />
    </div>

    <div class="mb-3">
      <textarea 
        v-model="noidung" 
        class="form-control" 
        rows="4"
        placeholder="Nội dung bài viết"
      ></textarea>
    </div>

    <button class="btn btn-primary" @click="submitPost">Đăng bài</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// sự kiện add-post
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
      textColor: '#ffffff'
    }

    emit('add-post', newPost)

    // reset
    tieude.value = ''
    tacgia.value = ''
    noidung.value = ''
  }
}
</script>






































<!-- _____  _    _  ____  _   _  _____ _    _ _    ___     ___   _ _    _ 
 |  __ \| |  | |/ __ \| \ | |/ ____| |  | | |  | \ \   / / \ | | |  | |
 | |__) | |__| | |  | |  \| | |  __| |__| | |  | |\ \_/ /|  \| | |__| |
 |  ___/|  __  | |  | | . ` | | |_ |  __  | |  | | \   / | . ` |  __  |
 | |    | |  | | |__| | |\  | |__| | |  | | |__| |  | |  | |\  | |  | |
 |_|    |_|  |_|\____/|_| \_|\_____|_|  |_|\____/   |_|  |_| \_|_|  |_|
                                                                        -->
                                                                       