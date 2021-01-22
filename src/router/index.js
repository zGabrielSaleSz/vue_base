import { createWebHistory, createRouter } from "vue-router";
import Screen from "@/components/Screen.vue";
import NotFound from '@/components/NotFound.vue';
import Register from '@/components/authentication/Register.vue';

const routes = [
  {
    path: "/",
    name: "App",
    component: Screen,
  },
  {
    path: '/register',
    name: "Register",
    component: Register
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;