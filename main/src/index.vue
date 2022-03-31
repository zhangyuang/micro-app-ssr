<template>
  <div>
    <div>
      我是主应用首页
    </div>
    <button @click="toChildren">
      打开子应用
    </button>
  </div>
</template>

<script>

export default {
  name: 'index',
  methods: {
    toChildren () {
      this.$router.push('/children')
    }
  }
}
</script>

<style>

</style>
