import { createApp } from 'vue'
import './style.css'
import './assets/index.css'
import App from './App.vue'

import { createWebHistory, createRouter} from 'vue-router'
import Home from './pages/Home.vue'
import TaikoBuddy from './pages/TaikoBuddy.vue'
import OsuBuddy from './pages/OsuBuddy.vue'
import AimBuddy from './pages/AimBuddy.vue'
import Login from './pages/Login.vue'
import Tokens from './pages/Tokens.vue'
import Downloads from './pages/Downloads.vue'

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/taikobuddy', name: 'taikobuddy', component: TaikoBuddy},
  { path: '/osubuddy', name: 'osubuddy', component: OsuBuddy },
  { path: '/aimbuddy', name: 'aimbuddy', component: AimBuddy },
  { path: '/login', name: 'login', component: Login },
  { path: '/tokens', name: 'tokens', component: Tokens },
  { path: '/downloads', name: 'downloads', component: Downloads },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// createApp(App).use(router).mount('#app')

const app = createApp(App);
app.use(router);
app.mount("#app")