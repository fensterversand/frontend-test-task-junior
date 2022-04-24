<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.button {
    color: #42b983;
    background: #fff;
    outline: none;
    border: 1px solid #42b983;
    border-radius: 4px;

    &:hover {
        color: #fff;
        background: #42b983;
        cursor: pointer;
        transition: all .3s linear;
    }
}
</style>
