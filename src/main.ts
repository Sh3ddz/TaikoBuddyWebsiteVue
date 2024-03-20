import { createApp } from 'vue'
import './style.css'
import './assets/index.css'
import App from './App.vue'

import { createWebHistory, createRouter} from 'vue-router'
import Home from './pages/Home.vue'
import TaikoBuddy from './pages/TaikoBuddy.vue'
import OsuBuddy from './pages/OsuBuddy.vue'
import AimBuddy from './pages/AimBuddy.vue'

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/taikobuddy', name: 'taikobuddy', component: TaikoBuddy},
  { path: '/osubuddy', name: 'osubuddy', component: OsuBuddy },
  { path: '/aimbuddy', name: 'aimbuddy', component: AimBuddy },
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