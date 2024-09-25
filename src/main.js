import { createApp } from 'vue';  // 确保你使用的是 Vue 3
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './style/defalut.css';
import i18n from './i18n';
import { icon } from './icons';  // 引入 icon 对象

// 创建 Vue 实例
const app = createApp(App);

// 将 icon 注册为全局属性
app.config.globalProperties.$icon = icon;

// 安装插件和挂载应用
app.use(store).use(router).use(i18n).mount('#app');