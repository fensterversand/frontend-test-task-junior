<template>
    <span v-html="'Task: ' + task.label" :class="[task.done && 'done']" />
    <div>
        <Button class="button" @click="remove(id)">&times;</Button>
        <input type="checkbox" id="checkbox" v-model="checked" @change="check($event)" />
    </div>
</template>

<script setup lang="ts">
import { useStore } from '../store';
import Button from './Button.vue'
const store = useStore();

const props = defineProps<{
    task: Task;
    id: number;
}>();

function remove(index: number) {
    store.commit('removeTask', index);
}

function check(e: any) {
    store.commit('completeTask', { id: props.id, isDone: e.target.checked });
}
</script>

<style scoped lang="scss">
span {
    display: block;
    margin-bottom: 10px;
}

.done {
    text-decoration-line: line-through;
}
.button {
    margin-right: 1rem;
}
</style>
