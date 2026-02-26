<template>
  <div>
    <h2>Blog List</h2>
    <ul>
      <li>
        <router-link :to="{ name: 'BlogPost', params: { id: 1 }}">
          Blog 1
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'BlogPost', params: { id: 2 }}">
          Blog 2
        </router-link>
      </li>
    </ul>
  </div>
</template>