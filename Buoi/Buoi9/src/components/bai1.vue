<!-- <template>
    <h1>{{ msg }}</h1>
    <input type="number" name="" v-bind:value="diem">
        <input type="number" name="" v-model="diem">
        <h2>diem {{ diem }}</h2>
        <h3>name : {{ use.name }} - age : {{ use.age }}</h3>
        <button @click="doituoi">doi tuoi</button>

                <h3>name : {{ use2.name }} - age : {{ use2.age }}</h3>
        <button @click="doituoi2">doi tuoi</button>
</template>
<script setup>

import { ref } from 'vue'
import { reactive } from 'vue'
defineProps({
    msg : String,
})
        const diem = ref(8)

        const use = ref({
            name: 'phong',
            age: 20
        })

        function doituoi(){
            use.value.age++;
        }

        const use2 = reactive({
            name: 'phong1',
            age: 20
        })

function doituoi2(){
            use2.age++;
        }
</script> -->

<template>
<div :class="{ highlighted: isHighlighted }" :style="{ backgroundColor: bgColor }">
Kết hợp Class và Style Binding
</div>
<button class="btn btn-dark" @click="toggleHighlight">Toggle Highlight</button>
<button class="btn btn-dark" @click="toggleBgColor">Toggle Background Color</button>
</template>
<script setup>
import { ref } from 'vue';
const isHighlighted = ref(false);
const bgColor = ref('lightgray');
const toggleHighlight = () => {
isHighlighted.value = !isHighlighted.value;
}
const toggleBgColor = () => {
bgColor.value = bgColor.value === 'lightgray' ? 'lightpink' : 'lightgray';
}
</script>
<style>.highlighted {font-weight: bold; color: darkorchid;}</style>