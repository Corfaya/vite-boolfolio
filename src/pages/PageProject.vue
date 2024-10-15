<script>
import axios from 'axios';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    data() {
        return {
            projects: [],
            current_page: null,
            last_page: null,
            first_page: 1,
            store
        }
    },
    components: {
        ProjectCard
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            let urlProject = `${store.url}${store.epProjects}`
            console.log(urlProject)
            axios.get(urlProject).then((res) => {
                this.projects = res.data.results.data;
                this.current_page = res.data.results.current_page;
                this.last_page = res.data.results.last_page;
            })
        },
        changePage(p) {
            let urlProject = `${store.url}${store.epProjects}`
            this.current_page = p;
            axios.get(urlProject, { params: { page: p } }).then((res) => {
                this.projects = res.data.results.data;
            })
        }
    }
}
</script>
<template>
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="py-5 text-center fw-bolder">Sfoglia i miei progetti</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row gy-4">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>

        <nav aria-label="Page navigation" class="d-flex justify-content-center my-5">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" :class="current_page == 1 ? 'disabled' : ''"
                        @click="changePage(current_page - 1)">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" v-for="page in last_page">
                    <a class="page-link" href="#" @click="changePage(page)"> {{ page }} </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next" :class="current_page == last_page ? 'disabled' : ''"
                        @click="changePage(current_page + 1)">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style lang="scss" scoped>
@import '../styles/app.scss';

.section {
    background-color: $primaryText;
    color: $hover;
    margin-bottom: 50px;
    h1 {
        text-shadow: 3px 2px 1px $body;
    }
}

.section {
    background-color: $primaryText;
    color: $hover;
    margin-bottom: 50px;
    h1 {
        text-shadow: 3px 2px 1px $body;
    }
}

nav {
    background-color: $body !important;
    .pagination {
        .page-link {
            background-color: $primaryText;
            color: $hover;
            &.disabled {
                background-color: #cfcfcf;
                color: #000;
            }
        }
    }
}
</style>