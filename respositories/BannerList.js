const resource = 'http://127.0.0.1:8000'
export default ($axios) => ({

    show() {
        return $axios.get(`${resource}/getBannerList/`)
    },


})