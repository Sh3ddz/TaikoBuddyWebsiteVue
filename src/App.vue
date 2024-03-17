<script setup lang="ts">

import HelloWorld from './components/HelloWorld.vue'

import { useColorMode } from '@vueuse/core'
import { Icon } from '@iconify/vue'

import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Calendar } from '@/components/ui/calendar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ref } from 'vue'

const count = ref(0)
const defaultValue = 'item-1'
const accordionItems = [
  { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
  { value: 'item-2', title: 'Is it unstyled?', content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.' },
  { value: 'item-3', title: 'Can it be animated?', content: 'Yes! You can use the transition prop to configure the animation.' },
]
const date = ref(new Date())
const mode = useColorMode()
const hoverColor = ref('green')
const itemList = ['green','red','blue']
</script>

<template>
  
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="mode = 'light'">
        Light
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'dark'">
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'auto'">
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>

<!-- <div v-for="l in itemList">
<Card @click="count++" class="hover:bg-sky-700 m-8">
      <CardHeader>
        <CardTitle :style="{color: l}">{{l}}</CardTitle>
      </CardHeader>
      <CardFooter>
        last updated: (1/28/2021)
      </CardFooter>
    </Card>
</div> -->
<div class="flex m-8">
    <Card @click="count++" class="card shadow-2xl text-center">
      <CardHeader>
        <CardTitle>TaikoBuddy</CardTitle>
        <CardDescription>osu!Taiko AIO tool</CardDescription>
      </CardHeader>
      <CardContent>
        <img src="./res/TaikoBuddyIconFULL.png">
      </CardContent>
      <CardFooter>
        last updated: (1/28/2021)
      </CardFooter>
    </Card>

    <Card @click="count++" class="card shadow-2xl text-center">
      <CardHeader>
        <CardTitle>OsuBuddy</CardTitle>
        <CardDescription>osu!Standard AIO tool</CardDescription>
      </CardHeader>
      <CardContent>
        <img src="./res/OsuBuddyIconFULL.png">
      </CardContent>
      <CardFooter>
        NOW AVAILABLE
      </CardFooter>
    </Card>

    <Card @click="count++" class="card shadow-2xl text-center">
      <CardHeader>
        <CardTitle>AimBuddy</CardTitle>
        <CardDescription>osu!Standard Aim Assist</CardDescription>
      </CardHeader>
      <CardContent>
        <img src="./res/AimBuddyIconFULL.png">
      </CardContent>
      <CardFooter>
        last updated: (2/6/2021)
      </CardFooter>
    </Card>
  </div>

  <Button @click="count++">Click me! {{ count }}</Button>

<!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
