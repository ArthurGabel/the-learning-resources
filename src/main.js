import { createApp } from 'vue';

import App from './App.vue';
import baseCard from './components/UI/BaseCard.vue';
import baseButton from './components/UI/BaseButton.vue'
import errorAlert from './components/UI/ErrorAlert.vue'

const app = createApp(App);

app.component('base-card', baseCard);
app.component('base-button', baseButton);
app.component('error-alert', errorAlert);

app.mount('#app');
