<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
  data() {
    return {
      projects: [],
      current_page: null,
      last_page: null,
      first_page: 1
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
        this.projects = res.data.results.data;
        this.current_page = res.data.results.current_page;
        this.last_page = res.data.results.last_page;
      })
    },
    changePage(p) {
      this.current_page = p;
      axios.get('http://127.0.0.1:8000/api/projects', { params: { page: p } }).then((res) => {
        this.projects = res.data.results.data;
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

      <nav aria-label="Page navigation" class="d-flex justify-content-center my-5">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous" :class="current_page == 1 ? 'disabled' : ''" @click="changePage(current_page - 1)">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-for="page in last_page">
            <a class="page-link" href="#" @click="changePage(page)"> {{ page }} </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next" :class="current_page == last_page ? 'disabled' : ''" @click="changePage(current_page + 1)" >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>
<style lang="scss">
</style>