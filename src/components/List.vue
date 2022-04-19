<template>
    <div>
        <h1>Todo list</h1>

        <ul>
            <li v-for="(task, idx) in tasks" :key="idx" :class="[task.done && 'done']">
                <span v-html="'Task: ' + task.label" />
                <div>
                    <button @click="remove(idx)">&times;</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '../store';

const store = useStore();

const tasks = computed((): Task[] => store.getters.tasks);

function remove(index: number) {
    store.commit('removeTask', index);
}
</script>

<style scoped lang="scss">
ul {
    display: flex;
    list-style-type: none;
    padding: 0 15px;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    padding-inline-start: 0;

    li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 200px;
        border: 1px dashed #9d5e1a;

        padding: 10px;

        span {
            display: block;
            margin-bottom: 10px;
        }

        &.done {
            border: 1px dashed #42b983;
            span {
                text-decoration-line: line-through;
            }
        }
    }
}
</style>
