import { createRouter, createWebHistory } from "vue-router";
import PageHome from "./pages/PageHome.vue";
import PageProject from "./pages/PageProject.vue";
import PageAbout from "./pages/PageAbout.vue";
import PageSingleCard from "./pages/PageSingleCard.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import PageContacts from "./pages/PageContacts.vue";

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
            path: '/projects/:pathMatch(.*)*',
            name: 'projects-notfound',
            component: PageNotFound
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
            path: '/about/:pathMatch(.*)*',
            name: 'about-notfound',
            component: PageNotFound
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: PageContacts
        },
        {
            path: '/contacts/:pathMatch(.*)*',
            name: 'contacts-notfound',
            component: PageNotFound
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: PageNotFound
        }
    ]
})

export { router }