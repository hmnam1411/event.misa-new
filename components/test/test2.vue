<template>
    <div>
        <button @click="btnShow()">Show Dialog</button>
        <test1></test1>
    </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';
import test1 from './test1.vue';

export default {
    components: {
        test1
    },

    computed: {
        ...mapState({
            dialogVisible: state => state.dialogVisible
        })
    },

    methods: {
        ...mapActions(['showDialog']),

        btnShow() {
            this.showDialog()
            console.log('showDialog', this.showDialog);
            console.log('dialogVisible', this.dialogVisible);
        }

    },

    mounted() {
    },
};
</script>