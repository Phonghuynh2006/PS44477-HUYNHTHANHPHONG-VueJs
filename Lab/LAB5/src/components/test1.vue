<template>
<div class="container mt-5 ">
<h2 class="mb-4">Top sách bán chạy</h2>
<ul class="list-group">
<li class="list-group-item" v-for="(product, index) in products">
<h4>{{ product.name }} - {{ product.price }} VNĐ</h4>
    <!-- // false vif bij showDetails anar  -->
<button @click="toggleDetails(index)" class="btn btn-info">
{{ showDetails[index] ? "Ẩn chi tiết" : "Xem chi tiết" }} 
</button>
<!-- toggleDetails chuyener index thanh true thif hienj -->
<p v-show="showDetails[index]" class="mt-2">{{ product.description }}</p>
</li>
</ul>
</div>
</template>
<script setup>
import { ref } from 'vue'

const products = ref([
  {
    name: "Sách 1",
    price: 100000,
    description: "Mô tả sách 1"
  },
    {
    name: "Sách 2",
    price: 100044400,
    description: "Mô tả sách 3"
  }
])
// taoj danh sach phuj  gans laf ko show 
const showDetails = ref(products.value.map(() => false))

const toggleDetails = (index) => {
  showDetails.value[index] = !showDetails.value[index]
}
</script>