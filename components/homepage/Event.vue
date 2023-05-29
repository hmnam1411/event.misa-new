<template>
    <div>
        <Banner :getEvent="this.getEvent" />

        <FilterHome @start-date="dateValue" @value-topic="valueTopic" @select-label="updateLabel" :value="this.value"
            :eventUpcoming="this.eventUpcoming" @value-search="updateValue" @handle-search="handleSearch" />

        <!-- upcoming -->
        <div class="upcomming-event">
            <div class="container">
                <div class="row">
                    <h2 class="event-group-title text-center">Sắp diễn ra</h2>
                    <div class="list-event-group" v-for="(item, index) in eventUpcoming" :key="index">
                        <div class="aimarketing-form-embed-code" v-html="item.aiMarketingCode"></div>
                        <div class="event-item">
                            <a :href="buildUrl(item)" class="event-item-thumb">
                                <img :src="item.Avatar" alt="Amis Event" />
                                <div class="event-item-topic">
                                    {{ item.Topic }}
                                </div>
                            </a>
                            <div class="event-item-content">
                                <div class="event-item-content-wrap">
                                    <a :href="buildUrl(item)" @click="handleClickItem(item)">
                                        <h3 class="event-item-name">
                                            {{ item.EventName }}
                                        </h3>
                                    </a>
                                    <div class="event-item-sumary">
                                        {{ item.Summary }}
                                    </div>
                                </div>
                                <div class="cls-button-detail">
                                    <a :href="buildUrl(item)" :title="item.name"> Xem chi tiết </a>
                                </div>
                            </div>
                            <div class="event-item-info">
                                <div class="event-item-info-head">
                                    <div class="event-item-time">{{ item.StartDate }}</div>
                                    <div class="event-item-address">{{ item.Address }}</div>
                                    <div class="event-item-slot">{{ item.Slot }}</div>
                                    <div class="event-item-cost">{{ item.Cost }}</div>
                                </div>
                                <div class="cls-event-button">
                                    <a :href="scrollRegister(item)" class="btn-register">Đăng ký ngay </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <el-pagination :page-size="pagin.pageSize" background :item="originUpcoming" layout="prev, pager, next"
                        :total="this.originUpcoming.length" @current-change="onPageChangeUpcoming">
                    </el-pagination>

                </div>
            </div>
        </div>
        <!-- end upcoming -->

        <!-- finish -->
        <div class="finish-event">
            <div class="container">
                <div class="row">
                    <h2 class="event-group-title text-center">Đã diễn ra</h2>
                    <div class="list-event-group" v-for="(item, index) in eventFinish" :key="index">
                        <div class="event-item">
                            <a class="event-item-thumb" href="">
                                <img :src="item.Avatar" alt="Amis Event" />
                                <div class="event-item-topic">{{ item.topic }}</div>
                            </a>
                            <div class="event-item-content">
                                <div class="event-item-content-wrap">
                                    <nuxt-link :to="buildUrl(item)">
                                        <h3 class="event-item-name">
                                            {{ item.EventName }}
                                        </h3>
                                    </nuxt-link>
                                    <div class="event-item-sumary">
                                        {{ item.Summary }}
                                    </div>
                                </div>
                                <div class="cls-button-detail">
                                    <a href=""> Xem chi tiết </a>
                                </div>
                            </div>
                            <div class="event-item-info">
                                <div class="event-item-info-head">
                                    <div class="event-item-time">{{ item.time }}</div>
                                    <div class="event-item-address">Zoom Online</div>
                                    <div class="event-item-slot">500</div>
                                    <div class="event-item-cost">Miễn phí</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <el-pagination :page-size="pagin.pageSize" background :item="originFinish" layout="prev, pager, next"
                        :total="this.originFinish.length" @current-change="onPageChangeFinish">
                    </el-pagination>
                </div>
            </div>
        </div>
        <!-- end finish -->


    </div>
</template>
  
<script>
import { mapActions } from 'vuex';

import FilterHome from './FilterHome.vue';
import Banner from './Banner.vue'

import axios from 'axios'
const myaxios = axios.create({
    // ...
})
myaxios.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    // ...
})

