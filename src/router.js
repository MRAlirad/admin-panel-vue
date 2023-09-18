import {createRouter, createWebHistory} from "vue-router";

import Dashboard from './pages/Dashboard.vue';
import Shop from './pages/Shop.vue';
import Tables from './pages/Tables.vue';
import Kanban from './pages/Kanban.vue';
import Profile from './pages/Profile.vue';
import Login from './pages/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/dashboard'},
        {path: '/dashboard', component: Dashboard},
        {path: '/shop', component: Shop},
        {path: '/tables', component: Tables},
        {path: '/kanban', component: Kanban},
        {path: '/profile', component: Profile},
        {path: '/login', component: Login},
    ],
});

export default router;