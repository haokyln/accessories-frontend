<template>
  <m-layout>
    <h1>HomeView</h1>
  </m-layout>
</template>

<script>
import MLayout from '@/shared/MLayout.vue';
import { mapState } from 'vuex';

export default {
  components: { MLayout },
  data() {
    return {};
  },
  computed: {
    ...mapState(['isLogin']),
  },
};
</script>

<style></style>
