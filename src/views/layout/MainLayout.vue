<template>
  <v-app light>
    <NavigationDrawer
      :clipped="clipped"
      :drawer="drawer"
      :miniVariant="miniVariant"
      @drawer-change="drawer = $event"/>
    <HeaderToolbar
      :clipped="clipped"
      :title="title"
      :miniVariant="miniVariant"
      :drawer="drawer"
      @mini-variant-change="miniVariant = $event"
      @drawer-change="drawer = $event"/>
    <v-content>
      <slot/>
      <v-btn color="success">Success</v-btn>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderToolbar from '@/components/HeaderToolbar.vue';
import NavigationDrawer from '@/components/NavigationDrawer.vue';

export default {
  components: { NavigationDrawer, HeaderToolbar },
  data() {
    return {
      miniVariant: false,
      clipped: false,
      drawer: true,
      fixed: true,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
};
</script>