export default {

    components: {
        FilterHome,
        Banner
    },

    data: function () {
        return {
            upcomingUpdate: [],
            search: null,
            eventUpcoming: [],
            eventFinish: [],
            pagin: {
                page: 1,
                pageSize: 3, // muốn bao nhiêu item/ trang sửa số này là tự ăn
            },

            dateFilter: '',
            value: '',
            label: '',
            topics: '',
            getEvent: [],

            originUpcoming: [],

            originFinish: [],

        }
    },

    methods: {
        ...mapActions({
            apiGetAllEvent: 'apiGetAllEvent',
        }),

        // 10/03/2023 HMNAM
        // Filter dropdown and search input when click button search
        handleSearch() {

            this.eventUpcoming = this.originUpcoming.filter(function (dt) {
                // console.log('StartDate', dt.StartDate);
                // console.log('dateFilter', this.dateFilter);
                console.log('compare: this.dateFilter <= StartDate ', this.dateFilter <= dt.StartDate);

                return dt.StartDate >= this.dateFilter;
            }, this);

            // if (this.value == '' && this.label == '') {
            //     console.log('ngu 1');
            //     this.eventUpcoming = this.originUpcoming
            //     this.eventFinish = this.originFinish
            //     // console.log('if: ', this.eventUpcoming);
            // } else if (this.label == '') {
            //     console.log('ngu 2');
            //     this.eventUpcoming = this.originUpcoming.filter(item => {
            //         return item.EventName.toLowerCase().includes(this.value.toLowerCase())
            //     })

            //     this.eventFinish = this.originFinish.filter(item => {
            //         return item.EventName.toLowerCase().includes(this.value.toLowerCase())
            //     })
            // } else {
            //     console.log('ngu vl');

            //     // Topic dropdown filter
            //     this.eventUpcoming = this.originUpcoming.filter(function (el) {
            //         console.log('value topic: ', this.label);
            //         // khi nào có data thay eventID = Topic
            //         return el.EventID == this.label;
            //     }, this);

            //     this.eventFinish = this.originFinish.filter(function (ep) {
            //         // khi nào có data thay eventID = Topic
            //         return ep.EventID == this.label;
            //     }, this);

            //     // Input search
            //     console.log('input: ', this.value);

            //     this.eventUpcoming = this.eventUpcoming.filter(item => {
            //         return item.EventName.toLowerCase().includes(this.value.toLowerCase())
            //     })

            //     this.eventFinish = this.eventFinish.filter(item => {
            //         return item.EventName.toLowerCase().includes(this.value.toLowerCase())
            //     })
            // }
        },

        dateValue(date) {
            this.dateFilter = date
        },

        valueTopic(topics) {
            this.topics = topics
        },

        updateLabel(label) {
            this.label = label
        },

        updateValue(value) {
            this.value = value
        },

        handleSizeChange(val) {
            console.log(`${val} items per page`);
        },

        handleCurrentChange(val) {
            console.log(`current page: ${val}`);
        },

        myDropdown() {
            document.getElementById('myDropdown').classList.toggle('show')
        },

        handleClickItem(item) {
            console.log('item', item)
        },

        // Phân trang sự kiện sắp diễn ra
        onPageChangeUpcoming(val) {
            console.log(`current page: ${val}`);
            // 09/03/2023 HMNAM 
            // Phân trang event
            let page = this.pagin.page
            console.log('page: ', page);
            let startP = (page * this.pagin.pageSize) - this.pagin.pageSize
            let endP = this.pagin.page * this.pagin.pageSize
            let itemSl = endP + 1
            let valPage = val
            // console.log('value: ', val);

            if (val == 1) {
                this.eventUpcoming = this.originUpcoming.slice(0, this.pagin.pageSize)
            } else {
                this.eventUpcoming = this.originUpcoming.slice(endP, itemSl)
            }
            // console.log('res', res.data);
            // let slice = this.getEvent.slice(0, this.pagin.pageSize)
            // console.log('page', this.pagin.page);
            // console.log('slice: ', slice);
            console.log('startP: ', startP);
            console.log('endP: ', endP);
        },

        // Phân trang sự kiện đã kết thúc
        onPageChangeFinish(val) {
            console.log(`current page: ${val}`);
            // 09/03/2023 HMNAM 
            // Phân trang event
            let page = this.pagin.page
            console.log('page: ', page);
            let startP = (page * this.pagin.pageSize) - this.pagin.pageSize
            let endP = this.pagin.page * this.pagin.pageSize
            let itemSl = endP + 1
            let valPage = val
            // console.log('value: ', val);

            if (val == 1) {
                this.eventFinish = this.originFinish.slice(0, this.pagin.pageSize)
            } else {
                this.eventFinish = this.originFinish.slice(endP, itemSl)
            }
            // console.log('res', res.data);
            // let slice = this.getEvent.slice(0, this.pagin.pageSize)
            // console.log('page', this.pagin.page);
            // console.log('slice: ', slice);
            console.log('startP: ', startP);
            console.log('endP: ', endP);
        },

        // HMNAM
        // Router khi nhấn vào chi tiết 1 bài viết
        buildUrl(item) {
            // console.log('slugify', `/detail/` + item.id + `/` + this.$slugify(item.name),)
            return '/detail/' + item.EventID + `/` + this.$slugify(item.EventName)
        },

        scrollRegister(item) {
            return '/detail/' + item.EventID + `/` + this.$slugify(item.EventName) + '#RegisterForm'
        },


        // HMNAM
        // Call api hiển thị toàn bộ event
        async getAllEvent() {
            await this.apiGetAllEvent().then(res => {
                this.getEvent = res.data

                // 08/03/2023 HMNAM
                // Check hiển thị bài viết theo thời gian
                var date = new Date()
                var isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString()

                for (let i = 0; i < this.getEvent.length; i++) {
                    if (this.getEvent[i].StartDate > isoDateTime) {
                        // console.log('upcoming: ', this.getEvent[i].EventID);
                        this.eventUpcoming.push(this.getEvent[i])
                        // nothing

                    } else {
                        this.eventFinish.push(this.getEvent[i])
                        // console.log('finish: ', this.getEvent[i].EventID);
                    }

                    // HMNAM
                    // Convert date time
                    let dateT = new Date(this.getEvent[i].StartDate)
                    let year = dateT.getFullYear();
                    let month = dateT.getMonth();
                    let dt = dateT.getDate();
                    let hour = dateT.getHours();
                    let minutes = dateT.getMinutes();

                    if (dt < 10) {
                        dt = '0' + dt;
                    }
                    if (month < 10) {
                        month = '0' + month;
                    }
                    if (hour < 10) {
                        hour = '0' + hour;
                    }
                    if (minutes < 10) {
                        minutes = '0' + minutes;
                    }

                    this.getEvent[i].StartDate = dt + '/' + month + '/' + year + ' ' + '-' + ' ' + hour + ':' + minutes
                    // console.log('ngu', this.getEvent[i].StartDate);
                }

                // Số item hiển thị trên trang chủ của event-upcoming/ event-finish 
                this.eventUpcoming = this.eventUpcoming.slice(0, 3)
                this.eventFinish = this.eventFinish.slice(0, 3)
            })
                .catch(err => {
                    console.log(err);
                })
        },

    },
    mounted() {
        this.getAllEvent();
        this.originUpcoming = this.eventUpcoming
        this.originFinish = this.eventFinish
    },
}
</script>
  
