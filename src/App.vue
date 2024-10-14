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
        console.log(this.projects)
      })
    }
  }
}
</script>
<template>
  <ProjectCard />
</template>
<style lang="scss"></style>