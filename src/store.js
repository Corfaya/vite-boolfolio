import { reactive } from "vue";

export const store = reactive({
    url: 'http://127.0.0.1:8000/api',
    epProjects: '/projects',
    navLinks: [
        {
            name: 'homepage',
            label: 'Home'
        },
        {
            name: 'projects',
            label: 'Projects'
        },
        {
            name: 'about',
            label: 'Chi sono'
        }
    ]
})