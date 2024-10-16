<script>
export default {
    props: {
        navlinks: Array
    }
}
</script>
<template>
    <nav class="navbar navbar-expand-lg nav-head">
        <div class="container-fluid">
            <div class="logo-box">
                <img src="../assets/logo-fake.jpg" alt="Logo">
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(link, i) in navlinks" :key="i">
                        <router-link class="fw-bolder text-decoration-none mx-3 t-18" aria-current="page" :to="{ name: link.name }">{{ link.label
                            }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style lang="scss">
@import '../styles/app.scss';
.nav-head {
    box-shadow: 0 2px 10px rgb(66, 66, 66);
}
.logo-box {
    width: 50px;
    height: 50px;
    margin-right: 30px;

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
}
ul {
    li {
        a {
            color: $primaryText;
            &:hover {
                color: $hover;
            }
        }
    }
}
</style>