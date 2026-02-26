<script setup>
import { useRouter } from "vue-router";
import { isAuthenticated } from "../router";

const router = useRouter();

function login() {
  isAuthenticated = true; // giả lập login thành công
  router.push({ name: "Dashboard" });
}
</script>

<template>
  <div>
    <h2>Login Page</h2>
    <button @click="login">Login</button>
  </div>
</template>