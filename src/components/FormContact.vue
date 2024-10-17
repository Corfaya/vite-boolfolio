<script>
import axios from 'axios';
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        // send() {
        //     const info = {
                
        //     }
        // }
    }
}
</script>
<template>
    <form method="POST" @submit.prevent="send">
        <div class="row">
            <div class="col-12 col-md-6">
                <label for="name" class="control-label">Name</label>
                <input type="text" name="name" id="name" placheholder="Your name" class="form-control">
            </div>
            <div class="col-12 col-md-6">
                <label for="surname" class="control-label">Surname</label>
                <input type="text" name="surname" id="surname" placheholder="Your surname" class="form-control">
            </div>
            <div class="col-12 col-md-6">
                <label for="phone" class="control-label">Phone number</label>
                <input type="text" name="phone" id="phone" placheholder="Phone number here" class="form-control">
            </div>
            <div class="col-12 col-md-6">
                <label for="email_address" class="control-label">Email</label>
                <input type="text" name="email_address" id="email_address" placheholder="Your email address" class="form-control">
            </div>
            <div class="col-12">
                <label for="Content" class="control-label">Your message:</label>
                <textarea name="content" id="content" class="form-control" placeholder="Space for your message"></textarea>
            </div>
        </div>
    </form>
</template>
<style lang='scss' scoped>

</style>