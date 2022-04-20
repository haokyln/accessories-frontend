<template>
  <v-app-bar
    color="deep-purple accent-4"
    dense
    dark
    v-bind="$attrs"
    fixed
    short
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Shop Accessories</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-form v-model="valid">
      <v-text-field
        placeholder="Finding something..."
        v-bind="$attrs"
        outlined
        dense
        hide-details="auto"
        clearable
        v-if="hidden"
        color="white"
        prepend-icon="mdi-magnify"
        autocomplete
      >
      </v-text-field>
    </v-form>

    <v-btn color="white" @click="hidden = !hidden" icon>
      <v-icon>{{ hidden ? "mdi-close" : "mdi-magnify" }}</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <m-user-menu></m-user-menu>
  </v-app-bar>
</template>

<script>
import MUserMenu from "../Menus/MUserMenu.vue";
export default {
  props: {},
  components: {
    MUserMenu,
  },
  data: () => ({
    hidden: false,
  }),
};
</script>

<style scoped>
header {
  height: 48px !important;
}
</style>
