<script>
import { store } from '../store';
import axios from 'axios';
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        getProjectDetails(){
            let projUrl = `${store.url}${store.epProjects}`
            axios.get(`${projUrl}/${this.$route.params.slug}`).then((res) => {
                console.log(res)
            })
        }
    },
    created() {
        this.getProjectDetails()
    }
}
</script>
<template>
    
</template>
<style lang="scss" scoped>
    
</style>