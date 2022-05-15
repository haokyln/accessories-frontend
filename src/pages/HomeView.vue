<template>
  <div>
    <m-header />
    <v-container class="mt-10">
      <h1>Hellou</h1>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import MLayout from '@/shared/MLayout.vue';
import MHeader from '@/components/Partitions/MHeader.vue';

export default {
  layout: MLayout,
  components: { MHeader },
};
</script>

<style></style>
