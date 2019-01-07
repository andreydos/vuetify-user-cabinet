<template>
  <v-toolbar
    app
    :clipped-left="clipped"
  >
    <v-toolbar-side-icon @click.stop="onDrawerChange"></v-toolbar-side-icon>
    <v-btn icon @click.stop="onMiniVariantChange" :disabled="!drawer">
      <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
    </v-btn>
    <v-btn icon @click.stop="onClippedChange">
      <v-icon>web</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click.stop="onRightDrawerChange">
      <v-icon>menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'HeaderToolbar',
  props: {
    clipped: Boolean,
    drawer: Boolean,
    miniVariant: Boolean,
    title: String,
    rightDrawer: Boolean,
    fixed: Boolean,
  },
  methods: {
    onMiniVariantChange() {
      this.$emit('mini-variant-change', !this.miniVariant);
    },
    onDrawerChange() {
      this.$emit('drawer-change', !this.drawer);
    },
    onRightDrawerChange() {
      this.$emit('drawer-right-change', !this.rightDrawer);
    },
    onClippedChange() {
      this.$emit('clipped-change', !this.clipped);
    }
  }
};
</script>
