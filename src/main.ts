import { createApp } from 'vue'
import './style.css'
import './assets/index.css'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import TaikoBuddy from './pages/TaikoBuddy.vue'
import OsuBuddy from './pages/OsuBuddy.vue'
import AimBuddy from './pages/AimBuddy.vue'

const routes = [
  { path: '/', component: Home},
  { path: '/taikobuddy', component: TaikoBuddy},
  { path: '/osubuddy', component: OsuBuddy },
  { path: '/aimbuddy', component: AimBuddy },
]
export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  next();
});

// createApp(App).use(router).mount('#app')

const app = createApp(App);
app.use(router);
app.mount("#app")