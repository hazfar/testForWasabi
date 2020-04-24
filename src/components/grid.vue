<template>
    <div class="grid">
        <cloud :backgroundProp="backgroundProp"></cloud>
        <span>{{ area }}</span>
    </div>
</template>

<script>
import cloud from "@components/cloud.vue"

export default {
    name: 'grid',
    props:[
        "backgroundProp",
        "shadowProp",
        "area",
    ],
	data() {
		return {
            //backgroundColor: this.backgroundProp || '#3B9',
            //shadowColor: this.shadowProp || '#000',
            //style: 'style',
		}
    },
    created(){
        // console.log(cloud)
        console.log('debug: created -> backgroundProp', this.backgroundProp)
        //this.backgroundProp = this.backgroundProp || '#3B9'
    },
    components: {
        cloud
    }
}
</script>

<style scoped>
.grid{
    width: 12em;
    height: 16em;
    text-align: center;
    float: left;
}
span{
    font-family: auto;
    font-weight: 600;
    font-size: 2em;
}
</style>
