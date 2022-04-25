<template>
    <div>
        <!-- <div class="main mainbefore"> -->
            <div>
                <router-link to="/main"></router-link>
                <router-view></router-view>
            </div>
        <!-- </div> -->
    </div>
</template>

<script>

export default {
    name: 'app',
    data() {
        return {
        }
    },
    components: {
    },
    methods: {
        
    },
    mounted() {
        this.$store.dispatch('getData')
    },
    created() {
        window.app = this;
    },
    computed: {

    },
}
</script>

<style>
body{
    margin: 0 auto;
}

.main {
    width: 500px;
    position: absolute;
    margin: auto;
    background-color: #f5e9ad;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 40px;
    box-shadow: 5px 5px 10px grey;
}

.mainbefore {
    text-align: center;
    padding: 25px;
    box-sizing: border-box;
}

.warning {
    color: red;
    margin: 0;
}

.bar {
    width: 250px;
    height: 40px;
    font-size: 22px;
    background-color: #cccccc;
    margin-top: 30px;
    border-radius: 5px;
}

.loginB {
    padding: 9px 25px;
    position: absolute;
    bottom: 25px;
    transform: translate(-50%, 0);
    border-radius: 10px
}

.mainafter > div:last-child {
    height: 100%;
    width: 70%;
}

.mainafter > div {
    float: left;
}

.baobuttons {
    box-sizing: border-box;
    padding: 50px 0;
    width: 30%;
}

.buttonsla {
    width: 100%;
    height: 50px;
    background-color: #e0b272;
}

.page {
    text-align: center;
}

.page .times {
    padding-top: 80px;
    overflow: hidden;
}

.extra {
    height: 80%;
}

</style>

// ref -> 將物件作標籤，類似ID的功能
// ex. <div ref = "fuuu"></div>
// 此物件(div)即成為一個名為"fuuu"的元素被匯入this.$ref中
// 可以藉由 this.$ref.fuuu 的方式讀取到此物件