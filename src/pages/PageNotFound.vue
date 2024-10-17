<script>
export default {

}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="d-flex flex-column justify-content-center align-items-center error-screen">
                    <h2 class="text-center t-60">Oops... the page you're searching for doesn't exist</h2>
                    <router-link :to="{ name: 'homepage' }" class="text-decoration-none py-3 px-4 my-5 back">Back to homepage</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../styles/app.scss';
.error-screen {
    height: 70vh;
    h2 {
        color: $header;
    }
    .back {
        background-color: $hover;
        color: $primaryText;
        box-shadow: 0 0 10px 5px rgb(70, 70, 70);
        transition: all 0.5s;
        &:hover {
            background-color: $primaryText;
            color: $header;
        }
    }
}
</style>