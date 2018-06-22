<template>
  <div>
    <t-slide>
      <Title image="/static/build.png">
        Лекция 1. Основы Go
      </Title>
    </t-slide>
    <t-slide>
      <Title image="/static/micro.png">
        Спасибо за внимание!
      </Title>
    </t-slide>
  </div>
</template>

<script>
import eagle from 'eagle.js'
import TSlide from '../../components/TSlide.js'
import Title from '../../components/Title'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: '1. Основы Go',
    description: 'Базовые конструкции языка',
    path: '1'
  },
  components: {
    't-slide': TSlide,
    Title
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
