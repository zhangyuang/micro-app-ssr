<template>
  <div>
    <div>
      我是子应用
    </div>
    <micro-app v-if="pathname" name='app2' :url="'http://localhost:3000' + pathname"></micro-app>
  </div>
</template>

<script>

export default {
  name: 'child',
  data () {
    return {
      pathname: ''
    }
  },
  created () {
    this.pathname = location.pathname
  }
}
</script>

<style>

</style>
