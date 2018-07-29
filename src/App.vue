<template>
    <v-app>
        <NavigationDrawer :clipped="clipped" :drawer="drawer" :mini-variant="miniVariant"/>
        <HeaderToolbar :clipped="clipped"/>
        <v-content>
            <router-view/>
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

import HeaderToolbar from './components/HeaderToolbar';
import NavigationDrawer from './components/NavigationDrawer';

export default {
  name: 'App',
  components: { NavigationDrawer, HeaderToolbar },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
};
</script>
