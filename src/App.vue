<template lang='pug'>
#app
  router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
body {
  width: 100%;
  height: 100%;
  margin: 0 0;
  background-color: rgb(242,247,254);
}
html {
  height: 100%;
}
#app,
#app > div {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

.eg-slide {
  height: 100%;
  background-color: rgb(242,247,254);
}

.eg-slide-content {
  height: 100%;
}
</style>
