<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader
  }
}
</script>
<template>
  <AppHeader :navlinks="store.navLinks" />
  <main class="py-5">
    <router-view></router-view>
  </main>
</template>
<style lang="scss">
@import './styles/app.scss';
</style>