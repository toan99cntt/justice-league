import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from '@/router'
import './assets/main.css'
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.sass";
import "./styles/app.scss";
import quasarUserOptions from './quasar-options';

import CommonIcon from './components/common/CommonIcon.vue'
import CommonInput from './components/common/CommonInput.vue'
import CommonTab from './components/common/CommonTab.vue'

const app = createApp(App);

app.component("CommonIcon",  CommonIcon);
app.component("CommonInput",  CommonInput);
app.component("CommonTab",  CommonTab);

app
.use(createPinia())
.use(router)
.use(Quasar, quasarUserOptions)
.mount("#app");
