<template>
  <div class="home-detail">
    <div v-for="(item, index) in eventDetail" :key="index">
      <div class="banner">
        <img :src="item.Banner" alt="Event Amis" />
      </div>
      <div class="event-detail section-temp">
        <div class="event-detail-top container">
          <div class="col-md-16 event-detail-text">
            <div class="celendar">
              <div class="celendar-month">Tháng {{ }}</div>
              <div class="celendar-day">{{ }}</div>
            </div>
            <div class="event-celeb-unit">Công ty CP MISA</div>
            <h1 class="event-name text-bold">
              {{ item.name }}
            </h1>
            <div class="organizer">
              Diễn giả:
              <span class="organizer-name text-bold"> {{ item.organizer }} </span>
            </div>
            <div class="target-customer">
              Đối tượng tham dự:
              <span class="text-bold">
                Chủ doanh nghiệp, CEO, Giám đốc tài chính, Kế toán trưởng, Kế toán
                viên
              </span>
            </div>
            <div class="short-intro">
              <div class="intro-content">
                Xin mời anh, chị đăng ký tham dự và giao lưu, hỏi đáp cùng diễn
                giả!
              </div>
            </div>
          </div>
  
          <div class="col-md-7 event-detail-card">
            <div class="ed-card-ctn">
              <div id="Time">{{ item.StartDate }}</div>
              <div id="Location">
                {{ item.Address }}
              </div>
              <div id="Quantity">150</div>
              <div id="noCost">Miễn phí</div>
  
              <div id="Booking">
                <a id="Dangky_DetailEvent" @click="toRegister()">
                  <span>Đăng ký ngay</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-benefit section-temp">
        <div class="benefit-main container">
          <div class="col-md-24">
            <h2 class="common-title">
              Nội dung hữu ích trong <span class="nowrap">sự kiện</span>
            </h2>
            <div class="cb-ctn">
              <div>
                <div>
                  <img src="~/static/images/detail/ic-benefit-content-4.svg" alt="AMIS Event" />
                </div>
                <div>
                  <div class="cb-name text-bold">1</div>
                  <div class="cb-content">
                    Các sai sót doanh nghiệp có thể gặp phải khi quyết toán thuế
                    2022
                  </div>
                </div>
              </div>
  
              <div>
                <div>
                  <img src="~/static/images/detail/ic-benefit-content-4.svg" alt="AMIS Event" />
                </div>
                <div>
                  <div class="cb-name text-bold">2</div>
                  <div class="cb-content">
                    Lưu ý nào khi áp dụng các luật thuế để thực hiện kê khai quyết
                    toán thuế 2022 dễ dàng?
                  </div>
                </div>
              </div>
  
              <div>
                <div>
                  <img src="~/static/images/detail/ic-benefit-content-4.svg" alt="AMIS Event" />
                </div>
                <div>
                  <div class="cb-name text-bold">3</div>
                  <div class="cb-content">
                    Giải pháp gì để giảm thiểu sai sót và thực hiện quyết toán
                    thuế nhanh chóng - chính xác?
                  </div>
                </div>
              </div>
  
              <div>
                <div>
                  <img src="~/static/images/detail/ic-benefit-content-4.svg" alt="AMIS Event" />
                </div>
                <div>
                  <div class="cb-name text-bold">4</div>
                  <div class="cb-content">
                    Giải đáp cùng chuyên gia cao cấp về Thuế, tài chính kế toán
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="author section-temp">
        <div class="author-main container">
          <div class="col-md-24 common-title">Diễn giả</div>
          <div class="col-md-24 speaker-wrap">
            <div class="speaker-item">
              <div class="author-img">
                <img src="~/static/images/detail/author-1.png" />
              </div>
              <div class="author-info">
                <div class="author-name">Ông Nguyễn Văn Thức</div>
                <div class="author-position">
                  Giảng viên, chuyên gia cao cấp về Tài chính - Kế toán - Thuế
                </div>
                <div class="author-des">
                  - Thành viên Hội tư vấn Thuế Việt Nam<br />- Chuyên gia Tư vấn
                  Quản trị &amp; Phát triển Doanh nghiệp – Bộ Kế Hoạch &amp; Đầu
                  tư<br />- Chủ tịch HĐTV Công ty Fisa (Chuyên Dịch vụ Tư vấn Quản
                  trịTài chính, Kế toán<br />- Ông còn giữ nhiều vị trí quan trọng
                  như Giám đốc tài chính, Cố vấn tài chính, Kế toán trưởng, ...
                  trong nhiều đơn vị lớn như: Cty Quốc Việt (Cà Mau), Cty Y Dược
                  Viên Minh.<br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="flow-event section-temp">
        <div class="flow-main container">
          <div class="col-md-24">
            <h2 class="common-title">Lịch trình</h2>
            <div class="fe-ctn">
              <div>
                <div class="fe-name text-bold">08h00 - 08h30</div>
                <div class="fe-content">Đón tiếp đại biểu, khách mời.</div>
              </div>
              <div>
                <div class="fe-name text-bold">08h00 - 08h30</div>
                <div class="fe-content">Đón tiếp đại biểu, khách mời.</div>
              </div>
              <div>
                <div class="fe-name text-bold">08h00 - 08h30</div>
                <div class="fe-content">Đón tiếp đại biểu, khách mời.</div>
              </div>
              <div>
                <div class="fe-name text-bold">08h00 - 08h30</div>
                <div class="fe-content">Đón tiếp đại biểu, khách mời.</div>
              </div>
              <div>
                <div class="fe-name text-bold">08h00 - 08h30</div>
                <div class="fe-content">Đón tiếp đại biểu, khách mời.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <FormRegister :dataRegister="dataRegister"/>

    <div class="social section-temp">
      <div class="container">
        <div class="row">
          <div class="text-center common-title">
            Để không bỏ lỡ những sự kiện hữu ích và giá trị từ MISA
          </div>
          <div class="missing-ctn">
            <nuxt-link to="/">
              <div class="missing-img">
                <img src="/images/detail/ic-ignore.svg" alt="AMIS Event">
              </div>
              <div class="missing-title">
                Xem lịch <span class="nowrap">sự kiện</span>
              </div>
            </nuxt-link>
            <a href="https://www.facebook.com/MISAevent" target="_blank">
              <div class="missing-img">
                <img src="/images/detail/logo_fb.webp" style="width:80px;height:80px" alt="AMIS Event">
              </div>
              <div class="missing-title">
                Theo dõi <span class="nowrap">Fanpage Event</span>
              </div>
            </a>
            <a href="https://zalo.me/g/eoniek362" target="_blank">
              <div class="missing-img">
                <img src="/images/detail/ic-ignore-3.svg" alt="AMIS Event">
              </div>
              <div class="missing-title">
                Tham gia <span class="nowrap">Group Zalo</span>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>

    <Footer />
  </div>
</template>

<script>
import '~/assets/style/index.css'

import FormRegister from '../../../components/register/FormRegister.vue';
import Footer from '../../../components/register/FormRegister.vue';

export default {
  components: {
    FormRegister,
    Footer
  },

  data() {
    return {
      eventDetail: [],
      dataRegister: '',
    }
  },

  async fetch() {
    const event = await fetch(
      `http://127.0.0.1:8001/getEventByID/${this.$route.params.id}/`
    ).then(res => res.json());

    this.eventDetail = event.data
    this.dataRegister = event.data[0].aiMarketingCode
  },

  methods: {
    toRegister() {
      const element = document.getElementById("RegisterForm");
      element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    },

  },

  mounted() {
  },


}
</script>

<style scoped>
/* #region banner */

.banner img {
  width: 100%;
}

/* #endregion */

/* region event detail */

.celendar {
  width: 90px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 5px 25px rgb(0 0 0 / 20%);
  position: absolute;
  top: -95px;
  background: #fff;
  border: 2px solid #fff;
}

.celendar-month {
  background: #1c75f1;
  color: #fff;
  border-radius: 8px 8px 0 0;
  padding: 5px 0;
}

.celendar-day {
  font-family: GoogleSans Bold, Arial, sans-serif;
  padding: 8px 0;
  font-size: 24px;
}

.event-celeb-unit {
  font-family: GoogleSans Bold, Arial, sans-serif;
  font-size: 16px;
  color: #03a9f4;
  text-transform: uppercase;
  padding-top: 25px;
}

.event-name {
  font-size: 32px;
  line-height: 1.42857143;
  padding: 15px 0;
  margin: 0;
}

.organizer {
  padding-bottom: 15px;
}

.target-customer {
  padding-bottom: 15px;
}

.short-intro>div:first-child {
  padding-bottom: 5px;
}

.ed-card-ctn {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 25px rgb(0 0 0 / 30%);
  padding: 40px 30px;
}

div#Time {
  position: relative;
  font-family: GoogleSans Medium, Arial, sans-serif;
  margin-bottom: 15px;
  padding-left: 30px;
}

