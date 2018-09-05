<template>
  <div>
    <t-slide>
      <Title image="/static/build.png">
        Лекция 2. Асинхронная модель Go
      </Title>
    </t-slide>
    <t-slide>
      <Title>
        Модели обработки запросов
      </Title>
    </t-slide>
    <t-slide>
      <Common title="CGI-BIN">
        <Square color="transparent">
          Request &rarr;
          <Row>
            <Col>
              <Square color="#ddffdd">
                !#/usr/local/bin/perl<Space/>
                <Square color="#ffffdd">
                  Thread #1<Space/>
                  <Square>
                    /api/v1/messages
                  </Square>
                </Square>
              </Square>
              <Square color="#ddffdd">
                !#/usr/local/bin/perl<Space/>
                <Square color="#ffffdd">
                  Thread #1<Space/>
                  <Square>
                    /api/v1/messages
                  </Square>
                </Square>
              </Square>
              <Square color="#ddffdd">
                !#/usr/local/bin/perl<Space/>
                <Square color="#ffffdd">
                  Thread #1<Space/>
                  <Square>
                    /api/v1/messages
                  </Square>
                </Square>
              </Square>
            </Col>
          </Row>
        </Square>
        Эволюция метода - prefork
      </Common>
    </t-slide>
    <t-slide>
      <Common title="Multithreading">
        <Square color="transparent">
          Request &rarr;
            <Square color="#ddffdd">
              java -cp Main.main myserver.jar<Space/>
              <Row>
                <Col>
                  <Square color="#ffffdd">
                    Thread #1<Space/>
                    <Square>
                      /api/v1/messages
                    </Square>
                  </Square>
                  <Square color="#ffffdd">
                    Thread #2<Space/>
                    <Square>
                      /api/v1/messages
                    </Square>
                  </Square>
                  <Square color="#ffffdd">
                    Thread #3<Space/>
                    <Square>
                      /api/v1/messages
                    </Square>
                  </Square>
                </Col>
              </Row>
            </Square>
        </Square>
        Эволюция метода - thread pool
      </Common>
    </t-slide>
    <t-slide>
      <Common title="Event Loop (non-blocking IO на одном ядре)">
        <Square color="transparent">
          Request &rarr;
            <Square color="#ddffdd">
              node server.js
              <Space/>
              <Row>
                <Col>
                  <Square color="#ffffdd">
                    Thread #1
                    <Space/>
                    <Square>
                      /api/v1/messages
                      <Space/>
                      <Row>
                        <Col>
                          <Square color="white">
                            <Space/>
                            wait
                            <Space/>
                          </Square>
                          <Square color="pink">
                            work
                          </Square>
                        </Col>
                        <Col>
                          <Square color="pink">
                            work
                            <Space/>
                          </Square>
                          <Square color="white">wait
                            <Space/>
                          </Square>
                        </Col>
                      </Row>
                    </Square>
                  </Square>
                </Col>
              </Row>
            </Square>
        </Square>
        В один момент обрабатывается один запрос, но I/O неблокирующий
      </Common>
    </t-slide>
      <t-slide>
      <Common title="non-blocking IO на несколько ядер">
        <Square color="transparent">
          Request &rarr;
            <Square color="#ddffdd">
              go run main.go
              <Space/>
              <Row>
                <Col>
                  <Square color="#ffffdd">
                    Thread #1
                    <Space/>
                    <Square>
                      /api/v1/messages
                      <Space/>
                      <Row>
                        <Col>
                          <Square color="white">
                            <Space/>
                            wait
                            <Space/>
                          </Square>
                          <Square color="pink">
                            work
                          </Square>
                        </Col>
                        <Col>
                          <Square color="pink">
                            work
                            <Space/>
                          </Square>
                          <Square color="white">wait
                            <Space/>
                          </Square>
                        </Col>
                      </Row>
                    </Square>
                  </Square>
                  <Square color="#ffffdd">
                    Thread #1
                    <Space/>
                    <Square>
                      /api/v1/messages
                      <Space/>
                      <Row>
                        <Col>
                          <Square color="white">
                            <Space/>
                            wait
                            <Space/>
                          </Square>
                          <Square color="pink">
                            work
                          </Square>
                        </Col>
                        <Col>
                          <Square color="pink">
                            work
                            <Space/>
                          </Square>
                          <Square color="white">wait
                            <Space/>
                          </Square>
                        </Col>
                      </Row>
                    </Square>
                  </Square>
                </Col>
              </Row>
            </Square>
        </Square>
        Оперируем легковесными потоками - горутинами
      </Common>
    </t-slide>
    <t-slide>
      <Common title="Планировщик изнутри">
        <img src="/static/sched.png" width="700px"/>
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
import TSlide from '../../components/TSlide.js'
import Title from '../../components/Title'
import Common from '../../components/Common'
import Square from '../../components/Square'
import Row from '../../components/Row'
import Col from '../../components/Col'
import Space from '../../components/Space'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: '2. Асинхронная модель Go',
    description: 'Методы распараллеливания и синхронизации',
    path: '2'
  },
  components: {
    't-slide': TSlide,
    Title,
    Common,
    Square,
    Row,
    Col,
    Space
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
