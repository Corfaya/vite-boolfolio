import { createRouter, createWebHistory } from "vue-router";
import PageHome from "./components/PageHome.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: PageHome
        }
    ]
})

export { router }