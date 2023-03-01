<template>
    <div>
        <!-- filter -->
        <div class="filter-home">
            <div class="container">
                <div class="row">
                    <h1 class="event-wrap-title">
                        MISA không ngừng kết nối và chuyển giao giá trị hữu ích tới cộng đồng
                        thông qua các sự kiện chất lượng
                    </h1>
                    <div class="event-sort-box">
                        <div class="box-sort">
                            <el-select class="dropdown-topic" v-model="topics.value" placeholder="Chủ đề">
                                <el-option class="dropdown-topic-item" v-for="item in topics" :key="item.value"
                                    :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>

                            <el-select class="dropdown-event-type" v-model="events.value" placeholder="Loại sự kiện">
                                <el-option class="dropdown-event-item" v-for="item in events" :key="item.value"
                                    :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>

                            <div class="form-date">
                                <el-date-picker v-model="startDate" type="date" placeholder="Ngày bắt đầu">
                                </el-date-picker>
                            </div>
                        </div>

                        <div class="box-search-wrap">
                            <div class="box-search">
                                <!-- @change="$emit('customChange', $event.target.value)" -->
                                <el-input v-model="value" prefix-icon="el-icon-search"
                                    placeholder="Nhập tên sự kiện muốn tìm kiếm" clearable>
                                </el-input>
                                <!-- <input type="text" @change="$emit('customChange', $event.target.value)"> -->
                                <!-- <div v-for="(item, index) in filterSearch" :key="index">
                <h1>{{ item.label }}</h1>
              </div> -->
                            </div>
                            <div class="cls-button-search">
                                <el-button @click="handleSearch()" type="primary" icon="el-icon-search">Xem kết
                                    quả</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end filter -->

        <!-- upcoming -->
        <div class="upcomming-event">
            <div class="container">
                <div class="row">
                    <h2 class="event-group-title text-center">Sắp diễn ra</h2>
                    <div class="list-event-group" v-for="(item, index) in filterSearch" :key="index">
                        <div class="event-item">
                            <nuxt-link :to="buildUrl(item)" class="event-item-thumb">
                                <img :src="item.thumb" alt="Amis Event" />
                                <div class="event-item-topic">
                                    {{ item.topic }}
                                </div>
                            </nuxt-link>
                            <div class="event-item-content">
                                <div class="event-item-content-wrap">
                                    <nuxt-link :to="buildUrl(item)" @click="handleClickItem(item)">
                                        <h3 class="event-item-name">
                                            {{ item.name }}
                                        </h3>
                                    </nuxt-link>
                                    <div class="event-item-sumary">
                                        {{ item.email }}
                                    </div>
                                </div>
                                <div class="cls-button-detail">
                                    <nuxt-link :to="buildUrl(item)" :title="item.name"> Xem chi tiết </nuxt-link>
                                </div>
                            </div>
                            <div class="event-item-info">
                                <div class="event-item-info-head">
                                    <div class="event-item-time">{{ item.time }}</div>
                                    <div class="event-item-address">Zoom Online</div>
                                    <div class="event-item-slot">500</div>
                                    <div class="event-item-cost">Miễn phí</div>
                                </div>
                                <div class="cls-event-button">
                                    <nuxt-link :to="scrollRegister(item)" class="btn-register">Đăng ký ngay </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <el-pagination :page-size="pagin.pageSize" background :item="eventUpcoming" layout="prev, pager, next"
                        :total="this.eventUpcoming.length" @current-change="onPageChange">
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
                                <img :src="item.thumb" alt="Amis Event" />
                                <div class="event-item-topic">{{ item.topic }}</div>
                            </a>
                            <div class="event-item-content">
                                <div class="event-item-content-wrap">
                                    <nuxt-link :to="buildUrl(item)">
                                        <h3 class="event-item-name">
                                            {{ item.name }}
                                        </h3>
                                    </nuxt-link>
                                    <div class="event-item-sumary">
                                        Mời anh, chị đăng ký tham dự để nghe chia sẻ và hỏi đáp cùng
                                        Chủ tịch hội tư vấn thuế Việt Nam.
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
                    <el-pagination :page-size="pagin.pageSize" background :item="eventFinish" layout="prev, pager, next"
                        :total="this.eventFinish.length" @current-change="onPageChange">
                    </el-pagination>
                </div>
            </div>
        </div>
        <!-- end finish -->

    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';
import FilterHome from './FilterHome.vue';
import axios from 'axios'
const myaxios = axios.create({
    // ...
})
myaxios.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    // ...
})
// import Paginate from 'vuejs-paginate'

