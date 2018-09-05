<template>
  <div class="teacher">
    <div class="photo">
      <img :src="photo"/>
    </div>
    <div class="title">{{title}}</div>
    <div class="position">{{position}}</div>
  </div>
</template>

<script>
export default {
  props: ['photo', 'title', 'position']
}
</script>

<style scoped>
  .teacher {
    width: 100%;
  }

  .photo {
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 50%;
  }

  .photo img {
    width: 300px;
    height: auto;
  }

  .title {
    text-align: center;
  }

  .position {
    text-align: center;
    font-size: 13px;
  }
</style>
