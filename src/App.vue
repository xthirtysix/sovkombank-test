<template lang="pug">
  #app
    app-filter
</template>

<script>
import AppFilter from "./components/AppFilter/AppFilter.vue";

export default {
  name: "App",
  components: {
    AppFilter
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

body {
  margin: 0;
}

#app {
  font-family: "PT Sans", Helvetica, Arial, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #506981;
}
</style>
