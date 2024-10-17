<script>
import FormContact from '../components/FormContact.vue';

export default {
    components: {
        FormContact
    }
}
</script>
<template>
    <div class="bg-main py-5">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="text-center">Contact me!</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 gy-4 gx-3">
                <FormContact />
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-white text-center my-4">
                <p class="fw-bolder">Otherwise, you can contact me at my addresses or by calling me:</p>
                <ul class="list-unstyled d-flex justify-content-center">
                    <li><strong>Address</strong>: Via dei matti, 0, <strong>Silent Hill (SH)</strong> - </li>
                    <li><strong>E-mail</strong>: prova@test.it - </li>
                    <li><strong>Phone</strong>: 0000/000000 - </li>
                    <li><strong>Pec</strong>: prova@pec.it</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import '../styles/app.scss';
    .bg-main {
        background-color: $primaryText;
        h1 {
            color: $hover;
            text-shadow: 3px 2px 1px $body;
        }
    }

    ul {
        li{
            margin-right: 10px;
        }
    }
</style>