<script setup>
import { ref } from 'vue'
import Bai1 from './components/bai1.vue'
import Bai2 from './components/bai2.vue'
import Bai3 from './components/bai3.vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'


const posts = ref([])

// const posts = ref([
//   {
//     tieude: "bbbb",
//     tacgia: "bbb",
//     noidung: "bbb"
//   }
// ])

function addPost(post) {
  posts.value.push(post)
}



 


</script>

<template>
<div class="container">
<Bai1 />
<hr>
<Bai2 />
<hr>
<Bai3 />
<hr>
<h1>ung dung blog</h1>
<CreatePost @add-post="addPost" />
<PostList :posts="posts" />
</div>

<!-- <Test1 /> -->



</template>


