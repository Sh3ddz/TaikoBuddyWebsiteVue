<template>
    <div class="nav">
        <header class="flex sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border">
            <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">
                                Home
                            </NavigationMenuLink>
                            <NavigationMenuLink href="downloads" :class="navigationMenuTriggerStyle()">
                                Downloads
                            </NavigationMenuLink>
                            <NavigationMenuLink href="tokens" :class="navigationMenuTriggerStyle()">
                                Tokens
                            </NavigationMenuLink>
                            <NavigationMenuLink href="login" :class="navigationMenuTriggerStyle()">
                                Login/Signup
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant="outline" @click="toggleMode">
                                <Icon v-if="mode === 'light'"
                                    :class="{ 'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0': mode === 'light' }"
                                    icon="radix-icons:moon" />
                                <Icon v-if="mode === 'dark'"
                                    :class="{ 'h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100': mode === 'dark' }"
                                    icon="radix-icons:sun" />
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    </div>
</template>

<script setup lang="ts">
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()

const toggleMode = () => {
    if (mode.value === 'light') {
        mode.value = 'dark';
    } else if (mode.value === 'dark') {
        mode.value = 'light';
    }
};
</script>