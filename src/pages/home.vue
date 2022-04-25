<template>
    <div class="pageHome">
        <div class="times">
            <p>{{times.timeGetter}}</p>
        </div>
        <br>
        <div class="times">
            <p class="date">{{times.dateGetter}}　{{times.weekDayGetter}}</p>
        </div>
            
    </div>
</template>

<script>
export default {
    name: 'page1',
    data() {
        return {
            timer: null,
            times: {
                timeGetter: '',
                dateGetter: '',
                weekDayGetter: ''
            },
            weekDays: [ 'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.',]
        }
    }, 
    components: {

    },
    methods: {
        timefirst() {
                let y = new Date(),
                    d = y.toLocaleDateString(),
                    t = y.toLocaleTimeString('en', {hour: 'numeric', minute:'2-digit'}),
                    wd = y.getDay('en');
                this.times.dateGetter = d;
                this.times.timeGetter = t;
                this.times.weekDayGetter = this.weekDays[wd];
            },
        getTime() {
            let my = this
            this.timer = setInterval(this.timefirst, 1000);
        },
    },

    created(){
        this.timefirst();
        this.getTime();
    },
    mounted(){
        window.page1 = this
    },
    computed: {

    },
}
</script>

<style lang="scss">
@import '~@/style/home.scss'
</style>