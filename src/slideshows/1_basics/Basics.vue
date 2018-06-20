//- (:style="{ fontSize:  '20px' }")
<template>
  <div class="eg-slideshow slide">
    <v-slide>
      <h2>Разработка веб-сервисов на Go</h2>
      <p class="center"> 100% Swag </p>
    </v-slide>
  </div>
</template>

<script>
import eagle from 'eagle.js'

var TransitionedSlide = {
  mixins: [eagle.slide],
  props: {
    enter: { default: 'slideInRight' },
    leave: { default: 'slideOutLeft' }
  }
}

export default {
  mixins: [eagle.slideshow],
  data: () => {
    return {
      fullPageWidth: null,
      fullPageHeight: null,
      parentHeight: null,
      parentWidth: null
    }
  },
  infos: {
    title: '1. Основы Go',
    description: 'Базовые конструкции языка',
    path: '1'
  },
  components: {
    'v-slide': TransitionedSlide
  }
}
</script>

<style scoped>
.slide {
  width: 100%;
  height: 100%;
  background-color: rgb(242,247,254);
}
</style>