<style scoped>
/* #region upcoming */
.upcomming-event {
    background: #f8f8f8;
}

.event-group-title {
    color: #000;
}

.event-item {
    display: flex;
    background: #fff;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 0 13px -7px #676767;
    margin-top: 30px;
}


.event-item-thumb {
    width: 300px;
    border-radius: 12px 0 0 12px;
    overflow: hidden;
    position: relative;
}

.event-item-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.event-item-topic {
    position: absolute;
    bottom: 15px;
    left: 15px;
    padding: 5px 15px;
    border-radius: 25px;
    overflow: hidden;
    background: #fff;
    font-size: 13px;
    box-shadow: 0px 0 3px 0px #d8d8d8;
    color: #212121;
}

.event-item-content {
    width: -webkit-calc(100% - 500px);
    display: flex;
    flex-direction: column;
    padding: 20px 25px;
}

.event-item-content-wrap a {
    color: #212121;
    text-decoration: none !important;
}

.event-item-name {
    font-family: GoogleSans Bold, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.42857143;
    margin: 0;
    padding-bottom: 10px;
    text-decoration: none !important;
    cursor: pointer;
}

.event-item-sumary {
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.cls-button-detail {
    margin-top: auto;
}

.cls-button-detail a {
    font-size: 14px;
    color: #212121;
    text-decoration: none !important;
    background: url(~/static/images/home/ic_arrow-right.svg) no-repeat right top 3px;
    background-size: 6px;
    padding-right: 14px;
}

/* #region event item right */
.event-item-info {
    width: 200px;
    padding: 20px;
    border-left: dashed 2px #ccc;
    display: flex;
    flex-direction: column;
}

.event-item-time {
    background: url(~/static/images/home/ic_time.svg) no-repeat;
    background-size: 18px;
    padding-left: 25px;
    margin-bottom: 8px;
    font-size: 14px;
    font-family: GoogleSans Medium, Arial, sans-serif;
}

.event-item-address {
    background: url(~/static/images/home/ic_address.svg) no-repeat;
    background-size: 18px;
    padding-left: 25px;
    margin-bottom: 8px;
    font-size: 14px;
    font-family: GoogleSans Medium, Arial, sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.event-item-slot {
    background: url(~/static/images/home/ic_slot.svg) no-repeat;
    background-size: 18px;
    padding-left: 25px;
    margin-bottom: 8px;
    font-size: 14px;
    font-family: GoogleSans Medium, Arial, sans-serif;
}

.event-item-cost {
    background: url(~/static/images/home/ic_cost.svg) no-repeat left top 2px;
    background-size: 18px;
    padding-left: 25px;
    font-size: 16px;
    font-family: GoogleSans Bold, Arial, sans-serif;
}

@keyframes blinkingBackground {
    0% {
        background-color: #363f92;
    }

    50% {
        background-color: #04a1d5;
    }

    100% {
        background-color: #363f92;
    }
}

.cls-event-button .btn-register {
    animation: blinkingBackground 1.2s infinite;
}

.cls-event-button a {
    padding: 7px 20px;
    color: #fff;
    border-radius: 25px;
    width: 100%;
    text-align: center;
    text-decoration: none !important;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    font-family: GoogleSans Medium, Arial, sans-serif;
    margin-top: 8px;
    position: relative;
}

.cls-event-button {
    margin-top: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

/* #endregion */

/* #endregion */

/* region filter */
.filter-home {
    margin-top: 60px;
}

.event-wrap-title {
    font-size: 22px;
    text-align: center;
    max-width: 620px;
    float: none;
    margin: 0 auto;
}

.box-sort {
    display: flex !important;
}

.box-sort>div:not(:last-child) {
    padding-right: 15px;
}

.event-sort-box {
    padding: 30px;
}

.dropdown-topic {
    width: 50% !important;
}

.dropdown-event-type {
    width: 28%;
}

.form-date {
    margin: 0;
    width: 22%;
}

.dropdown-topic .el-select-dropdown {
    min-width: unset !important;
}

.box-search {
    width: 100%;
    margin-right: 15px;
}

.box-search-wrap {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
}


@media (min-width: 980px) {
    .event-sort-box {
        margin-left: 12.5%;
        width: 75%;
    }
}


@media screen and (max-width: 979px) {
    .event-item-thumb {
        display: none;
    }

    .event-item-content {
        width: -webkit-calc(100% - 200px);
    }
}

@media screen and (max-width: 480px) {
    .event-item{
        display: block;
        height: unset;
    }

    .event-item-content{
        width: unset;
    }

    .event-item-info{
        width: unset;
        border-top: dashed 2px #ccc;
        border-left: none;
    }

    .event-item-info-head{
        display: grid;
        grid-template-columns: 1fr 1fr;
        
    }

    .cls-button-detail{
        padding-top: 20px ;
    }
}

/* #end region */
</style>
  
  