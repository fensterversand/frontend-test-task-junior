<template>
    <div>
        <h1>ADD TASK</h1>


        <label>Task:</label>
        <input ref="taskInput" @keyup.enter="saveTask" type="text" id="newTaskLabel" />

        <br />
        <Button @click="saveTask()">Save</Button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from '../store';
import { useRouter } from 'vue-router';
import Button from './Button.vue'

const store = useStore();
const router = useRouter();

const taskInput = ref();

onMounted(() => {
    taskInput.value.focus();
});

function saveTask() {
    const { value } = taskInput.value;
    if (value.length === 0) {
        taskInput.value.focus();
    } else {
        store.commit('addTask', { label: value, done: false } as Task);
        router.push({ name: 'list' });
    }
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
