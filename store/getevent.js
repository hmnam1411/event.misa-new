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

    // async apiGetEvent() {
    //     try {
    //         // const id = this.$route.params.idz
    //         let {data} = await this.$axios.get(`${resource}/getEventByID/`);
    //         return data;

    //     } catch (error) {   
    //         console.log(error);
    //         throw new TypeError(error);
    //     }
    // },

    async apiGetAllEvent({state, commit}){
        try{
            let {data} = await this.$axios.get(`${resource}/GetAllEvent/`)
            // console.log('data: ', data);
            return data;
        } catch (error){
            console.log(error);
            throw new TypeError(error)
        }
    }
}

export default {
    namespaced : true,
    actions,
}