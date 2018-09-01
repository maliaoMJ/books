<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "hello Vue-cli@3.0"
    };
  }
};
</script>

<style lang="scss">
#app {
}
</style>
