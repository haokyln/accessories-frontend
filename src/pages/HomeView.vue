<template>
  <m-layout :username="username">
    <h1>HomeView</h1>
  </m-layout>
</template>

<script>
import MLayout from '@/shared/MLayout.vue';
import jwt_decode from 'jwt-decode';

export default {
  components: { MLayout },
  data() {
    return {};
  },
  computed: {},
  created() {
    const accessToken = localStorage.getItem('accessToken');
    var decoded = jwt_decode(accessToken);
    console.log(decoded.sub);
  },
};
</script>

<style></style>
