import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// These processes are required to valid Pinia
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
