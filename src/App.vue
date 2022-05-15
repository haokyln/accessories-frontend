<template>
  <v-app>
    <HomeView />
  </v-app>
</template>

<script>
import HomeView from '@/pages/HomeView.vue';
export default {
  name: 'App',

  components: {
    HomeView,
  },

  data: () => ({
    //
  }),
};
</script>
