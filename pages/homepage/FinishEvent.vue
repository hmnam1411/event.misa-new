<template>
  <div class="finish-event">
    <div class="container">
      <div class="row">
        <h2 class="event-group-title text-center">Đã diễn ra</h2>
        <div class="list-event-group"  v-for="(finishItem, index) in finishItems" :key="index" >
          <div class="event-item">
            <a class="event-item-thumb" href="">
              <img :src="finishItem.thumb" alt="Amis Event" />
              <div class="event-item-topic">{{ finishItem.topic }}</div>
            </a>
            <div class="event-item-content">
              <div class="event-item-content-wrap">
                <a href="">
                  <h3 class="event-item-name">
                    {{ finishItem.name }}
                  </h3>
                </a>
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
                <div class="event-item-time">16/02/2023 - 14:30</div>
                <div class="event-item-address">Zoom Online</div>
                <div class="event-item-slot">500</div>
                <div class="event-item-cost">Miễn phí</div>
              </div>
             
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
    
<script>
    export default {
        data: function(){
            return{
                finishItems: [
                    {
                        thumb: "images/home/event-1.jpg",
                        topic: "Quản trị Tài chính - Kế toán",
                        name: "LƯU Ý QUYẾT TOÁN THUẾ 2022 - HỎI ĐÁP CÙNG CHỦ TỊCH HỘI TƯ VẤN THUẾ VIỆT NAM | Công ty CP MISA",
                        sumary: "",
                        time: "",
                        address: "",
                        slot: "",
                        cost: "",
                    },

                    {
                        thumb: "images/home/event-1.jpg",
                        content: "",
                        name: "ĐÁNH GIÁ RỦI RO QUYẾT TOÁN THUẾ TNDN CUỐI NĂM - HƯỚNG DẪN  & GIẢI ĐÁP BỞI CHUYÊN GIA NGÀNH THUẾ | Công ty CP MISA",
                        sumary: "",
                        time: "",
                        address: "",
                        slot: "",
                        cost: "",
                    },

                    {
                        thumb: "images/home/event-1.jpg",
                        content: "",
                        name: "TOTAL REWARDS - TÁI TẠO HỆ THỐNG TỔNG ĐÃI NGỘ 2023 - CHÌA KHÓA TẠO CẠNH TRANH VÀ GIỮ CHÂN NHÂN TÀI | Công ty CP MISA & Link Power",
                        sumary: "",
                        time: "",
                        address: "",
                        slot: "",
                        cost: "",
                    }
                ],

                // finishItem: '',  
            }
        }
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
  background: url(~/assets/images/home/ic_arrow-right.svg) no-repeat right top
    3px;
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
  background: url(~/assets/images/home/ic_time.svg) no-repeat;
  background-size: 18px;
  padding-left: 25px;
  margin-bottom: 8px;
  font-size: 14px;
  font-family: GoogleSans Medium, Arial, sans-serif;
}

.event-item-address {
  background: url(~/assets/images/home/ic_address.svg) no-repeat;
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
  background: url(~/assets/images/home/ic_slot.svg) no-repeat;
  background-size: 18px;
  padding-left: 25px;
  margin-bottom: 8px;
  font-size: 14px;
  font-family: GoogleSans Medium, Arial, sans-serif;
}

.event-item-cost {
  background: url(~/assets/images/home/ic_cost.svg) no-repeat left top 2px;
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
    
    