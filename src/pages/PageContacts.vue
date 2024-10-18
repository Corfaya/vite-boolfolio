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
                <iframe class="my-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20728.85340947669!2d-77.47462033862145!3d18.190663524294063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edbba1b5c17ad65%3A0xbfcdccfe20624462!2sSilent%20Hill%2C%20Giamaica!5e1!3m2!1sit!2sit!4v1729238060166!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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