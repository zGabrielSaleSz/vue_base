import { createApp } from 'vue';
import { store } from './store/store';
import router from './router/index';
import App from './App.vue';

import './styles.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
// createApp({
//     store: store,
//     render: h => h(App)
// }).mount('#app')
