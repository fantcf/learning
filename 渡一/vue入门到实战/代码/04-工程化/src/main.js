// 入口模块文件
// 创建vue实例
import Vue from '../../../../../vue.browser.js';
import App from './App.js';

new Vue({
    render: h => h(App)

    // 相当于下面这段：注册App组件，使用App组件，vue检查到有模板，就将模板解析为虚拟节点；
    // components: {App},
    // template: '<App/>'
}).$mount('#app')