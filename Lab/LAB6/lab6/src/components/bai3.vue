<template>
    <div class="container mt-5">
    <h2 class="text-center">Kiến thức sức khỏe cộng đồng</h2>

    <div class="row">
        <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
            <div class="card">
                <img :src="item.image" class="img-fluid" alt="Hình ảnh">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ item.content }}</p>
                    <button class="btn btn-info">Xem chi tiết</button>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script setup>
import { ref } from 'vue';

const items = ref([
  {
    title: "Vệ sinh cá nhân",
    content: "Làm sạch cơ thể hàng ngày giúp ngăn ngừa bệnh tật.",
    image: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg"
  },
  {
    title: "Chế độ ăn uống",
    content: "Ăn uống điều độ, đủ chất giúp cơ thể khỏe mạnh.",
    image: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg"
  },
  {
    title: "Tập thể dục đều đặn",
    content: "Tập luyện giúp tăng cường sức khỏe và tinh thần.",
    image: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg"
  }
]);
</script>