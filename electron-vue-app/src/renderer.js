import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";
import Popper from "vue3-popper";

import "@imengyu/vue3-context-menu/lib/vue3-context-menu.css";
import ContextMenu from "@imengyu/vue3-context-menu";

const app = createApp(App);

const pinia = createPinia();

app.component("Popper", Popper);
app.use(pinia);
app.use(ContextMenu);
app.mount("#app");
