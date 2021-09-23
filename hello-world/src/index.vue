<template>
  <div>
    <div>
      我是主应用首页
    </div>
    <button @click="toDetail">
      btn
    </button>
    <micro-app name='app1' url='http://localhost:3000/children'></micro-app>
  </div>
</template>

<script>

export default {
  name: 'index',
  methods: {
    toDetail () {
      this.$router.push('/detail/cbba934b14f747049187')
    }
  }
}
</script>

<style>

</style>
