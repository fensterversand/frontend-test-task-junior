import { createApp }                      from 'vue'
import App                                from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import store, { key }                     from './store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'list',
            path: '/list',
            alias: '',
            component: () => import('./components/List.vue'),
        },
        {
            name: 'add',
            path: '/add',
            component: () => import('./components/Add.vue'),
        },
    ],
})

const app = createApp(App);

app.use(router);
app.use(store, key);

app.mount('#app')
