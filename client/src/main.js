// import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import FoodItem from './components/FoodItem.vue';
import CompOne from './components/CompOne.vue';

const app = createApp(App);
app.component('food-item', FoodItem);
app.component('comp-one', CompOne)
app.mount('#app');
