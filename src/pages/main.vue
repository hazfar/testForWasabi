<template>

    <div class="container">
        <div class="phone">
            <div class="content">
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                        <ul id="menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Info</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <div class="routerView">
                    <router-link to="/register"></router-link>
                    <router-view/>
                </div>
                <!-- 這邊可以放page -->
                <nav class="footer">
                    <ul>
                        <!-- <li><a href="#home">Home</a></li> -->
                        <li><router-link :to="'/home'"><img class="bottonImage" src="../images/home.png"></router-link></li>
                        <!-- <li><a href="#news">Register</a></li> -->
                        <li><router-link :to="'/register'"><img class="bottonImage" src="../images/addContact.png"></router-link></li>
                        <!-- <li><a href="#contact">List</a></li> -->
                        <li><router-link :to="'/list'"><img class="bottonImage" src="../images/contactList.png"></router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
// import nightImage from "@/images/night.jpg";
// console.log('debug: nightImage', nightImage)

export default {
    name: 'app',
    data() {
        return {
            dalist: [
                {placeholder:'e-mail' ,value:'',warning: false,},
                {placeholder:'password' ,value:'',warning: false,},
            ],
            sidelist: [
                {name:'Home' ,checked: 1 ,link:'/home'},
                {name:'Contact List' ,checked: 0 ,link:'/page2'},
                {name:'To Do List' ,checked: 0 ,link:'/page3'},
                {name:'On Sale List' ,checked: 0 ,link:'/page4'}
            ],
            hasClass4: true,
            daytime: true,
            // nightImage: require('@/images/night.jpg'),
            // styles: {
            //     backgroundImage: `url(${nightImage})`,
            // }
        }
    },
    components: {
    },
    methods: {
        // switchla(i){
        //     if (this.sidelist[i].checked === 0) {
        //         document.querySelector(".main").style.height = '600px';                
        //     } else {
        //         document.querySelector(".main").style.height = '300px';                
        //     }        
        // },
        onChangeStyle(h) {
            console.log('debug: onChangeStyle -> h', h)
            this.daytime = (h < 6 || h > 17) ? false : true ;
            // if (h < 6 || h > 17) {
                
            //     // this.$parent.$refs.page
            //     // this.$refs.page.style.backgroundImage = "url('night.jpg')";
            //     // this.$refs.page.style.color = "white";
            // } else {
            //     // this.$refs.page.style.backgroundImage = "url('daytime.jpg')";
            //     // this.$refs.page.style.color = "black";        
            // };
        },
        getHigher(param){
            this.hasClass4 = param;
            
        }
    },
    created() {
        // if (!this.logged) {
        //     this.$router.push('/login')
        // }
    },
    computed: {
        ...mapGetters(['logged']),
        classList() {
            return [
                'main',
                'mainafter',
                {
                    class4: this.hasClass4,
                },
            ]
        },
        // styles(i) {
        //     const nightImage = require('@/images/night.jpg');
        //     const daytimeImage = require('@/images/daytime.jpg');
        //     return {
        //         backgroundImage: `url(${this.daytime? daytimeImage : nightImage})`,
        //     };
        // },
    },
}
</script>

<style lang="scss">
@import '~@/style/main.scss'
</style>