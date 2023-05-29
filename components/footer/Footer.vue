<template>
  <div class="footer">
    <div class="footer-ctn container">
      <div class="company-name">CÔNG TY CỔ PHẦN MISA</div>
      <div class="company-address">
        Địa chỉ: Tầng 9, tòa nhà Technosoft, phố Duy Tân, phường Dịch Vọng Hậu,
        Q. Cầu Giấy, TP. Hà Nội
      </div>
      <div class="website">Website: amis.misa.vn</div>
      <div class="hotline">Hotline: 0969 591 603 (Ms.Ánh)</div>
      <div class="copyright">
        <div>Copyright © 1994 - 2021 MISA JSC</div>
        <a href="https://amis.misa.vn/chinh-sach-bao-mat/" target="_blank"
          >Privacy policy</a
        >
        <a
          href="https://amis.misa.vn/thoa-thuan-su-dung-dich-vu/"
          target="_blank"
          >Terms and conditions</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/style/base/index.css'

export default {}
</script>

<style>
.footer {
    background: linear-gradient( 145deg, #0066a7, #0195f5);
    color: #fff;
    padding: 10px 15px;
    text-align: center;
    font-size: 14px;
}

.company-name {
    font-family: GoogleSans Bold, Arial, sans-serif;
    font-size: 16px;
}

.copyright {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}

.copyright * {
    font-family: GoogleSans Medium, Arial, sans-serif;
    margin: 0 15px;
    color: #fff !important;
    opacity: 1 !important;
}
</style>