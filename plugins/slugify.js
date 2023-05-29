import Vue from "vue"

Vue.prototype.$slugify = slugify

function slugify(string) {
    return string.toString().toLowerCase()
        .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
        .replace(/[\u0300-\u036f]/g, '')// xóa các ký tự dấu sau khi tách tổ hợp

        // Thay ký tự đĐ
        .replace(/[đĐ]/g, 'd')

        // Xóa ký tự đặc biệt
        .replace(/([^0-9a-z-\s])/g, '')

        // Xóa khoảng trắng thay bằng ký tự -
        .replace(/(\s+)/g, '-')

        // Xóa ký tự - liên tiếp
        .replace(/-+/g, '-')

        // xóa phần dư - ở đầu & cuối
        .replace(/^-+|-+$/g, '');

}