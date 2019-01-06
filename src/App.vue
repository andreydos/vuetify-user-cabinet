<template>
  <div id="app">
    <!--
    If multiple routes use the same component, treat them
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
      title: 'user-cabinet',
    };
  },
};
</script>
<style lang="scss">
// Normalize default styles across browsers
@import '~normalize.css/normalize.css';
// Style loading bar between pages.
@import '~nprogress/nprogress.css';

html {
  margin: 0;
}

#nprogress .bar {
  background: red;
}
</style>