div#Time:before {
  position: absolute;
  content: url('../../../static/images/detail/ic-clock.svg');
  top: 1px;
  left: 0;
  width: 20px;
  height: 20px;
}

div#Location {
  position: relative;
  font-family: GoogleSans Medium, Arial, sans-serif;
  margin-bottom: 15px;
  padding-left: 30px;
}

div#Location:before {
  position: absolute;
  content: url('../../../static/images/detail/ic-location.svg');
  top: 1px;
  left: 0;
  width: 20px;
  height: 20px;
}

div#Quantity {
  position: relative;
  font-family: GoogleSans Medium, Arial, sans-serif;
  margin-bottom: 15px;
  padding-left: 30px;
}

div#Quantity:before {
  position: absolute;
  content: url('../../../static/images/detail/ic-user.svg');
  top: 1px;
  left: 0;
  width: 20px;
  height: 20px;
}

div#noCost {
  text-align: center;
  font-size: 24px;
  font-family: 'GoogleSans Bold';
  padding: 0px 0 8px;
}

div#Booking {
  font-family: GoogleSans Medium, Arial, sans-serif;
  text-align: center;
}

#Booking a {
  background: #1c75f1;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  display: block;
  cursor: pointer;

}

@media (min-width: 980px) {
  .event-detail-card {
    left: 4.16666667%;
  }
}

