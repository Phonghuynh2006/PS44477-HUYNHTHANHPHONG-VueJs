<template>
    <h1>bai1</h1>
    <input type="text" name="" v-model="myname"  v-on:keyup.up="submit">

</template>
<script setup>
   const handleClick = (message) => {
 alert(message);
};
    import { ref } from 'vue';
    const myname = ref('');
    const submit = () => {
     handleClick(`Hello ${myname.value}`);
    }

</script>