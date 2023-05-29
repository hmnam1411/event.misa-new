<template>
    <footer class="footer">
        <div class="container footer-container">
            <div class="copyright">
                <span class="copyright-infor">
                    Copyright © 1994 - 2023 MISA JSC
                </span>
                <a class="website-misa" href="https://www.misa.vn/">www.misa.vn</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    background: linear-gradient(145deg,#0066a7,#0195f5);
    width: 100%;
    z-index: 99;
}

.footer .copyright {
    color: #fff;
    text-align: center;
    padding: 15px 0;
    line-height: 16px;
}

.footer .copyright .website-misa {
    padding-left: 40px;
    color: #fff;
    text-decoration: none;
}

@media (min-width: 1280px) {
    .container {
        max-width: 1280px;
        width: 1280px;
    }
}
</style>