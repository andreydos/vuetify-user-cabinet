<template>
  <div id="app">
    <!--
    Even when routes use the same component, treat them
    as distinct and create the component again.
    -->
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo() {
    return {
      title: 'App main name',
    };
  },
};
</script>
<style lang="scss">
// Normalize default styles across browsers,
// https://necolas.github.io/normalize.css/
@import '~normalize.css/normalize.css';
// Style loading bar between pages.
// https://github.com/rstacruz/nprogress
@import '~nprogress/nprogress.css';

html {
  margin: 0;
}

// ===
// Vendor
// ===

#nprogress .bar {
  background: red;
}
</style>

