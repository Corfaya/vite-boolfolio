<script>
import axios from 'axios';
import { store } from '../store';
import { errorMessages } from 'vue/compiler-sfc';
export default {
    data() {
        return {
            // bonus 2
            sending: false,
            sentSuccess: false,

            store,
            name: '',
            surname: '',
            phone: '',
            email_address: '',
            content: '',
            //bonus 1
            errors: ''
        }
    },
    methods: {
        send() {
            // bonus 2
            this.sending = true
            //bonus 1
            this.errors = {}

            const info = {
                name: this.name,
                surname: this.surname,
                phone: this.phone,
                email_address: this.email_address,
                content: this.content,
            }


            axios.post(`${store.url}${store.epContacts}`, info).then((res) => {
                if (res.data.success) {
                    this.name = '',
                        this.surname = '',
                        this.phone = '',
                        this.email_address = '',
                        this.content = ''
                    //bonus 2
                    this.sending = false
                    this.sentSuccess = true
                } else {
                    // bonus 1
                    this.errors = res.data.errors
                }
            })
        }
    }
}
</script>
<template>
    <form method="POST" @submit.prevent="send" class="my-5">
        <div class="row">
            <div class="col-12 col-md-6">
                <label for="name" class="control-label">Name</label>
                <input v-model="name" type="text" name="name" id="name" placheholder="Your name" class="form-control"
                    :class="errors.name ? 'is-invalid' : ''">
                <!-- bonus 1 -->
                <div v-for="(er, i) in errors.name" :key="`error-${i}`" class="alert error">
                    {{ er }}
                </div>
            </div>
            <div class="col-12 col-md-6">
                <label for="surname" class="control-label">Surname</label>
                <input v-model="surname" type="text" name="surname" id="surname" placheholder="Your surname"
                    class="form-control" :class="errors.surname ? 'is-invalid' : ''">
                <!-- bonus 1 -->
                <div v-for="(er, i) in errors.surname" :key="`error-${i}`" class="alert error">
                    {{ er }}
                </div>
            </div>
            <div class="col-12 col-md-6">
                <label for="phone" class="control-label">Phone number</label>
                <input v-model="phone" type="text" name="phone" id="phone" placheholder="Phone number here"
                    class="form-control" :class="errors.phone ? 'is-invalid' : ''">
                <!-- bonus 1 -->
                <div v-for="(er, i) in errors.phone" :key="`error-${i}`" class="alert error">
                    {{ er }}
                </div>
            </div>
            <div class="col-12 col-md-6">
                <label for="email_address" class="control-label">Email</label>
                <input v-model="email_address" type="email" name="email_address" id="email_address"
                    placheholder="Your email address" class="form-control"
                    :class="errors.email_address ? 'is-invalid' : ''">
                <!-- bonus 1 -->
                <div v-for="(er, i) in errors.email_address" :key="`error-${i}`" class="alert error">
                    {{ er }}
                </div>
            </div>
            <div class="col-12">
                <label for="Content" class="control-label">Your message:</label>
                <textarea v-model="content" name="content" id="content" class="form-control"
                    :class="errors.content ? 'is-invalid' : ''" placeholder="Space for your message"></textarea>
                <!-- bonus 1 -->
                <div v-for="(er, i) in errors.content" :key="`error-${i}`" class="alert error">
                    {{ er }}
                </div>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <!-- with bonus 2: -->
                <button type="submit" class="py-3 px-4 mt-5 mb-2" :disabled="sending">{{ sending ? 'Sending message...' :
                    'Send'}}</button>
            </div>
        </div>
    </form>
    <div class="alert fw-bolder" v-if="sentSuccess">
        Message sent successfully. We'll contact you soon!
    </div>
</template>
<style lang='scss' scoped>
@import '../styles/app.scss';

form {
    label {
        margin: 10px 0;
        color: $header;
    }
}

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

.alert {
    color: $hover;
    background-color: $primaryText;
    letter-spacing: 2px;
    text-align: center;
    &.error {
        color: #ff2828;
        border: 1px solid #ff2828;
    }
}
</style>