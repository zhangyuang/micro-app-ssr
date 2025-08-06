
<template>
  <div>
    <template v-if="mounted">
      <micro-app name="app1" :url="path" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const microApp = __isBrowser__ ? require('@micro-zoe/micro-app').default : {}
const mounted = ref(false)
const route = useRoute()
const path = ref(`http://127.0.0.1:3000${route.path.replace('/main', '')}`)
onMounted(() => {
  mounted.value = true
  microApp.start()
})
</script>

<style>
</style>
