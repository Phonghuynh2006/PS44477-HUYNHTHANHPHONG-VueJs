<template>
  <LoginComponent v-if="!user" @login="user = $event" />
  <CommentComponent v-else :user="user" />
</template>

<script setup>
import { ref } from 'vue'
import LoginComponent from './LoginComponent.vue'
import CommentComponent from './CommentComponent.vue'

const user = ref('')
</script>
