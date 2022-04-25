<template>
    <div class="pageList scrollbarStyle">
            <div class="contactData" v-for="(item ,index) in contactList" :key="index">
                <h2>{{item.name}}</h2>
                <p>{{item.gender}}</p>
                <p>{{item.number}}</p>
                <p>{{item.locale}}</p>
                <button v-on:click="deleteContact(index)">刪除</button>
            </div>
    </div>
</template>

<script>
import { mapActions , mapGetters } from "vuex";

export default {
    name: 'page3',
    data() {
        return {

        }
    },
    components: {

    },
    methods: {
        ...mapActions(['setContactList']),
        deleteContact(i){
            this.setContactList({
                method: 'delete',
                index: i,
            })
            console.log(this.contactList)
        },
    },

    created(){

    },
    computed: {
        ...mapGetters(['contactList']),
        test(){
            console.log(this.contactList)
        }
    },
}
</script>

<style lang="scss">
@import '~@/style/list.scss'
</style>

