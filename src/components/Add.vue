<template>
    <div>
        <h1>ADD TASK</h1>

        <div class="">

        </div>

        <label>Task:</label>
        <input type="text" id="newTaskLabel">

        <br>
        <button type="button" @click="saveTask()">Save</button>
    </div>
</template>

<script setup lang="ts">
import { useStore }  from '../store';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

function saveTask() {
    const el = document.querySelector('#newTaskLabel') as HTMLInputElement;
    store.commit('addTask', { label: el.value, done: false } as Task);
    router.push({ name: 'list' });
}
</script>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

button {
    margin: 15px;
}
</style>
