const resource = 'http://127.0.0.1:8001'

export const actions = {
    async apiBannerList() {
        try {
            let {data} = await this.$axios.get(`${resource}/getBannerList/`);
            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },

    async apiGetEvent() {
        try {
            let {data} = await this.$axios.get(`${resource}/getEventByID/`);
            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    }
}

export default {
    namespaced : true,
    actions,
}