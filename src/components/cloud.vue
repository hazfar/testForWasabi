<template>
    <div class="cloud-container">
        <div class="cloud" :style="cloudStyle"></div>
    </div>
</template>

<script>
export default {
    name: 'cloud',
    props:[ "backgroundProp", "shadowProp" ],
	data() {
		return {
            backgroundColor: this.backgroundProp || '#3B9',
            shadowColor: this.shadowProp || '#000',
            //style: 'style',
		}
    },
    created(){
        // console.log(cloud)
        console.log('debug: created -> backgroundProp', this.backgroundProp)
        //this.backgroundProp = this.backgroundProp || '#3B9'
    },
    computed:{
        cloudStyle(){
            return{
                background: this.backgroundColor,
                boxShadow: `-2em 1.5em 0 0em ${ this.backgroundColor },
                            0.8em 2em 0 0em ${ this.backgroundColor },
                            0 0 0 0.375em ${ this.shadowColor }, 
                            -2em 1.5em 0 0.38em ${ this.shadowColor },
                            0.8em 2em 0 0.38em ${ this.shadowColor }`,
            }
        },
    }
}
</script>

<style scoped>
.cloud-container{
    border-color: #121;
    border-width: 1em;
    border-style: solid;
    box-sizing: border-box;
    /*float: left;*/
    width: 100%;
    height: 66%;
}
.cloud {
    position: relative;
    z-index: 1;
    top: 40%;
    left: 55%;
    width: 3.6875em;
    height: 3.6875em;
    margin: -1.84375em;
    border-radius: 50%;
}
</style>
