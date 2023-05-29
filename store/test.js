const state = () => ({
    eventdata: [
        {
            id: 1,
            thumb: "images/home/event-1.jpg",
            topic: "Quản trị Tài chính - Kế toán",
            name: "LƯU Ý QUYẾT TOÁN THUẾ 2022 - HỎI ĐÁP CÙNG CHỦ TỊCH HỘI TƯ VẤN THUẾ VIỆT NAM | Công ty CP MISA",
            organizer: "Hoàng Minh Nam" ,
            sumary: " Mời anh, chị đăng ký tham dự để nghe chia sẻ và hỏi đáp cùng Chủ tịch hội tư vấn thuế Việt Nam.",
            time: "2023/11/03",
            address: "Zoom Online",
            slot: "",
            cost: "",
        },
        {
            id: 2,
            thumb: "images/home/event-2.png",
            topic: "test topic 2",
            name: "ĐÁNH GIÁ RỦI RO QUYẾT TOÁN THUẾ TNDN CUỐI NĂM - HƯỚNG DẪN  & GIẢI ĐÁP BỞI CHUYÊN GIA NGÀNH THUẾ | Công ty CP MISA",
            organizer: "natuan1" ,
            sumary: "Xin mời anh, chị đăng ký tham dự và giao lưu, hỏi đáp cùng diễn giả!",
            time: "2023/01/09",
            address: " Misa ",
            slot: "",
            cost: "",
        },
        {
            id: 3,
            thumb: "images/home/event-3.png",
            topic: "test topic 3",
            name: "TOTAL REWARDS - TÁI TẠO HỆ THỐNG TỔNG ĐÃI NGỘ 2023 - CHÌA KHÓA TẠO CẠNH TRANH VÀ GIỮ CHÂN NHÂN TÀI | Công ty CP MISA & Link Power",
            organizer: "ltlong1" ,
            sumary: "Xin mời anh, chị đăng ký tham dự và giao lưu, hỏi đáp cùng diễn giả!",
            time: "2023/05/07",
            address: " Hà Nội",
            slot: "",
            cost: "",
        },
        {
            id: 4,
            thumb: "images/home/event-3.png",
            topic: "test topic 3",
            name: "TOTAL REWARDS - TÁI TẠO HỆ THỐNG TỔNG ĐÃI NGỘ 2023 - CHÌA KHÓA TẠO CẠNH TRANH VÀ GIỮ CHÂN NHÂN TÀI | Công ty CP MISA & Link Power",
            organizer: "ltlong1" ,
            sumary: "Xin mời anh, chị đăng ký tham dự và giao lưu, hỏi đáp cùng diễn giả!",
            time: "2023/02/25",
            address: " Hà Nội",
            slot: "",
            cost: "",
        },
        {
            id: 5,
            thumb: "images/home/event-3.png",
            topic: "test topic 3",
            name: "TOTAL REWARDS - TÁI TẠO HỆ THỐNG TỔNG ĐÃI NGỘ 2023 - CHÌA KHÓA TẠO CẠNH TRANH VÀ GIỮ CHÂN NHÂN TÀI | Công ty CP MISA & Link Power",
            organizer: "ltlong1" ,
            sumary: "Xin mời anh, chị đăng ký tham dự và giao lưu, hỏi đáp cùng diễn giả!",
            time: "2023/08/25",
            address: " Hà Nội",
            slot: "",
            cost: "",
        },
        {
            id: 6,
            thumb: "images/home/event-3.png",
            topic: "test topic 3",
            name: "TOTAL REWARDS - TÁI TẠO HỆ THỐNG TỔNG ĐÃI NGỘ 2023 - CHÌA KHÓA TẠO CẠNH TRANH VÀ GIỮ CHÂN NHÂN TÀI | Công ty CP MISA & Link Power",
            organizer: "ltlong1" ,
            sumary: "Xin mời anh, chị đăng ký tham dự và giao lưu, hỏi đáp cùng diễn giả!",
            time: "2023/06/25",
            address: " Hà Nội",
            slot: "",
            cost: "",
        },
        {
            id: 7,
            thumb: "images/home/event-3.png",
            topic: "test topic 3",
            name: "TOTAL REWARDS - TÁI TẠO HỆ THỐNG TỔNG ĐÃI NGỘ 2023 - CHÌA KHÓA TẠO CẠNH TRANH VÀ GIỮ CHÂN NHÂN TÀI | Công ty CP MISA & Link Power",
            organizer: "ltlong1" ,
            sumary: "Xin mời anh, chị đăng ký tham dự và giao lưu, hỏi đáp cùng diễn giả!",
            time: "2023/02/01",
            address: " Hà Nội",
            slot: "",
            cost: "",
        },
    ],
    
});

const getters = {
    eventData : (state) => {
        return state.eventdata
    }
};

export default {
    namespaced : true,
    state,
    getters,
}