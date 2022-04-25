import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios';

vue.use(vuex);

const store = new vuex.Store({
	state: {
		contactList: [
			{
				"name": "小胖",
				"gender": "男",
				"number": "0997749833",
				"locale": "SIM卡"
			},
			{
				"name": "Lily",
				"gender": "女",
				"number": "0992125851",
				"locale": "SIM卡"
			},
			{
				"name": "菌哥",
				"gender": "男",
				"number": "0990236571",
				"locale": "雲端"
			}
		],
	},
	getters:{
		contactList: state => state.contactList,
	},
	actions: {
		setContactList({commit} ,payload) {
			commit('setContactList' ,payload)
		},
		// getData({commit} ,payload) {
		// 	axios
		// 		.get('https://private-aef8a-hazfar.apiary-mock.com/questions')
		// 		.then(result => {
		// 			console.log('debug: getData -> result', result)
		// 			this.state.contactList = result
		// 		}
		// 	)
		// },
	},
	mutations: {
		setContactList(state ,payload) {
			if ((payload || {}).method === 'add') {
				state.contactList.push(payload.data);
			} else if (!isNaN(+(payload || {}).index)) {
				state.contactList.splice(payload.index, 1);
			}
		},
	},
})

export default store;