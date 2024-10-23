<template>
    <div>
        <div @click="change">我是子应用</div>
        <!-- <div @click="change2">我是子应用2</div> -->
        <micro-app inline :name="name" :url="path" ></micro-app>
        <micro-app inline name="second" :url="path" ></micro-app>
    </div>
</template>

<script>

export default {
    data() {
        return {
            path: '',
            name: 'first'
        }
    },
    created() {
        this.path = `http://127.0.0.1:3000${this.$route.path.replace('/main', '')}`
    },
   methods: {
    change () {
        this.path = 'http://localhost:8080/main/children/'
        this.name = 'app2'
    },
    // change2 () {
    //     this.path = 'http://127.0.0.1:3000/children/'
    //     this.name = 'app1'
    // }
   }
}
</script>

<style>
</style>
