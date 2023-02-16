const state = () => ({
    upcommings: [
        {
            thumb: "images/home/event-1.jpg",
            topic: "Quản trị Tài chính - Kế toán",
            name: "LƯU Ý QUYẾT TOÁN THUẾ 2022 - HỎI ĐÁP CÙNG CHỦ TỊCH HỘI TƯ VẤN THUẾ VIỆT NAM | Công ty CP MISA",
            sumary: " Mời anh, chị đăng ký tham dự để nghe chia sẻ và hỏi đáp cùng Chủ tịch hội tư vấn thuế Việt Nam.",
            time: "16/02/2023 - 14:30",
            address: "",
            slot: "",
            cost: "",
        },
        {
            thumb: "images/home/event-2.png",
            topic: "test topic 2",
            name: "ĐÁNH GIÁ RỦI RO QUYẾT TOÁN THUẾ TNDN CUỐI NĂM - HƯỚNG DẪN  & GIẢI ĐÁP BỞI CHUYÊN GIA NGÀNH THUẾ | Công ty CP MISA",
            sumary: "Xin mời anh, chị đăng ký tham dự và giao lưu, hỏi đáp cùng diễn giả!",
            time: "18/02/2023 - 08:30",
            address: "",
            slot: "",
            cost: "",
        },
        {
            thumb: "images/home/event-3.png",
            topic: "test topic 3",
            name: "TOTAL REWARDS - TÁI TẠO HỆ THỐNG TỔNG ĐÃI NGỘ 2023 - CHÌA KHÓA TẠO CẠNH TRANH VÀ GIỮ CHÂN NHÂN TÀI | Công ty CP MISA & Link Power",
            sumary: "Xin mời anh, chị đăng ký tham dự và giao lưu, hỏi đáp cùng diễn giả!",
            time: "21/02/2023 - 14:30",
            address: "",
            slot: "",
            cost: "",
        }
    ]
});

const getters = {
    upcommingData : (state) => {
        return state.upcommings
    }
};

export default {
    namespaced : true,
    state,
    getters,
}