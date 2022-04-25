<template>
    <div>
        <input 
            v-show="inputType === 1"
            v-model="text"
            @input="textUpdate"
            type="text" 
        />
        <div 
            v-show="inputType === 2"
        >
            <input
                type="radio" 
                v-model="gender"
                @change="genderUpdate"
                value="男" /><label>男</label>
            <input
                type="radio"
                v-model="gender"
                @change="genderUpdate" 
                value="女" /><label>女</label>
        </div>
        <select
            v-show="inputType === 3"
            v-model="locale"
            @click="localeUpdate"
        >
            <option>SIM卡</option>
            <option>裝置</option>
            <option>雲端</option>
        </select>
        <input
            v-show="inputType === 4" 
            type="submit" 
            value="完成" 
            @click="resetData()"
        />

    </div>
      
</template>

<script>

export default {
    name: 'inputHodgepodge',
    props: {
        inputType: {
            type: [String, Number],
        },
    },
    data() {
        return {
            text: null,
            gender: null,
            locale: null,
        }
    },
    components: {
    },
    methods: {
        textUpdate($event){
            this.$emit( 'textUpdate', this.text )
        },
        genderUpdate($event) {
            this.$emit( 'genderUpdate', this.gender )
        },
        localeUpdate($event) {
            this.$emit( 'localeUpdate', this.locale )
        },
        resetData($event) {
            this.text = null
            this.gender = null
            this.locale = null
        }
    },
    created() {
    },
    computed: {

    },
}
</script>

<style>
</style>