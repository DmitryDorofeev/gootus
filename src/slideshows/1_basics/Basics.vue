//- (:style="{ fontSize:  '20px' }")
<template>
<div class="eg-theme-gourmet">
  <div class="eg-slideshow">
    <v-slide>
      <h1>Разработка веб-сервисов на Go</h1>
      <p class="center"> 100% Swag </p>
    </v-slide>
  </div>
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

<style lang='scss'>
@import "node_modules/eagle.js/src/themes/gourmet/gourmet";
#EagleRecipes {
  a {
    font-weight: bold;
    cursor: pointer;
    color: black;
    text-decoration: none;
  }
  h1 {
    margin-top: 0em;
  }
  .logo {
    display: block;
    margin: 0 auto;
    max-height: 8em;
  }
  .eg-slideshow {
    .eg-slide {
      .eg-slide-content {
        .demo-slideshow {
          position: relative;
          width: 12em;
          height: 8em;
          margin: 0 auto;
        }
      }
    }
  }
  .eg-slideshow.embedded-slideshow-theme {
    background-image: none;
    background-color: white;
  }
}
</style>