@media (min-width: 768px) {
  .event-detail-top {
    display: flex !important;
  }
}

@media screen and (max-width: 979px) {
  .event-detail-card {
    padding-top: 30px;
  }
}

/* #end region */

/* #region content benefit */
.cb-ctn {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}

.cb-ctn>div {
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
}

.cb-ctn>div>div:first-child {
  padding-right: 20px;
}

.cb-ctn>div>div:first-child>img {
  width: 80px;
  height: 80px;
}

.cb-name {
  font-size: 18px;
  padding-bottom: 5px;
}

@media screen and (max-width: 767px) {
  .cb-ctn {
    grid-template-columns: 1fr;
  }
}

/* #endregion */

/* #region author */
.speaker-item {
  display: flex;
  align-items: center;
  width: 900px;
  max-width: 100%;
  margin: 0 auto;
}

.author-img {
  width: 206px;
  height: 180px;
  overflow: hidden;
  border-radius: 50%;
  margin-left: 20px;
  z-index: 1;
  box-shadow: 0px 0 13px -7px rgb(53 82 193);
}

.author-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.author-info {
  background: linear-gradient(90deg, #3552c1 0%, #29349d 100%);
  width: calc(100% - 180px);
  width: -o-calc(100% - 180px);
  width: -moz-calc(100% - 180px);
  width: -webkit-calc(100% - 180px);
  color: #fff;
  padding: 20px 50px 20px 60px;
  box-shadow: 0px 0 13px -7px rgb(53 82 193);
  margin-left: -40px;
  border-radius: 15px 150px 150px 15px;
  overflow: hidden;
}

.author-name {
  font-family: GoogleSans Bold, Arial, sans-serif;
  font-size: 18px;
  padding-bottom: 5px;
}

.author-position {
  font-size: 16px;
  padding-bottom: 10px;
}

.author-des {
  font-size: 14px;
}

@media screen and (max-width: 979px) {
  .speaker-item {
    width: unset;
  }
}

@media screen and (max-width: 767px) {
  .speaker-item {
    display: block;
  }

  .author-img {
    width: 140px;
    height: 140px;
    margin: 0 auto -70px;
  }

  .author-info {
    /* width: 100%; */
    width: unset;
    padding: 90px 20px 20px 20px;
    margin-left: 0;
    border-radius: 10px;
  }

  .author-name {
    text-align: center;
  }

  .author-position {
    text-align: center;
  }
}

/* #endregion */

/* #region flow */
section.flow-event.section-temp {
  background: #f8f8f8;
  padding: 50px 0;
}

.fe-ctn {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}

.fe-ctn>div {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  background: #fff;
  font-size: 18px;
  padding: 20px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 8%);
  border-radius: 15px;
  overflow: hidden;
}

.fe-name {
  font-size: 18px;
  color: #1c75f1;
  padding-right: 20px;
}

@media (min-width: 768px) {
  .fe-name {
    width: 145px;
  }

  .fe-content {
    width: calc(100% - 145px);
    width: -o-calc(100% - 145px);
    width: -moz-calc(100% - 145px);
    width: -webkit-calc(100% - 145px);
  }
}

@media screen and (max-width: 767px) {
  .fe-ctn>div {
    display: block;
  }

  .fe-name {
    padding: 0 0 10px;
  }
}

/* #endregion */

/* #region social */
.missing-ctn {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.missing-ctn>a {
  display: block;
  min-width: 280px;
  color: #212121;
  font-size: 18px;
  padding: 30px;
  border-radius: 30px;
}

.missing-title {
  padding-top: 15px;
}

.missing-ctn>a:hover,
.missing-ctn>a:focus,
.missing-ctn>a:active {
  text-decoration: none;
  box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
}

/* #endregion */
</style>