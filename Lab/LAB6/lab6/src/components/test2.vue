<template>
    <!-- 8 quy tắt thêm số 2 tự nhập  -->
    <div class="container">

    <h3>Nhập số:</h3>
    <input type="number" step="0.1" v-model.number="diem">

    <div class="result">
        <p v-if="diem < 5">Yếu</p>
        <p v-else-if="diem < 6.5">Trung bình</p>
        <p v-else-if="diem < 8">Khá</p>
        <p v-else-if="diem < 9">Giỏi</p>
        <p v-else>Xuất sắc</p>
    </div>
</div>

</template>


<script setup>
import { ref } from 'vue';
const diem = ref(0);

</script>