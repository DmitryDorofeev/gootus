<template>
  <div class="square" :style="{backgroundColor: color || '#ffaaaa'}"><slot></slot></div>
</template>

<script>

export default {
  props: ['color']
}

</script>

<style scoped>

.square {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin: 10px 0;
}

</style>
