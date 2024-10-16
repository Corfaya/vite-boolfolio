<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        getProjectDetails(){
            let projUrl = `${url}${epProjects}`
            axios.get(`${projUrl}${this.$route.params.slug}`).then((res) => {
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