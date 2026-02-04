<template>

<h1>26 - Huỳnh Thanh Phong</h1>
    <label>Số lượng:</label>
    <input type="number" min="0" v-model.number="soLuong" @click.enter="tinhTien" />

    <label>Đơn giá:</label>
    <input type="number" min="0" v-model.number="donGia" @click.enter="tinhTien" />

      <p><b>Thành tiền:</b> {{ thanhTien }} VNĐ</p>
        <label v-if="soLuong > 10" style="color:red">
        được giảm giá 10%    </label>


</template>

<script setup>
import { ref } from 'vue'

const soLuong = ref(0)
const donGia = ref(0)
const thanhTien = ref(0)

function tinhTien() { 
  // thanhTien.value = soLuong.value * donGia.value
if (soLuong.value >10 ) {
thanhTien.value = soLuong.value * donGia.value  * 0.9
} else {
  thanhTien.value = soLuong.value * donGia.value 
}
  
}
</script>
