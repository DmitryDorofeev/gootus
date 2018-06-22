<template>
  <Center>
    <img class="image" v-if="image" :src="image" alt="">
    <div class="title"><slot></slot></div>
  </Center>
</template>

<style scoped>
  .title {
    font-family: 'Russo One';
  }
  .image {
    display: block;
    width: 300px;
    margin: 30px 0;
  }
</style>

<script>
import Center from './Center'

export default {
  components: {
    Center
  },
  props: ['image']
}
</script>
