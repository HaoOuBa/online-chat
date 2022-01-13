import Vue from 'vue'
import App from './App.vue'
import router from './router'
import GoEasy from 'goeasy';
import Vant, { Lazyload } from 'vant';
import dayjs from 'dayjs';
import { appkey } from './config'
import 'vant/lib/index.css';
import './assets/less/normalize.less';

Vue.config.productionTip = false

const goEasy = GoEasy.getInstance({
  appkey,
  host: "hangzhou.goeasy.io",
  modules: ['pubsub']
});

Vue.prototype.goEasy = goEasy;
Vue.prototype.pubSub = goEasy.pubsub;


Vue.filter('format', (val, type) => dayjs(val).format(type));

Vue.use(Vant);
Vue.use(Lazyload, {
  loading: require('./assets/img/loading.gif'),
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
