<script setup lang="ts">
import { appName } from "~~/constants"

useHead({
  title: appName,
})

const blocked = ref(false)
</script>

<template>
  <NuxtPwaManifest />
  <Toast />
  <BlockUI :blocked="blocked" full-screen />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
