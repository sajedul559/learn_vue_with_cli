import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Globaly filter created
Vue.filter('snippet',val=>{
  if(!val || typeof(val) != 'string') return ''
  val = val.slice(0,80)
  return val
})
new Vue({
  render: h => h(App),
}).$mount('#app')
