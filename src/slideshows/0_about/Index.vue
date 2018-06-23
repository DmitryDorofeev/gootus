<template>
  <div>
    <t-slide>
      <Title>
        Лекция 0. О курсе
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
    title: '0. О курсе',
    description: 'Баллы, РК и всё такое',
    path: '0'
  },
  components: {
    't-slide': TSlide,
    Title
  }
}

</script>
