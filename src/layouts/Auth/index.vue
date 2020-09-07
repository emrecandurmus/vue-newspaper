<template>
    <div class="container">
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<script>
import { Header, Footer } from "../../components";

export default {
    name: "Auth",
    components: {
        Header,
        Footer,
    },
};
</script>