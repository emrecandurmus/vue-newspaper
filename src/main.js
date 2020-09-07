import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routesModel from './routes'

Vue.config.productionTip = false

//Router configration
Vue.use(VueRouter)
const router = new VueRouter(routesModel)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
