import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/login-view.vue';
import Protected from './views/protected-view.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { 
    path: '/protected', 
    component: Protected,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) {
        next();
      } else {
        next('/login');
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
