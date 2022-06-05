<template>
  <router-view />
</template>

<script lang="ts" setup>
// 在这里可以进行一些全局组件的注册逻辑
import { defineProps, App } from 'vue'

const props = defineProps<{
  ssrApp: App,
  reactiveFetchData: any,
  asyncData: any
}>()
if (__isBrowser__) {
  // props.ssrApp.config.compilerOptions.isCustomElement = tag => tag.startsWith('micro')
}

</script>

<style lang="less">
@import '@/common.less';
</style>
