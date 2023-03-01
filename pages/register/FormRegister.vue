<template>
  <div ref="RegisterForm" id="RegisterForm" class="reservations section-temp">
    <div class="container">
      <div class="col-md-24">
        <div class="common-title text-left">
          <span>Đặt chỗ ngay</span>
        </div>
      </div>
      <div class="col-md-24">
        <div v-html="test123.html" class="register-booking">
            
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
            test123: [
                {
                    html: '<p> hello</p>',
                }
            ]
        }
    }
}


</script>

<style>
.reservations {
  background: url(~/static/images/register/bg-register.png) no-repeat center;
  background-size: cover;
  color: #fff;
  height: 500px;
}
</style>