<template>
    <div>
        <Header />
        <EventManageContainerVue />
        <Footer />
    </div>
</template>

<script>
import EventManageContainerVue from './EventManageContainer.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    components: {
        Header,
        EventManageContainerVue,
        Footer
    },

}
</script>

<style></style>