import { createApp } from 'vue';
import { store } from './store/store';
import App from './App.vue';

import './styles.css';

const app = createApp(App);
app.use(store);
app.mount('#app');
// createApp({
//     store: store,
//     render: h => h(App)
// }).mount('#app')
