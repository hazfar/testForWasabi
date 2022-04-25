import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
// import home from './home.vue'
// import register from './register.vue'
// import list from './list.vue'
import store from './store/index.js'

Vue.use(vueRouter)
//window.Vue = Vue;

const router = new vueRouter({
	routes: [
		{
			path: '/main',
			component: r => require.ensure([], () => r(require('./pages/main.vue')), 'main'),
			name: 'main',
			children: [
				{
					path: '/home', 
					component: r => require.ensure([], () => r(require('./pages/home.vue')), 'main'),
					name: 'home' 
				},
				{
					path: '/register',
					component: r => require.ensure([], () => r(require('./pages/register.vue')), 'main'),
					name: 'register'
				},
				{
					path: '/list',
					component: r => require.ensure([], () => r(require('./pages/list.vue')), 'main'),
					name: 'list'
				},
				{
					path: '/*',
					redirect: {
						path: '/home'
					}
				},
			],
		},
	]
})

window.app = new Vue({
	el: '#app',
	render: h => h(App),
	created() {
	
	},
	router,
	store,
})

//MVC