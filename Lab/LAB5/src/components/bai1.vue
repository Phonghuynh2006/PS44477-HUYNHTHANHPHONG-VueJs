<template>
  <div class="p-5">
    <p>{{ thongdiep }}</p>
    <button class="btn btn-dark" @click="thongdiepmoi">
      Thay đổi thông điệp
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const thongdiep = ref('Thông điệp ban đầu')

function thongdiepmoi() {
  thongdiep.value = 'Chã có thông điệp nào cả,  chúc mừng bạn đã được 1 cú lừa'
}
</script>

















































































<!-- _____  _    _  ____  _   _  _____ _    _ _    ___     ___   _ _    _ 
 |  __ \| |  | |/ __ \| \ | |/ ____| |  | | |  | \ \   / / \ | | |  | |
 | |__) | |__| | |  | |  \| | |  __| |__| | |  | |\ \_/ /|  \| | |__| |
 |  ___/|  __  | |  | | . ` | | |_ |  __  | |  | | \   / | . ` |  __  |
 | |    | |  | | |__| | |\  | |__| | |  | | |__| |  | |  | |\  | |  | |
 |_|    |_|  |_|\____/|_| \_|\_____|_|  |_|\____/   |_|  |_| \_|_|  |_|
                                                                        -->
                                                                       