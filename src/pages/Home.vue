<template>
  <div id="app">
    <div class="flex m-8 justify-center">
      <Card v-for="card in cardList" @click="count++" class="card shadow-2xl text-center">
        <RouterLink :to="card.href">
          <CardHeader>
            <CardTitle>{{ card.title }}</CardTitle>
            <CardDescription>{{ card.description }}</CardDescription>
          </CardHeader>
          <CardContent>
            <img :src="card.image">
          </CardContent>
          <CardFooter>
            {{ card.lastUpdated }}
          </CardFooter>
        </RouterLink>
      </Card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const count = ref(0)

const cardList = ref([
  {
    title: 'TaikoBuddy',
    href: '/taikobuddy',
    description: 'osu!Taiko AIO tool',
    image: '/src/res/TaikoBuddyIconFULL.png',
    lastUpdated: '1/28/2024'
  },
  {
    title: 'OsuBuddy',
    href: '/osubuddy',
    description: 'osu!Standard AIO tool',
    image: '/src/res/OsuBuddyIconFULL.png',
    lastUpdated: '3/8/2024'
  },
  {
    title: 'AimBuddy',
    href: '/aimbuddy',
    description: 'osu!Standard Aim Assist',
    image: '/src/res/AimBuddyIconFULL.png',
    lastUpdated: '2/6/2024'
  }
])
</script>

<style scoped>
</style>