<template>
  <div class="slide">
    <div class="title">{{title}}</div>
    <div class="content"><slot></slot></div>
  </div>
</template>

<style scoped>
  .slide {
  }

  .title {
    font-size: 40px;
    font-family: 'Russo One';
    padding: 40px 0 20px 40px;
  }

  .content {
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>

<script>
export default {
  props: ['title']
}
</script>
