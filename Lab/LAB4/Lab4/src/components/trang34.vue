<template>
    <!-- <div>
        <h1>hien thi noi dung</h1>
        <h2 class="myclass">{{ conten }}</h2>
        <h2 v-html="message" v-bind:style="styledata" v-bind:class="classname"></h2>
        <h2 v-html="message" v-bind:style="styledata" v-bind:class="classname"></h2>
        <h2 v-html="number + 5"></h2>
        <h4>{{ sayhi() }}</h4>
        <button @click="changeconten()">change</button>
        <button @click="changeconten1()">change222</button>

    </div> -->
    <div>
        <!-- <h1>Hiển thị nội dung ở đây</h1> -->
        <h6 v-html="content" v-bind:style="styleData" v-bind:class="className"></h6>
        <h6 class="text-red" style="font-size: 5rem">{{ content }}</h6>
        <h2>{{ message }}</h2>
        <h2 v-html="number + 5"></h2>
        <h4>{{ sayHi() }}</h4>
        <button @click="change()">Change</button>
        
    </div>


</template>


<script>
    // export default {
    //   data() {
    //     return {
    //         conten : 'xin chào các bạn',
    //                     message : 'xin chào các bạn',
    //         number : 10,
    //         classname : 'myclass',
    //         styledata : {
    //             color : 'red',
    //             fontSize : '30px'
    //         }



    //     }
    //   }  ,
    //       methods: {
    //     sayhi() {
    //         return  'day la phuong thuc'
    //     }
    //     ,
    // changeconten() {
    //     this.conten = 'day la noi dung moi'
    // },
    //     changeconten1() {
    //     this.message = 'day la noi dung moi111'
    //     this.classname = 'text-green'
    // }
    // }
    // }
export default {
    data(){
        return {
            content: 'Xin chào các bạn',
            message: 'Xin chao VueJS',
            number: 10,
            className: 'text-red',
	        styleData: 'font-size: 5rem'
        }
    },
    methods: {
        sayHi(){
            return 'Day la phuong thuc'
        },
        changeContent(){
            this.message = 'day la noi dung moi'
        },
        change(){
            this.content = 'Da doi thanh noi dung moi'
            this.className = 'text-blue'
        }
    }
}

</script>
<style scoped>
/* .myclass {
    color : blue;
    font-size : 40px;
}
.text-green {
    color : green;
} */
     .text-red{
        color: red;
    }
    .text-blue{
        color: blue;
    }
</style>