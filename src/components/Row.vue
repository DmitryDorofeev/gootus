<template>
  <div :class="['row', {space, fluid}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    space: Boolean,
    fluid: Boolean
  }
}
</script>


<style scoped>
.row {
  display: flex;
  flex-flow: row nowrap;
}

.space {
  justify-content: space-around;
}

.fluid {
  width: 90%;
}
</style>
