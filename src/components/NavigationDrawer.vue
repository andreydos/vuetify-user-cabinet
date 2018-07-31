<template>
  <v-navigation-drawer
    persistent
    :mini-variant="miniVariant"
    :clipped="clipped"
    v-model="drawer"
    enable-resize-watcher
    fixed
    app
  >
    <v-list>
      <v-list-tile
        value="true"
        v-for="(item, i) in items"
        :key="i"
        @click="$router.push(item.route)"
      >
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'NavigationDrawer',
  props: {
    clipped: {},
    miniVariant: {},
  },
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: 'location_city',
          title: 'Home',
          route: '/',
        },
        {
          icon: 'hearing',
          title: 'About',
          route: 'about',
        },
      ],
    };
  },
  watch: {
    drawer(val) {
      this.$emit('drawer-change', val);
    }
  }
};
</script>
