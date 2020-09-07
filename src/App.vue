<template>
    <div id="app">
        <auth-layout>
            <router-view />
        </auth-layout>
    </div>
</template>

<script>
import { Auth } from "./layouts";
export default {
    name: "App",
    components: {
        "auth-layout": Auth,
    },
};
</script>

<style lang="scss">
@import "./assets/styles/app.scss";
</style>
