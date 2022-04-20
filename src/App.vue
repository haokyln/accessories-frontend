<template>
  <v-app>
    <m-header></m-header>

    <v-main>
      <m-slide-banners></m-slide-banners>
      <m-slide-banners></m-slide-banners>
      <m-slide-banners></m-slide-banners>
      <m-slide-banners></m-slide-banners>
    </v-main>

    <m-footer></m-footer>
  </v-app>
</template>

<script>
import MHeader from "./components/Partitions/MHeader.vue";
import MFooter from "./components/Partitions/MFooter.vue";
import MSlideBanners from "./components/Slide/MSlideBanners.vue";

export default {
  name: "App",

  components: {
    MHeader,
    MFooter,
    MSlideBanners,
  },
};
</script>
