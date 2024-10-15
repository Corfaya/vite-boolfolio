<script>
export default {
    props: {
        navlinks: Array
    }
}
</script>
<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="logo-box"><img src="../assets/logo-fake.jpg" alt="Logo"></div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item" v-for="(link, i) in navlinks" :key="i">
                <router-link class="nav-link" aria-current="page" :to="{name: link.name}">{{ link.label }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>
<style lang="scss">
    .logo-box {
        width: 50px;
        height: 50px;
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
    }
</style>