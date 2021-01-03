import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './axios';

import '@/fonts.css';
import '@/app.css';

Vue.config.productionTip = false;

Vue.prototype.$formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
