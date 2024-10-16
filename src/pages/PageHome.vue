<script>
import { store } from '../store';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    data() {
        return {
            store,
            projects: []
        }
    },
    components: {
        ProjectCard
    },
    created() {
        let urlLatestProject = `${store.url}${store.epLatestProjects}`
        axios.get(urlLatestProject).then((res) => {
            this.projects = res.data.results
        })
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="welcome text-center py-5">
                    <h1 class="t-50">Welcome to my <strong>Portfolio</strong></h1>
                    <p class="t-26 text-white">I am a Fullstack Web Developer with a passion for building web applications.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="section py-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center fw-bolder py-5">I miei ultimi progetti</h2>
                </div>
                <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
            </div>
        </div>
    </div>
            
</template>
<style lang="scss" scoped>
@import '../styles/app.scss';

.welcome {
    color: $primaryText;

    h1 {
        text-shadow: 2px 2px 5px rgb(146, 146, 146);
        strong {
            color: $hover;
            text-shadow: 3px 2px 1px $primaryText;
        }
    }
}

.section {
    background-color: $primaryText;
    color: $hover;
    h2 {
        text-shadow: 3px 2px 1px $body;
    }
}
</style>