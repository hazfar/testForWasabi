<template>
    <div>
        <template v-for="(item, index) in testArray">
            <grid
                :backgroundProp="item.color"
                :area="item.area"
                :key="index"
            ></grid>
        </template>
    </div>
</template>

<script>
//import cloud from "@components/cloud.vue"
import grid from "@components/grid.vue"

//console.log(cloud)

export default {
    name: 'page1',
	data() {
		return {
            color: '#A1B',
            testArray: [
                {color:'#A1B' ,area:'瘴地' },
                {color:'#1BC' ,area:'海洋' },
                {color:'#5D8' ,area:'森林' },
                {color:'#FF2' ,area:'荒地' },
                {color:'#D62828' ,area:'火山' },
            ]
        }
	},
    components: {
        grid
    },
    created(){
        console.log(grid)
    }
}
</script>

<style>
</style>
