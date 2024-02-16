import { createApp } from "vue";
import { createPinia } from "pinia";
import AOS from "aos";

import App from "./App.vue";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
