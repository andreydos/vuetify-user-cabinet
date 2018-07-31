<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center v-show="visible">
        <h2>This is Timeout page</h2>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'timeout',
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
