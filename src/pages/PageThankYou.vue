<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                    <div class="alert fw-bolder t-60">
                        Message sent successfully. <br> We'll contact you soon!
                    </div>
            </div>
            <div class="d-flex justify-content-center">
                <router-link :to="{ name: 'homepage' }" class="text-decoration-none py-3 px-4 my-5 me-3 back-homepage">Back to homepage</router-link>
                <router-link :to="{ name: 'contacts' }" class="text-decoration-none py-3 px-4 my-5 back-contacts">Back to form contact</router-link>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import '../styles/app.scss';
.alert {
    height: 100%;
    color: $hover;
    background-color: $primaryText;
    letter-spacing: 2px;
    text-align: center;
}

.back-homepage {
    background-color: $hover;
    color: $primaryText;
    box-shadow: 0 0 10px 5px rgb(70, 70, 70);
    transition: all 0.5s;
    &:hover {
        background-color: $primaryText;
        color: $header;
    }
}

.back-contacts {
    background-color: $primaryText;
    color: $header;
    box-shadow: 0 0 10px 5px rgb(70, 70, 70);
    transition: all 0.5s;
    &:hover {
        background-color: $header;
        color: $primaryText;
    }
}
</style>