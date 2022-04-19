<template>
    <nav>
        <div class="brand">Todo App</div>
        <ul>
            <li><router-link :to="{ name: 'list' }">Show tasks</router-link></li>
            <li><router-link :to="{ name: 'add' }">New task</router-link></li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 1px 5px #5b5b5b;
    padding: 0 5px;
    .brand {
        flex-shrink: 1;
        font-size: 21px;
        font-weight: 600;
        padding: 5px;
    }
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style-type: none;
        li {
            display: block;
            padding: 0 10px;
            &:not(:last-child) {
                border-right: 2px solid #5b5b5b;
            }
            a {
                text-decoration: none;
                color: #42b983;
                font-weight: 600;
                font-size: 18px;
                text-transform: uppercase;
            }
        }
    }
}
</style>
