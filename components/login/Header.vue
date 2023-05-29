<template>
    <header class="header">
        <div class="container header-container">
            <a class="logo" href="/">
                <img class="img-responsive" src="../../static/images/login/logo.svg">
            </a>
            <div class="box-user">
                <img class="image-use" src="../../static/images/login/ic_avatar.svg" alt="avatar">
                <span class="use-name">Nguyễn Thanh Sơn</span>
                <i class="icon-dropdown"></i>
                <div class="list-button-dropdown">
                    <a class="item-button-dropdown logout" href="\logout">Đăng xuất</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    background: linear-gradient(145deg, #0066a7, #0195f5);
    /* background: #0072BB; */
    height: 70px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10000;
}

.header-container{
    display: flex !important;
    justify-content: space-between;
}

.logo {
    height: 50px;
    display: inline-block;
    margin: 10px 0;
}

.logo img {
    height: 100%;
}

.box-user {
    float: right;
    position: relative;
    white-space: nowrap;
    cursor: pointer;
    padding: 14px 0;
}

.box-user .image-use {
    display: inline-block;
    height: 42px;
    width: 42px;
    vertical-align: middle;
    border-radius: 50%;
    margin-right: 5px;
}

.box-user .use-name {
    vertical-align: middle;
    color: #fff;
}

.box-user .icon-dropdown {
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url(../../static/images/login/ic_arrow_drop_down_18px.png) no-repeat center;
    vertical-align: middle;
}

.box-user .list-button-dropdown {
    position: absolute;
    top: 100%;
    min-width: 100%;
    right: 0;
    background: #fff;
    transition: height 0.4s;
    height: 0;
    overflow: hidden;
}

.box-user .list-button-dropdown .item-button-dropdown:first-child {
    border-top: 0;
}

.box-user .list-button-dropdown .logout {
    background: #fff url(../../static/images/login/ic_dangxuat.png) no-repeat 12px center;
    padding-left: 45px;
    overflow: hidden;
}

.box-user .list-button-dropdown .item-button-dropdown {
    min-width: 100%;
    border-top: 1px solid #dddddd;
    color: #000;
    text-decoration: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    height: 38px;
    white-space: nowrap;
}

.box-user .list-button-dropdown a {
    padding-right: 15px;
}

.box-user:hover .list-button-dropdown{
    height: auto;
    box-shadow: 2px 2px 3px 2px #DFDFDF;
}

@media (min-width: 1280px){
    .container {
        max-width: 1280px;
        width: 1280px !important;
    }
}

</style>