import { createApp } from "vue";
import { router } from "./router";
import { rootStore } from "./store";
import App from "./App.vue";
import "swiper/css";

const app = createApp(App);
app.use(router);
app.use(rootStore);
app.mount("#app");
