<template>
  <div ref="RegisterForm" id="RegisterForm" class="reservations section-temp">
    <div class="container">
      <div class="col-md-24">
        <div class="common-title text-left">
          <span>Đặt chỗ ngay</span>
        </div>
      </div>
      <div class="col-md-24">
        <div class="register-booking">
          <div class="aimarketing-form-embed-code" v-html="dataRegister">
          </div>
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formRegister: [],
    }
  },

  props: {
    dataRegister: String,
  },


}


</script>

<style scoped>
.reservations {
  background: url(~/static/images/register/bg-register.png) no-repeat center;
  background-size: cover;
  color: #fff;
  height: 650px;
}

.register-booking {
  padding: 20px;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
}

.register-booking .aimarketing-form-embed-code .private-form .submit-wrapper .btn-form-submit {
    font-family: GoogleSans,Arial,sans-serif!important;
    background: #1c75f1!important;
    width: 180px!important;
    font-size: 15px!important;
    outline: none!important;
}
</style>