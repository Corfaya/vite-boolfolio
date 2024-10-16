<script>
import { store } from '../store';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            project: ''
        }
    },
    methods: {
        getProjectDetails(){
            let projUrl = `${store.url}${store.epProjects}`
            axios.get(`${projUrl}/${this.$route.params.slug}`).then((res) => {
                console.log(res.data.results)
                this.project = res.data.results
            })
        }
    },
    created() {
        this.getProjectDetails()
    }
}
</script>
<template>
    <div class="bg-title">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="py-5 me-4 text-center fw-bolder text-uppercase">{{project.name}}<span> details</span></h1>
                </div>
            </div>
        </div>
    </div>

    <div class="container my-5">
        <div class="row g-3">
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-end">
                <div class="img-p-box">
                    <img :src="project.preview.startsWith('http') ? project.preview : `http://127.0.0.1:8000/storage/${project.preview}`" :alt="project.name">
                </div>
            </div>
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-start">
                <div class="details ms-4 p-5 d-flex flex-column justify-content-center align-items-center">
                    <p v-if="project.type">Field: <strong class="text-orange">{{project.type.name}}</strong></p>
                    <p v-else>Field of work not specified</p>
                    <p>Upload data: <strong class="text-orange">{{project.date_of_upload}} </strong></p>
                    <div v-if="project.technologies && project.technologies.length > 0">
                        <p class="m-0">Created with:</p>
                        <ul class="list-unstyled d-flex m-0">
                            <li v-for="tech in project.technologies" :key="tech.id" class="pe-2 text-orange">{{tech.name}}</li>
                        </ul>
                    </div>
                    <div v-else>
                        <p class="m0">Technologies used not specified</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container my-5">
        <div class="row">
            <div class="col-12">
                <div class="bg-title p-4 mx-5 description">
                    <p class="t-24">{{project.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../styles/app.scss';
    .bg-title {
        background-color: $primaryText;
        h1 {
            color: $hover;
            text-shadow: 3px 2px 1px $body;
            span {
                color: $body;
                text-shadow: 3px 2px 1px $hover;
            }
        }
    }

    .img-p-box {
        width: 400px;
        height: 300px;
        border: 3px solid $hover;
        box-shadow: 0 0 10px 5px #363636;
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
    }

    .details {
        background: $primaryText;
        color: $header;
        box-shadow: 0 0 10px 5px #252525;
        .text-orange {
            color: $hover;
        }
    }

    .description {
        box-shadow: 0 0 10px 5px #252525;
        color: $header;
        text-align: justify;
    }
</style>