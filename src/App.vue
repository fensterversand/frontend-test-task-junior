<template>
    <Nav />
    <router-view />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Nav from './components/Nav.vue';
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
button {
    font-size: 15px;
    padding: 5px 8px;
}
code {
    color: #9d5e1a;
}
</style>
