import Vue from 'vue'
import App from './App.vue'

//window.Vue = Vue;

window.app = new Vue({
	el: '#app',
	render: h => h(App),
	created() {
		//console.log(132)
	}
})
