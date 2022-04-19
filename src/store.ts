import { InjectionKey }                                 from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import createPersistedState                             from 'vuex-persistedstate';

export interface State {
    tasks: Task[];
}

export const key: InjectionKey<Store<State>> = Symbol('todo');

const tasks: Task[] = [
    {
        label: 'Make it possible to remove tasks',
        done: true,
    },
    {
        label: 'Make it possible to mark tasks as finished',
        done: false,
    },
    {
        label: 'Make it possible to clear the whole list',
        done: false,
    },
    {
        label: 'Create a default view in the <code>List</code> component for when the todo list is empty',
        done: false,
    },
    {
        label: 'Automatically focus on the input field when navigating to "NEW TASK"',
        done: false,
    },
    {
        label: 'Save new task when pressing enter in the input field',
        done: false,
    },
    {
        label: 'Add some tests (optional)',
        done: false,
    },
];

export const store = createStore<State>({
    devtools: import.meta.env.DEV,
    strict: true,
    plugins: [
        createPersistedState({ storage: window.localStorage })
    ],
    state() {
        return {
            tasks,
        }
    },
    getters: {
        tasks(state) {
            return state.tasks;
        }
    },
    mutations: {
        addTask(state, task: Task) {
            state.tasks.push(task);
        },
        removeTask(state, index: number) {
            state.tasks[index] && state.tasks.splice(index, 1);
        },
    },
});

export function useStore() {
    return baseUseStore(key);
}

export default store;
