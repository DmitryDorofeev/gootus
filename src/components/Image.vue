<template>
  <div :class="{'image': true, 'fluid': fluid}">
    <img :src="src"/>
  </div>
</template>

<script>
export default {
  props: ['src', 'fluid']
}
</script>

<style scoped>
  .image {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .image img {
    max-width: 90%;
    height: auto;
    max-height: 90%;
  }

  .fluid img {
    width: 90%;
  }

</style>
