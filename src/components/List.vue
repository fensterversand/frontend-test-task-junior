<template>
    <div>
        <h1>Todo list</h1>
        <div v-if="tasks.length > 0">
            <div>
                <Button @click="clearList" >Clear list</Button>
            </div>
            <ul>
                <li v-for="(task, idx) in tasks" :key="idx" :class="[task.done && 'done']">
                    <Task :task="task" :id="idx" />
                </li>
            </ul>
        </div>

        <div v-else>
            <h2>Ooops looks like your todo list is empty</h2>
            <img v-bind:src="image" alt="" class="image" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../store';
import Task from './Task.vue';
import Button from './Button.vue';
import image from '../assets/images/empty-list.png';

const store = useStore();

const tasks = computed((): Task[] => store.getters.tasks);

const clearList = () => {
    store.commit('clearList');
};

const cb = (e: any) => {
    console.log('callback', e);
};
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

        &.done {
            border: 1px dashed green;
        }
    }
}

.image {
    max-width: 50rem;
}
</style>
