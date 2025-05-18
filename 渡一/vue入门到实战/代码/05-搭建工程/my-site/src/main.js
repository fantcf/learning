// 入口文件
import Vue from 'vue'
import App from './App.vue'
import '@/styles/global.less'
Vue.config.productionTip = false
import router from './router'

Vue.use(router)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
