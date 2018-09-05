<template>
  <div>
    <t-slide>
      <Title image="/static/learn.png">
        О курсе
      </Title>
    </t-slide>
    <t-slide>
      <Common title="Кто мы такие?">
        <Row space fluid>
          <Col>
            <Teacher photo="/static/dima.jpg" title="Дмитрий Дорофеев" position="Руководитель группы разработки Почты"/>
          </Col>
          <Col>
            <Teacher photo="/static/vasya.jpg" title="Василий Романов" position="Технический менеджер Почты"/>
          </Col>
        </Row>
      </Common>
    </t-slide>
    <t-slide>
      <Common title="Что будем делать?">
        <ul>
          <li><b>Модуль 1.</b> 4 занятия + РК 1</li>
          <li><b>Модуль 2.</b> 4 занятия + РК 2</li>
          <li><b>Предзащита</b></li>
          <li><b>Модуль 3.</b> 2 занятия + Хакатон + РК 3</li>
          <li><b>Модуль 4.</b> 2 занятия + РК 4</li>
          <li><b>Защита</b></li>
        </ul>
      </Common>
    </t-slide>
    <t-slide>
      <Common title="Баллы">
        <ul>
          <li><b>РК 1</b> - 30 баллов</li>
          <li><b>РК 2</b> - 30 баллов</li>
          <li><b>Хакатон</b> - 10 баллов</li>
          <li><b>РК 3</b> - 20 баллов</li>
          <li><b>РК 4</b> - 10 баллов</li>
          <li><b>Защита</b> - 10 баллов</li>
        </ul>
        <div><strong>Итого</strong> - 100 баллов</div>
      </Common>
    </t-slide>
    <t-slide>
      <Title>
        <a href="https://www.youtube.com/watch?v=9Pk7xAT_aCU&list=PLrCZzMib1e9q-X5V9pTM6J0AemRWseM7I">Запись курса</a>
        <br/>
        (весна 2017)
      </Title>
    </t-slide>
    <t-slide>
      <Title>Lets code!</Title>
    </t-slide>
  </div>
</template>

<script>
import eagle from 'eagle.js'
// import slideshow from '../slideshows.js'
import TSlide from '../../components/TSlide.js'
import Title from '../../components/Title'
import Row from '../../components/Row'
import Col from '../../components/Col'
import Common from '../../components/Common'
import Teacher from '../../components/Teacher'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: '0. О курсе',
    description: 'Баллы, РК и всё такое',
    path: '0'
  },
  components: {
    't-slide': TSlide,
    Title,
    Common,
    Row,
    Col,
    Teacher
  }
}

</script>
