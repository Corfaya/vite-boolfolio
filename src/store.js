import { reactive } from "vue";

export const store = reactive({
    url: 'http://127.0.0.1:8000/api',
    epProjects: '/projects',
    epLatestProjects: '/latest_projects',
    epContacts: '/contacts',
    navLinks: [
        {
            name: 'homepage',
            label: 'Home'
        },
        {
            name: 'projects',
            label: 'My Projects'
        },
        {
            name: 'about',
            label: 'About me'
        }
    ]
})