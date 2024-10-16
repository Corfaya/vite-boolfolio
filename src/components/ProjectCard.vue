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
        <div class="img-box">
            <router-link :to="{ name: 'project', params: {slug: project.slug} }">
            <img :src="project.preview.startsWith('http') ? project.preview : `http://127.0.0.1:8000/storage/${project.preview}`" :alt="project.name" class="card-img-top">
        </router-link>
        </div>
        <div class="card-title px-3 pt-3">
            <h3 class="text-orange">{{project.name}}</h3>
            <div v-if="project.technologies && project.technologies.length > 0">
                <p class="m-0">Created with:</p>
                <ul class="list-unstyled d-flex m-0">
                    <li v-for="tech in project.technologies" :key="tech.id" class="pe-2 text-orange">{{tech.name}}</li>
                </ul>
            </div>
        </div>
        <div class="card-body">
            <p v-if="project.type" class="text-end">Field: <strong class="text-orange">{{project.type.name}}</strong></p>
            <p class="text-end">Upload data: <strong class="text-orange">{{project.date_of_upload}} </strong></p>
            <p class="card-text mt-5">{{project.description}}</p>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
@import '../styles/app.scss';
.card {
    color: #fff;
    background-color: $primaryText;
    border: none;
    box-shadow: 0 0 10px #000000b3;
    min-height: 700px;
    position: relative;
    transition: all 0.7s ease;
    z-index: 1;
    &:hover {
        transform: translate(-10px, -10px);
        z-index: 2;
        box-shadow: 10px 10px 20px #000000b3;
        background-color: $body;
    }
    .img-box {
        height: 200px;
        img {
            max-height: 100%;
            object-fit: cover;
        }
    }
}

.text-orange {
    color: $hover;
}
</style>