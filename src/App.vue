<script>
import axios from 'axios';
export default {
  data() {
    return {

    }
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
        console.log(res.data.results)
      })
    }
  }
}
</script>
<template>
<h1>Prova</h1>
</template>
<style lang="scss"></style>