<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="white" dark v-bind="attrs" v-on="on" icon>
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title
          ><v-btn :color="item.color">
            <span>
              {{ item.title }}
            </span>
          </v-btn></v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'MUserMenu',
  props: {
    icon: {
      type: String,
      default: 'mdi-dots-vertical',
    },
    items: {
      type: Array,
      default: () => [
        {
          index: 1,
          title: 'Profile',
          action: '',
          color: 'primary',
        },
        {
          index: 2,
          title: 'Cart',
          action: '',
          color: 'primary',
        },
        {
          index: 3,
          title: 'Log out',
          action: '',
          color: 'warning',
        },
      ],
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
}
</style>
