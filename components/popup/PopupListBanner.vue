<template>
    <base-popup :visible.sync="listBannerVisible" title="Event Dialog" width="52%" :before-close="handleClose">
    BasePopupss
    </base-popup>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BasePopup from './BasePopup.vue';


export default {
    components: {
        BasePopup,
    },

    computed: {
        ...mapState({
            listBannerVisible: state => state.listBannerVisible
        })
    },
}
</script>

<style></style>