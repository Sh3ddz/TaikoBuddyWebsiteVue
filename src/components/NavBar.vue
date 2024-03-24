<template>
    <header class="sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border">
        <div class="items">
            <div class="align-left">
                <img class="object-scale-down h-32 w-32" src="/src/res/TaikoBuddyIconFULL.png">
                </img>
            </div>
            <div class="items">
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
                            <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                                <Sheet>
                                    <SheetTrigger>Account</SheetTrigger>
                                    <SheetContent class="flex w-[500px] sm:w-[500px] justify-center">
                                        <SheetHeader>
                                            <!-- <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                                            <SheetDescription>
                                                This action cannot be undone. This will permanently delete your account
                                                and remove your data from our servers.
                                            </SheetDescription> -->
                                        </SheetHeader>
                                        <Tabs default-value="login" class="w-[400px]">
                                            <TabsList class="grid w-full grid-cols-2">
                                                <TabsTrigger value="login">
                                                    Login
                                                </TabsTrigger>
                                                <TabsTrigger value="signup">
                                                    Sign-Up
                                                </TabsTrigger>
                                            </TabsList>
                                            <TabsContent value="login">
                                                <Card>
                                                    <CardHeader>
                                                        <CardTitle>Login</CardTitle>
                                                        <CardDescription>
                                                            Login with your Taikobuddy account here.
                                                        </CardDescription>
                                                    </CardHeader>
                                                    <CardContent class="space-y-2">
                                                        <div class="space-y-1">
                                                            <Label for="username">Username</Label>
                                                            <Input id="username" type="text" />
                                                        </div>
                                                        <div class="space-y-1">
                                                            <Label for="password">Password</Label>
                                                            <Input id="password" type="password" />
                                                        </div>
                                                    </CardContent>
                                                    <CardFooter>
                                                        <Button @click="login()">Login</Button>
                                                    </CardFooter>
                                                </Card>
                                            </TabsContent>
                                            <TabsContent value="signup">
                                                <Card>
                                                    <CardHeader>
                                                        <CardTitle>Sign-Up</CardTitle>
                                                        <CardDescription>
                                                            Sign-up for a TaikoBuddy account here
                                                        </CardDescription>
                                                    </CardHeader>
                                                    <CardContent class="space-y-2">
                                                        <div class="space-y-1">
                                                            <Label for="newUsername">Username</Label>
                                                            <Input id="newUsername" type="text" />
                                                        </div>
                                                        <div class="space-y-1">
                                                            <Label for="newEmail">Email</Label>
                                                            <Input id="newEmail" type="email" />
                                                        </div>
                                                        <div class="space-y-1">
                                                            <Label for="newPassword">Password</Label>
                                                            <Input id="newPassword" type="password" />
                                                        </div>
                                                        <div class="space-y-1">
                                                            <Label for="confirmPassword">Password</Label>
                                                            <Input id="confirmPassword" type="password" />
                                                        </div>
                                                    </CardContent>
                                                    <CardFooter>
                                                        <Button @click="signup()">Sign-Up</Button>
                                                    </CardFooter>
                                                </Card>
                                            </TabsContent>
                                        </Tabs>
                                    </SheetContent>
                                </Sheet>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem class="justify-end">
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
        </div>
    </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { useColorMode } from '@vueuse/core'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

const mode = useColorMode()

const toggleMode = () => {
    if (mode.value === 'light') {
        mode.value = 'dark';
    } else if (mode.value === 'dark') {
        mode.value = 'light';
    }
};

const signup = () => {
    var tempPass = null;
    var username = document.getElementById("newUsername").value;
    var email = document.getElementById("newEmail").value;
    var password = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if(username === "" || email === "" || password === "" || confirmPassword === "")
    {
        window.alert("Error: "+ "Please fill in all listed fields");
        return;
    }

    if(password !== confirmPassword)
    {
        window.alert("Error: "+ "Passwords are not the same");
        return;
    }

    tempPass = password;
    console.log("SIGNUP:"+username+","+email+","+password);
    //connection.send("SIGNUP:"+username+","+email+","+password);
}
const login = () => {
    var tempPass = null;

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    tempPass = password;

    if(username === "" || password === "")
    {
        window.alert("Error: "+ "Please fill in all listed fields");
        return;
    }
    console.log("LOGIN:"+username+","+password);
    //connection.send("LOGIN:"+username+","+password);
}
</script>

<style scoped>
.items {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    height: 128px;
}
</style>