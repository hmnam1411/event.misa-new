<template>
    <div class="banner">
      <div class="container">
        <div class="row">
          <div class="banner-ctn">
            <el-carousel :interval="5000" arrow="always" height="500px">
              <el-carousel-item class="banner-item" v-for="(item, index) in getEvent" :key="index">
                <div class="banner-organizational-unit">CÔNG TY CP MISA</div>
                <div class="banner-event-name">{{ item.EventName }}</div>
                <div class="banner-event-info">
                  <div class="banner-event-time">{{ item.StartDate }}</div>
                  <div class="banner-event-address">
                    {{ item.Address }}
                  </div>
                  <div class="banner-event-slot">{{item.Slot}}</div>
                </div>
                <ul class="event-slide">
                  <li>
                    <a :href="buildUrl(item)" id="Chitiet_Event" class="s-event-item">
                      <div class="s-event-date">
                        <div class="s-event-month">Tháng 2</div>
                        <div class="s-event-day">21</div>
                      </div>
                      <div class="s-event-name">
                        {{ item.EventName }}
                      </div>
                    </a>
                  </li>
                </ul>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <script>
  import { mapActions } from 'vuex'
  
  
  export default {
    data: function () {
      return {
        bannerInfo: [],
        eventAll : [],
      };
    },
  
    props: {
      getEvent: {
        type: Array,
        require: true
      },
    
    },
  
    methods: {
      buildUrl(item) {
        return '/detail/' + item.EventID + `/` + this.$slugify(item.EventName)
      },
  
      ...mapActions('getevent', {
        apiBannerList: 'apiBannerList',
      }),
  
    },
  
  };
  </script>
  
  <style scoped>
  .banner {
    background: url("~/static/images/home/bg_banner.jpg");
    background-size: cover;
    color: #fff;
    padding: 50px 0;
    overflow: hidden;
  }
  
  .banner-event-active {
    padding-bottom: 50px;
    font-size: 30px;
  }
  
  .banner-organizational-unit {
    font-family: GoogleSans Medium, Arial, sans-serif;
    font-size: 14px;
    padding-bottom: 10px;
    text-transform: uppercase;
  }
  
  .banner-event-name {
    width: 100%;
    min-height: 200px;
    max-width: 600px;
    font-family: GoogleSans Bold, Arial, sans-serif;
    font-size: 30px;
    line-height: 1.42857143;
    margin: 0;
    padding-bottom: 20px;
  }
  
  .banner-event-info {
    display: flex;
    flex-flow: row wrap;
  }
  
  .banner-event-info>div {
    font-family: GoogleSans Medium, Arial, sans-serif;
    font-size: 14px;
    padding-right: 30px;
  }
  
  .banner-event-time {
    background: url(~/static/images/home/ic_time.svg) no-repeat;
    background-size: 18px;
    padding-left: 25px;
    filter: brightness(100);
  }
  
  .banner-event-address {
    background: url(~/static/images/home/ic_address.svg) no-repeat;
    background-size: 18px;
    padding-left: 25px;
    filter: brightness(100);
  }
  
  .banner-event-info>div:last-child {
    padding-right: 0;
  }
  
  .banner-event-slot {
    background: url(~/static/images/home/ic_slot.svg) no-repeat;
    background-size: 18px;
    padding-left: 25px;
    filter: brightness(100);
  }
  
  /* #region ul li */
  ul.event-slide {
    display: flex;
  }
  
  ul.event-slide li {
    padding: 15px;
    list-style: none;
    height: 100%;
    width: calc(100% / 3);
  }
  
  .s-event-item {
    background: #efeeee;
    padding: 15px;
    color: #000;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    height: 100%;
    align-items: center;
    font-family: GoogleSans Medium, Arial, sans-serif;
  }
  
  .s-event-date {
    padding-right: 15px;
    text-align: center;
  }
  
  .s-event-month {
    color: #1c75f1 !important;
    text-transform: uppercase;
    font-size: 11px;
    white-space: nowrap;
  }
  
  .s-event-day {
    font-size: 20px;
    color: #000;
  }
  
  .s-event-name {
    font-size: 15px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  
  .banner-item {
    margin-left: 12.5%;
  }
  
  /* #endregion */
  
  /* #region element ui */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  /* #endregion */

  @media screen and (max-width:767px) {
    .banner-item{
      margin-left: 0;
    }

    .banner-event-name{
      max-width: unset;
    }

    .banner-ctn{
      text-align: center;
    }

    .banner-event-info{
      justify-content: center;
    }

    ul.event-slide{
      padding: 0;
      justify-content: center;
    }

    ul.event-slide li{
      width: 70%;
    }
  }

  
  </style>
  
  