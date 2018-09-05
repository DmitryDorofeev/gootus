<template>
  <div class="image">
    <img :src="src"/>
  </div>
</template>

<script>
export default {
  props: ['src']
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

</style>
