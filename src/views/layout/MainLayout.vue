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
      @drawer-change="drawer = $event"
      @fixed-change="fixed = $event"
      @drawer-right-change="rightDrawer = $event"/>

    <v-content>
      <!--slot for views-->
      <slot/>
    </v-content>

    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
      class="pa-2"
    >
      <h3>Additional info</h3>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
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
      drawer: this.$vuetify.breakpoint.lgAndUp,
      fixed: true,
      right: true,
      rightDrawer: false,
      title: 'User cabinet demo project',
    };
  },
  watch: {
    fixed(val) {
      debugger
    }
  }
};
</script>
