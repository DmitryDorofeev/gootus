<template>
  <div>
    <slide>
      <Title image="/static/build.png">
        Лекция 3. Работа с сетью в Go. Проектирование API
      </Title>
    </slide>
    <slide>
      network
    </slide>
    <slide>
      <Title image="/static/micro.png">
        Спасибо за внимание!
      </Title>
    </slide>
  </div>
</template>

<script>
import eagle from 'eagle.js'
import Title from '../../components/Title'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: '3. Web',
    description: 'Работа с сетью. Проектировние API.',
    path: '3'
  },
  components: {
    Title
  }
}
</script>
