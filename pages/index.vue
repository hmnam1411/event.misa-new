<template>
  <div>
    <!-- <h3>{{message}}</h3> -->
    <Event />
    <FormRegister />
    <Footer />
  </div>
</template>

<script>
import '../assets/style/index.css'

import Event from '../components/homepage/Event.vue';
import FormRegister from '../components/register/FormRegister.vue';
import Footer from '../components/footer/Footer.vue';

export default {
  name: 'IndexPage',
  components: {
    Event,
    FormRegister,
    Footer,
  },
}
</script>