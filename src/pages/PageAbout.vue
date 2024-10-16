<script>
export default {
    
}
</script>
<template>
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="py-5 text-center fw-bolder">Something about me</h1>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8 d-flex">
                <div class="about-section p-4 align-self-center me-5">
                    <p class="description">I hold a degree in History and Philosophy, with a master in Theoretical Philosophy. In a completely unexpected way, I discovered a new passion for web development and decided to turn it into a career. Today, I aim to work as a <strong>full stack web developer</strong>, combining my humanistic background with technical skills to create innovative digital solutions. I love taking on new challenges, seeking connections between critical thinking and coding.</p>
                    <div class="about-footer d-flex justify-content-between align-items-center mt-5">
                        <p class="final-tag"><strong><</strong>HappyCoding <strong>/></strong></p>
                        <p class="t-12 text-end">P.S. I don't know who the person in the image is</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 d-flex justify-content-center">
                <div class="img-box align-self-center">
                    <img src="../assets/girl_dev.jpg" alt="Girl developer">
                </div>
            </div>
        </div>
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

.img-box {
    width: 400px;
    height: 400px;
    padding: 30px;
    border-radius: 50px;
    box-shadow: 0 0 10px 5px #252525;
    background-color: $primaryText;
    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 50px;
        object-fit: cover;
        box-shadow: 0 0 10px 10px #252525;
    }
}

.about-section {
    letter-spacing: 2px;
    background-color: $primaryText;
    box-shadow: 0 0 10px 5px #252525;
    color: #fff;
    strong {
        color: $hover;
    }
}

@media screen and (max-width: 1400px) {
    .img-box {
        width: 350px;
        height: 350px;
    }
}

@media screen and (max-width: 1200px) {
    .img-box {
        width: 300px;
        height: 300px;
    }

    .about-section {
        .description {
            font-size: 14px;
        }
        .about-footer {
            flex-direction: column;
            .final-tag {
                margin-bottom: 20px;
            }
        }
    }
}

@media screen and (max-width: 991px) {
    .img-box {
        width: 400px;
        height: 400px;
        margin-top: 50px;
    }

    .about-section {
        margin: 0 !important;
    }
}
</style>