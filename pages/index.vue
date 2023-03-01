<template>
  <div>
    <BannerHome />
    <FilterHome @inputData="updateMessage" />
    <!-- <h3>{{message}}</h3> -->
    <UpcommingEvent :msg="msg" />
    <FinishEvent />
    <SlideDetail />
    <Footer />
  </div>
</template>

<script>
import '../assets/style/index.css'
import { mapGetters } from 'vuex'

import FilterHome from '~/pages/homepage/FilterHome.vue';
import FinishEvent from '~/pages/homepage/FinishEvent.vue';
import UpcommingEvent from '~/pages/homepage/UpcommingEvent.vue';
import BannerHome from '~/pages/homepage/BannerHome.vue';
import SlideDetail from './slide/SlideDetail.vue';
import Footer from './footer/Footer.vue';

export default {
  name: 'IndexPage',
  components: {
    UpcommingEvent,
    FinishEvent,
    BannerHome,
    SlideDetail,
    FilterHome,
    Footer,
  },

  data() {
    return {
      message: 'Message default.',
      msg: 'hello'
    }
  },

  computed: {
    ...mapGetters('upcommingdata', {
      upcommingData: 'upcommingData',
    }),
  },

  methods: {
    updateMessage(mes) {
      this.message = mes;
    }
  },

  mounted () {
    this.tableData = this.upcommingData.slice(0, 3);
  },
  
}
</script>