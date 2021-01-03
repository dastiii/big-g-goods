import axios from "axios";
import Vue from "vue";

let domain =
  process.env.NODE_ENV === "production"
    ? "api.big-goods.trade"
    : "api.big-goods.test";

axios.defaults.baseURL = `https://${domain}/`;

Vue.prototype.$http = axios;
