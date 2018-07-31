<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center v-show="visible">
        <h2>This is 404 page</h2>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: '404',
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    this.visible = true;
  },
  beforeDestroy() {
    this.visible = true;
  },
};
</script>
