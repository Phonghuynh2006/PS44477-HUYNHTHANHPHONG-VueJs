<template>
<div class="row row-cols-1 row-cols-md-3 g-4">

  <div class="col" v-for="(post, index) in posts" :key="index">
    <div class="card h-100">
      <!-- <img :src="post.image" class="card-img-top" alt="..."> -->
      <img :src="post.image" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.content }}</p>
        <!-- <a :href="post.id" class="btn btn-primary">xem thêm</a> -->

<!-- tham khao -->
        <router-link
  :to="`/post/${post.id}`"
  class="btn btn-primary"
>
  Xem thêm
</router-link>
      </div>
    </div>
  </div>

</div>
</template>
<script setup>
import { ref, onMounted } from 'vue'; 
import axios from 'axios'; 
 
// Lấy danh sách bài viết
const posts = ref([]); 
const fetchPosts = async () => { 
    try { 
        const response = await axios.get('http://localhost:3000/posts'); 
        posts.value = response.data; 
    } catch (error) { 
        console.error('Lỗi khi lấy dữ liệu:', error); 
    } 
}; 
 
onMounted(fetchPosts); 


// const posts = ref([
//   {
//     title: 'Gần 100 trường đại học công bố lịch nghỉ Tết Bính Ngọ: ‘Kỷ lục’ nghỉ tới 43 ngày',
//     description: 'Theo cập nhật mới nhất, đến thời điểm hiện tại đã có gần 100 trường đại học công bố hoặc thông tin dự kiến lịch nghỉ Tết Nguyên đán năm 2026 cho sinh viên.',
//     image: 'https://cdn-i.vtcnews.vn/resize/th/upload/2026/01/19/base64-17239699328551748199622-17152344.jpeg',
//     link: '/postDetail',
//     updated: 'Last updated 3 mins ago'
//   },
//   {
//     title: 'Bão Nokaen sắp đổi hướng, có ảnh hưởng tới nước ta?',
//     description: 'Theo cập nhật mới nhất, bão Nokaen đang có dấu hiệu đổi hướng và có khả năng ảnh hưởng tới khu vực.',
//     image: 'https://photo-baomoi.bmcdn.me/w700_r1/2026_01_19_15_54291337/2e66b4ad9ee577bb2ef4.jpg.avif',
//     link: '#',
//     updated: 'Last updated 5 mins ago'
//   },
//   {
//     title: 'Galaxy S26 Ultra: 4 màu "chốt hạ" cực bắt mắt',
//     description: 'Không chỉ tiết lộ đủ bốn màu chính của Galaxy S26 Ultra, nguồn tin này còn trùng khớp hoàn toàn với báo cáo trước đó.',
//     image: 'https://photo-baomoi.bmcdn.me/w250_r3x2/2026_01_19_23_54291876/1899612b4b63a23dfb72.jpg.avif',
//     link: '#',
//     updated: 'Last updated 10 mins ago'
//   }
// ])
</script>
