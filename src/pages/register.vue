<template>
    <div class="pageRegister">
        <div>
            <div class="contactSync">
                聯絡人：{{contactData.name}}<br>
                性別：{{contactData.gender}}<br>
                電話：{{contactData.number}}<br>
                儲存位置：{{contactData.locale}}<br>
            </div>
            <br>
            <div>
                <inputHodgepodge 
                    :inputType="1"
                    v-on:textUpdate="nameSync"
                    v-model="contactData.name"
                /><br>
                <inputHodgepodge 
                    :inputType="2"
                    v-on:genderUpdate="genderSync"
                    v-model="contactData.gender"
                /><br>
                <inputHodgepodge 
                    :inputType="1"
                    v-on:textUpdate="numberSync"
                    v-model="contactData.number"
                /><br>
                <inputHodgepodge 
                    :inputType="3"
                    v-on:localeUpdate="localeSync"
                    v-model="contactData.locale"
                />
            </div>           
            <br>
            <input type="submit" value="完成" @click="addContacts()"/>
            <!-- 完成</button> -->
        </div>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from "axios";
console.log('debug: axios', axios)
window.axios = axios;
import inputHodgepodge from '@/components/inputHodgepodge.vue'

export default {
    name: 'app',
    data() {
        return {
            contactData: {
                name: null,
                gender: null,
                number: null,
                locale: null,
            },
        }
    },
    components: {
        inputHodgepodge
    },
    methods: {
        ...mapActions(['setContactList']),
        addContacts(){
            let name = this.contactData.name,
                gender = this.contactData.gender,
                number = this.contactData.number,
                locale = this.contactData.locale;
            if ( name || gender || number || locale !== null ){
                this.setContactList({
                    method: 'add',
                    data: {
                        name,
                        gender,
                        number,
                        locale
                    }
                });
                this.contactData = {
                    name: null,
                    gender: null,
                    number: null,
                    locale: null,
                }
                alert('資料登錄完畢囉～')           
            } else {
                alert('請輸入完整資料！')
            }
        },
        nameSync(childtext) {
            this.contactData.name = childtext        
        },
        genderSync(childGender) {
            this.contactData.gender = childGender        
        },
        numberSync(childtext) {
            this.contactData.number = childtext        
        },
        localeSync(childLocale) {
            this.contactData.locale = childLocale
        }
    },
    created() {

    },
    computed: {

    },
}
</script>

<style lang="scss">
@import '~@/style/register.scss'
</style>