<template>
  <div id="app">
    <micro-app name='app1' inline disableSandbox url='http://localhost:3002/'></micro-app>
    <micro-app name='app2'   url='http://localhost:3000'></micro-app>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