export default {
    components: {
        // Paginate
        FilterHome
    },

    data: function () {
        return {
            search: null,
            eventUpcoming: [],
            eventFinish: [],
            pageSize: 1,
            pagin: {
                page: 1,
                pageSize: 3, // muốn bao nhiêu item/ trang sửa số này là tự ăn
            },
            timestamp: "",
            getTimeD1: "",
            getTimeD2: "",
            topics: [
                {
                    value: 'Option1',
                    label: 'Chuyển đổi số',
                },
                {
                    value: 'Option2',
                    label: 'Quản trị Tài chính - Kế toán',
                },
                {
                    value: 'Option3',
                    label: 'Quản trị Nhân sự',
                },
                {
                    value: 'Option4',
                    label: 'Quản lý Marketing & Bán hàng',
                },
                {
                    value: 'Option5',
                    label: 'Quản trị & Vận hành',
                },
            ],

            events: [
                {
                    value: 'Option1',
                    label: 'Hội thảo',
                },
                {
                    value: 'Option2',
                    label: 'Đào tạo',
                },
                {
                    value: 'Option3',
                    label: 'Khác',
                },
            ],

            startDate: '',

            debounceSearch: '',
            value: ''
        }
    },

    props: {
        msg: String
    },

    async asyncData() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return { data }
    },

    created() {
        setInterval(this.getNow, 1000);
    },


    // async fetch() {
    //   this.tableData = await fetch(
    //     "https://jsonplaceholder.typicode.com/users"
    //   ).then(res => res.json());
    // },

    computed: {
        ...mapGetters('eventdata', {
            eventData: 'eventData',
        }),

        filterSearch() {
            return this.eventUpcoming.filter(item => {
                return item.name.toLowerCase().includes(this.value.toLowerCase())
            })

        }

    },

    methods: {
        myDropdown() {
            document.getElementById('myDropdown').classList.toggle('show')
        },

        handleSearch() {
            this.$emit('inputData', this.value);
            this.value = '';
            // this.$emit('testdata', this.handleSearch())
        },

        handleClickItem(item) {
            console.log('item', item)
        },

        onPageChange(page) {
            this.pagin.page = page
            const startP = (page * this.pagin.pageSize) - this.pagin.pageSize
            const endP = this.pagin.page * this.pagin.pageSize
            // console.log("data",this.upcommingData.slice(3, 6), page, this.upcommingData.slice((page * 3) - 3,page + 2))
            if (page == 1) {
                this.eventUpcoming = this.eventUpcoming.slice(0, this.pagin.pageSize)
            } else {
                this.eventUpcoming = this.eventUpcoming.slice(startP, endP)
            }
            // (page * 3) - 3, page + 2
            // this.current = upcommingData
            // console.log('hello page change', page);
            // console.log('tableData', this.eventUpcoming);
            // console.log('total', this.upcommingData.length);
        },

        buildUrl(item) {
            // console.log('slugify', `/detail/` + item.id + `/` + this.$slugify(item.name),)
            return '/detail/' + item.id + `/` + this.$slugify(item.name)
        },

        scrollRegister(item) {
            return '/detail/' + item.id + `/` + this.$slugify(item.name) + '#formReg'
        },

        getNow: function () {
            const today = new Date();
            const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = date + ' ' + time;
            this.timestamp = dateTime;
        },

        formatDate(date) {
            var dd = date.getDate();
            var mm = date.getMonth() + 1; //January is 0!
            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            //return dd + '/' + mm + '/' + yyyy;
            return yyyy + '/' + mm + '/' + dd;

        }

    },

    mounted() {
        var nowDate = new Date()
        var arrUp = []
        var arrFinish = []
        console.log('today is: ', nowDate.toISOString().split('T')[0].split("-").reverse().join("/"))

        for (let i = 0; i < this.eventData.length; i++) {
            if (this.eventData[i].time > nowDate.toISOString().split('T')[0].split("-").join("/")) {
                console.log("keep", this.eventData[i].time)
                arrUp.push(this.eventData[i]);
                // nothing
            }
            else {
                arrFinish.push(this.eventData[i])
                console.log("delete", this.eventData[i].time)
                // console.log('delete', arrFinish.push(this.eventData[i]));

            }
        }

        this.eventUpcoming = arrUp
        this.eventFinish = arrFinish

        // this.eventUpcoming = arrUp.slice(0, 3)
        // this.eventFinish = arrFinish.slice(0, 3)


        // this.tableData = this.eventData.slice(0, 3)
        // this.testData = this.data

        // console.log('data', this.testData);
        // console.log('upcoming', this.upcommingData);

        console.log('page length', this.eventUpcoming);
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

/* #region finish */
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

/* #end region */

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

/* #end region */
</style>
  
  