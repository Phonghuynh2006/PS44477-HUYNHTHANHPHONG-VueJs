<template>
  <div>
    <h2>Trang hồ sơ người dùng</h2>

    <router-link :to="{ name: 'UserProfileInfo' }">Info</router-link> |
    <router-link :to="{ name: 'UserProfileSettings' }">Settings</router-link>

    <router-view />
  </div>
</template>