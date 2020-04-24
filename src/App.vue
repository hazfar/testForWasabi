<template>
	<div id="app">

        <button v-on="{
            mousedown: numberplus,
            mouseup: stop,
        }">
            ＋
        </button>

        <span>
            {{mdfklist.length}}
        </span>

        <button v-on="{
            mousedown: numberminus,
            mouseup: stop,
        }">
            －
        </button>

        <button v-on="{
            mousedown: numberlaplus,
            mouseup: stop,
        }">
            ＋
        </button>

        <span>
            {{numberla}}
        </span>

        <button v-on="{
            mousedown: numberlaminus,
            mouseup: stop,
        }">
            －
        </button>

        <p>{{ jiazong }}</P>

        <table>
            <div>
                <tr>
                    <th>姓名</th>
                    <th>職務</th>
                    <th>薪資</th>
                </tr>
            </div>
            <table>
                <tr
                    v-for="({ job, pay }, key) in mdfklist"
                    :key="key"
                >
                    <td>廖信謀</td>
                    <td>{{ job }}</td>
                    <td>{{ pay }}</td>
                </tr>
            </table>
        </table>
	</div>
</template>

<script>
import page1 from './pages/page1'

export default {
    name: 'app',
    data() {
        return {
            numberla: 0,
            mdfklist:[],
            timer: null,
        }
    },
    components: {
        // page1
    },
    methods: {
        numberplus() {
            if( this.mdfklist.length < 20) {
                // this.numberla += 1;
                this.timer = setInterval(() => {
                    if( this.mdfklist.length < 20) {
                        let pay = this.payla();
                        let job = this.jobla();
                        this.mdfklist.push({
                            job,
                            pay,
                        });
                    } else {
                        clearInterval(this.timer);
                        alert("別再按了，已經太多人了");
                    }
                }, 100);
            } else {
                alert("別再按了，已經太多人了")
            }
        },
        numberminus() {
            if(this.mdfklist.length) {
                // this.numberla -= 1;
                this.timer = setInterval(() => {
                    this.mdfklist.pop();
                },100);    
            }
            else {
                alert("別再按了，已經沒人了")
            }
        },
        stop() {
            clearInterval(this.timer);
        },
        numberlaplus() {
            this.timer = setInterval(() => {this.numberla++},100)
        },
        numberlaminus() {
            this.timer = setInterval(() => {this.numberla--},100)
        },
        payla() {
            return Math.max(Math.floor((Math.random() * 100)*1000),25000)
        },
        jobla() {
            var joblist = [
                "人資", "行銷", "企劃", "法務", "餐飲", "旅遊", "物流", "營建", "醫療", "學術", "軍警", "金融", "資訊", "軟體", "品管", "環衛"
                ],
            longla = joblist.length,
            fkla = Math.floor(Math.random() * longla);
            return joblist[fkla];
        },
    },
    computed: {
        LoopLength() {
            return Math.min(Math.abs(+this.numberla),20);
        },
        jiazong() {
            return this.numberla + this.mdfklist.length;
        }
        // jobla() {
        //     let long = this.joblist.length,
        //         i = Math.floor(Math.random() * long);
        //     return this.joblist[i];
        // }
    },
    // mixins: [
    //     SomeVue
    // ],
    // created(){
    // }
}
</script>

<style>
body{
    margin: 0;
}

</style>