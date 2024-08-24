import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/AppHome.vue';
import Login from '@/views/AppLogin.vue';
import Dashboard from '@/views/AppDashboard.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
