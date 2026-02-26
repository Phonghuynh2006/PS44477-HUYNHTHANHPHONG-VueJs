<template> 
<div class="container row">
<!-- bên trái -->
    <div class="col-6"> 
        <h2 class="text-center">Thêm Bài Viết</h2> 
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Link ảnh</label>
          <input v-model="image" type="text" class="form-control" id="exampleFormControlInput2" placeholder="Nhập link ảnh">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Tiêu đề</label>
          <input v-model="title" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nhập tiêu đề">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Nội dung</label>
          <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button class="btn btn-primary" type="button" @click="addPost" v-if="!selectedPostId" >Thêm</button>
          <button class="btn btn-primary" type="button" @click="updatePost" v-if="selectedPostId" >Cập Nhật</button>
          <button class="btn btn-primary" type="button" @click="deletePost" v-if="selectedPostId" >Xóa</button>
          <button class="btn btn-primary" type="button" @click="resetForm" v-if="selectedPostId">Reset</button>
        </div>
    </div> 

<!-- bên phải -->
    <div class="col-6"> 
        <h2 class="text-center">Danh sách bài viết</h2> 
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tiêu đề</th>
              <th scope="col">Nội dung</th>
              <th scope="col">Link ảnh</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts" :key="post.id" @click="selectPost(post)" :class="{ 'table-primary': selectedPostId === post.id }">
              <th>{{ post.id }}</th>
              <td>{{ post.title }}</td>
              <td>{{ post.content }}</td>
              <!-- <td>{{ post.image }}</td> -->
<!-- tham khảo  -->
              <td>
                <img 
                  :src="post.image" 
                  alt="ảnh bài viết"
                  style="width: 100px; height: auto;"
                />
              </td>

            </tr>
          </tbody>
        </table>
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

// Thêm bài viết mới 
const title = ref(''); 
const content = ref(''); 
const image = ref('');

const addPost = async () => { 
    if (!title.value || !content.value || !image.value) return; 
    try { 
        await axios.post('http://localhost:3000/posts', { 
            title: title.value, 
            content: content.value,
            image: image.value
            // userId: currentUser.value.id //
        }); 
        title.value = ''; 
        content.value = '';
        image.value = '';
    } catch (error) { 
        console.error('Lỗi khi thêm bài viết:', error); 
    } 
}; 

//  Cập nhật bài viết 
const updatePost = async (id) => { 
    try { 
        await axios.put(`http://localhost:3000/posts/${id}`, { 
            title: 'Tiêu đề mới', 
            content: 'Nội dung mới', 
            image: 'ảnh mới' 
        }); 
    } catch (error) { 
        console.error('Lỗi khi cập nhật:', error); 
    } 
}; 

//  Xóa bài viết 
const deletePost = async (id) => { 
    try { 
        await axios.delete(`http://localhost:3000/posts/${id}`); 
    } catch (error) { 
        console.error('Lỗi khi xóa:', error); 
    } 
}; 

// click danh sách
const selectedPostId = ref(null);
const selectPost = (post) => {
    selectedPostId.value = post.id;
    title.value = post.title;
    content.value = post.content;
    image.value = post.image;
};
// reset 
const resetForm = () => {
    title.value = '';
    content.value = '';
    image.value = '';
    selectedPostId.value = null;
};

const currentUser = ref(null)

onMounted(() => {
  const savedUser = localStorage.getItem('user')
  if (savedUser) {
    currentUser.value = JSON.parse(savedUser)
  }
})


</script> 