import Vue from 'vue'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app';

Vue.config.productionTip = false
Vue.config.ignoredElements = ['micro-app']

new Vue({
  render: h => h(App),
}).$mount('#app')

microApp.start({
  plugins: {
    modules: {
      // appName即应用的name值
      app1: [
        {
          loader(code) {
            // if (process.env.NODE_ENV === 'development') {
              // 这里 /micro-app/vite/ 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(/(from|import)(\s*['"])(\/micro-app\/vite\/)/g, all => {
                return all.replace('/micro-app/vite/', 'http://localhost:3002/micro-app/vite/');
              });

              code = code.replace('customElements.define(overlayId, ErrorOverlay);', '');
            // }

            return code;
          },
        },
      ],
      app2: [
        {
          loader(code) {
            return code;
          },
        },
      ],
    },
  },
});
