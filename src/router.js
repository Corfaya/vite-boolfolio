import { createRouter, createWebHistory } from "vue-router";
import PageHome from "./pages/PageHome.vue";
import PageProject from "./pages/PageProject.vue";
import PageAbout from "./pages/PageAbout.vue";
import PageSingleCard from "./pages/PageSingleCard.vue";
import PageNotFound from "./pages/PageNotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: PageHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: PageProject
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: PageSingleCard
        },
        {
            path: '/about',
            name: 'about',
            component: PageAbout
        },
        {
            path: '/:notFound',
            name: 'notfound',
            component: PageNotFound
        }
    ]
})

export { router }