<template>
    <div>
        <div>我是子应用</div>
        <micro-app name="app1" :url="path"></micro-app>
    </div>
</template>

<script>

export default {
    data() {
        return {
            path: ''
        }
    },
    methods: {
        toDetail() {
            this.$router.push('/detail/cbba934b14f747049187')
        }
    },
    created() {
        this.path = `http://127.0.0.1:3000${this.$route.path}`
    }
}
</script>

<style>
</style>
