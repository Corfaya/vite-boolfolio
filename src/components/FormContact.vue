<script>
import axios from 'axios';
import { store } from '../store';
export default {
    data() {
        return {
            store,
            name: '',
            surname: '',
            phone: '',
            email_address: '',
            content: '',
        }
    },
    methods: {
        send() {
            const info = {
                name: this.name,
                surname: this.surname,
                phone: this.phone,
                email_address: this.email_address,
                content: this.content,
            }
        }
    }
}
</script>
<template>
    <form method="POST" @submit.prevent="send">
        <div class="row">
            <div class="col-12 col-md-6">
                <label for="name" class="control-label">Name</label>
                <input v-model="name" type="text" name="name" id="name" placheholder="Your name" class="form-control">
            </div>
            <div class="col-12 col-md-6">
                <label for="surname" class="control-label">Surname</label>
                <input v-model="surname" type="text" name="surname" id="surname" placheholder="Your surname" class="form-control">
            </div>
            <div class="col-12 col-md-6">
                <label for="phone" class="control-label">Phone number</label>
                <input v-model="phone" type="text" name="phone" id="phone" placheholder="Phone number here" class="form-control">
            </div>
            <div class="col-12 col-md-6">
                <label for="email_address" class="control-label">Email</label>
                <input v-model="email_address" type="email" name="email_address" id="email_address" placheholder="Your email address" class="form-control">
            </div>
            <div class="col-12">
                <label for="Content" class="control-label">Your message:</label>
                <textarea v-model="content" name="content" id="content" class="form-control" placeholder="Space for your message"></textarea>
            </div>
            <div class="col-12">
                <button type="submit">Send</button>
            </div>
        </div>
    </form>
</template>
<style lang='scss' scoped>
@import '../styles/app.scss';
    button {
        background-color: $hover;
        color: $primaryText;
        box-shadow: 0 0 10px 5px rgb(70, 70, 70);
        transition: all 0.5s;
        &:hover {
            background-color: $primaryText;
            color: $header;
        }
    }
</style>