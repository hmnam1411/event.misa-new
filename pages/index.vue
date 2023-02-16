<template>
  <div>
    <BannerHome />
    <FilterHome />
    <UpcommingEvent />
    <FinishEvent />
  </div>
</template>

<script>
import '../assets/style/index.css'

import FilterHome from '~/pages/homepage/FilterHome.vue';
import FinishEvent from '~/pages/homepage/FinishEvent.vue';
import UpcommingEvent from '~/pages/homepage/UpcommingEvent.vue';
import BannerHome from '~/pages/homepage/BannerHome.vue';

export default {
  name: 'IndexPage',
  components: {
    FilterHome,
    UpcommingEvent,
    FinishEvent,
    BannerHome,
  }
}
</script>