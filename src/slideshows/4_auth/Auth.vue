<template>
  <div>
    <t-slide>
      <Title image="/static/build.png">
        Лекция 4. API, Auth
      </Title>
    </t-slide>
    <t-slide>
      <Common title="API">
        <IImage src="/static/api.png"/>
      </Common>
    </t-slide>
    <t-slide>
      <Common title="Почему важно проектировать API">
        <ul>
          <li>Публичный API практически навсегда</li>
          <li>Хороший API - проще разрабатывать клиенты (frontend, mobile)</li>
          <li>API нужно масштабировать</li>
          <li>API нужно описывать и понимать</li>
        </ul>
      </Common>
    </t-slide>
    <t-slide>
      <Common title="RPC">
        <IImage src="/static/rpc.png"/>
      </Common>
    </t-slide>
    <t-slide>
      <Common title="REST">
        <IImage src="/static/rest-crud.png" fluid/>
      </Common>
    </t-slide>
     <t-slide>
      <Common title="GraphQL">
        <IImage src="/static/graphql.png" fluid/>
      </Common>
    </t-slide>
    <t-slide>
      <Title>
        Auth
      </Title>
    </t-slide>
    <t-slide>
      <Common title="Sessions">
        <IImage src="/static/sessions.png"/>
      </Common>
    </t-slide>
    <t-slide>
      <Common title="Stateless tokens">
        <IImage src="/static/jwt.png"/>
      </Common>
    </t-slide>
    <t-slide>
      <Common title="OAuth">
        <IImage src="/static/oauth.png"/>
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
    title: '4. API, Auth',
    description: 'проектируем API, авторизация',
    path: '4'
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
