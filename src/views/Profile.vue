<template>
  <MainAppLayout>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center v-show="visible">
          <h2>This is profile page</h2>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </MainAppLayout>
</template>

<script>
  import MainAppLayout from "@/views/layout/MainLayout.vue";

  export default {
  name: 'profile',
  metaInfo: {
    title: 'Profile',
    // override the parent template and just use the above title only
    // titleTemplate: null
  },
  components: {
    MainAppLayout
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    this.visible = true;
  },
  beforeDestroy() {
    this.visible = false;
  },
};
</script>
