import { reactive } from "vue";

export const store = reactive({
    navLinks: [
        {
            name: 'homepage',
            label: 'Home'
        },
        {
            name: 'projects',
            label: 'Projects'
        }
    ]
})