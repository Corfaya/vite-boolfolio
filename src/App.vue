<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
export default {
  data() {
    return {
      projects: []
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
      axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
        this.projects = res.data.results;
      })
    }
  }
}
</script>
<template>
  <main class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="mb-5 pb-5 text-center fw-bolder">I miei progetti</h1>
        </div>
      </div>
      <div class="row gy-4">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </main>
</template>
<style lang="scss">
@import './styles/app.scss';
</style>