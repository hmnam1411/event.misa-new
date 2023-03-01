export const state = () => ({
    // bannerlists: [],
    bannerlist: [
       
    ]
})

export const mutations = {
    // SET_BANNERS(state, bannerlists) {
    //     state.bannerlists = bannerlists
    // },
    SET_BANNER(state, bannerlist) {
        state.bannerlist = bannerlist
    }
}

export const actions = {
    // async get_bannerlists({ commit }) {
    //     const res = await this.$repositories.bannerlist.all()
    //     const { status, data } = res
    //     if (status === 200 && data.success && data.code) {
    //         const { data } = data
    //         commit('SET_BANNERS', data)
    //     } else {
    //         // Handle error here
    //     }
    // },

    async get_bannerlist({ commit }, bannerlist) {
        const res = await this.$repositories.bannerlist.show(bannerlist)
        const { status, data } = res
        if (status === 200 && data.success && data.code) {
            const { data } = data
            commit('SET_BANNER', data)
        } else {
            console.log('hello banner list');
            // Handle error here
        }
    },
}

export default {
    namespaced : true,
    state,
    actions,
}