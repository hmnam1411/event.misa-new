<template>
  <div>
    <!-- <FilterHome @customChange="logChange"/> -->
    <div class="finish-event">
      <div class="container">
        <div class="row">
          <h2 class="event-group-title text-center">Đã diễn ra</h2>
          <div class="list-event-group" v-for="(item, index) in finishData" :key="index">
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
          <el-pagination :page-size="pagin.pageSize" background :item="finishEvents" layout="prev, pager, next"
            :total="this.finishEvents.length" @current-change="onPageChange">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import { mapGetters } from 'vuex'
import FilterHome from './FilterHome.vue'

export default {
  components: {
    FilterHome,
  },

  data: function () {
    return {
      finishData: [],
      pageSize: 1,
      pagin: {
        page: 1,
        pageSize: 3, // muốn bao nhiêu item/ trang sửa số này là tự ăn
      },
    }
  },

  computed: {
    ...mapGetters('finishevents', {
      finishEvents: 'finishEvents',
    }),
    
  },

  methods: {
    onPageChange(page) {
      this.pagin.page = page
      const startP = (page * this.pagin.pageSize) - this.pagin.pageSize
      const endP = this.pagin.page * this.pagin.pageSize
      // console.log("data",this.finishData.slice(3, 6), page, this.finishData.slice((page * 3) - 3,page + 2))
      if (page == 1) {
        this.finishData = this.finishEvents.slice(0, this.pagin.pageSize)
      } else {
        this.finishData = this.finishEvents.slice(startP, endP)
      }
      // (page * 3) - 3, page + 2
      // this.current = finishData
      console.log('hello page change', page);
      console.log('finishData', this.finishData);
      // console.log('total', this.finishData.length);
    },

    // slug url 
    buildUrl(item) {
      // console.log('slugify', `/detail/` + item.id + `/` + this.$slugify(item.name),)
      return '/detail/' + item.id + `/` + this.$slugify(item.name)
    },

    logChange(event){
      console.log(event);
    }
  },

  mounted() {
    this.finishData = this.finishEvents.slice(0, 3)
    console.log('finish', this.finishData);;
  },
}


</script>
    
<style scoped>
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
</style>
    
    