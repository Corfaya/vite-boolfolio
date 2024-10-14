<script>
export default {
    props: {
        project: Object
    }
  
}
</script>
<template>
<div class="col-12 col-md-6 col-lg-4">
    <div class="card">
        <img :src="project.preview.startsWith('http') ? project.preview : `http://127.0.0.1:8000/storage/${project.preview}`" :alt="project.name" class="card-img-top">
        <div class="card-title p-3">
            <h3>{{project.name}} project</h3>
            <!-- <h5></h5> -->
        </div>
        <div class="card-body">
            <p class="text-end">Data upload: <strong>{{project.date_of_upload}} </strong></p>
            <p class="card-text">{{project.description}}</p>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
</style>