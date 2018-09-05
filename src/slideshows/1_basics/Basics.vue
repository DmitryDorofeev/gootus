<template>
  <div>
    <t-slide>
      <Title image="/static/build.png">
        Лекция 1. Основы Go
      </Title>
    </t-slide>
    <t-slide>
      <Common title="$GOPATH">
        <IImage src="/static/gopath.png"/>
      </Common>
    </t-slide>
    <t-slide>
      <Common title="Основные команды Go">
        <ul>
          <li><code>go run &lt;filename&gt;.go</code></li>
          <li><code>go build main.go</code></li>
          <li><code>go install packagename</code></li>
          <li><code>go get packageurl</code></li>
          <li><code>go fmt</code></li>
          <li><code>go vet</code></li>
        </ul>
      </Common>
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
// import slideshow from '../slideshows.js'
import TSlide from '../../components/TSlide.js'
import Title from '../../components/Title'
import Common from '../../components/Common'
import IImage from '../../components/Image'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: '1. Основы Go',
    description: 'Базовые конструкции языка',
    path: '1'
  },
  components: {
    't-slide': TSlide,
    Title,
    Common,
    IImage
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
