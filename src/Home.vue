<template lang='pug'>
.frontpage
  .content
    h1
      img(src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Go_Logo_Aqua.svg/207px-Go_Logo_Aqua.svg.png")
    h2 Разработка веб-сервисов на Go

    .thumbnails
      .box-card(v-for='slideshow in slideshows')
        router-link(:to='slideshow.infos.path' @click.native="click")
          .embedded-slideshow-container
            component(:is="slideshow", :embedded='true',
                      :keyboardNavigation='false',
                      :mouseNavigation='false')
        .caption
          h4 {{slideshow.infos.title}}
          p.thumbnail-description {{slideshow.infos.description}}
</template>

<script>
import slideshows from 'slideshows/slideshows'

export default {
  data: function () {
    return {
      slideshows: slideshows.list
    }
  },
  mounted: function () {
    document.currentSlide = {}
  },
  methods: {
    click: function (evt) {
      evt.stopPropagation()
    }
  }
}
</script>

<style lang='scss' scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);

.frontpage {
  width: 100%;
  height: auto;
  position: absolute;
  .content{
    width: 800px;
    max-width: 90%;
    margin: 0 auto;
  }
}

h1, h2, h3, h4, p {
  font-weight: normal;
  font-family: 'Roboto'
}

h1 {
  font-size: 8em;
  margin-top: 0.5em;
  margin-bottom: 0;
  line-height: 0.8em;
  text-align: center;
}
h2 {
  font-size: 2.2em;
  margin-top: 0.8em;
  margin-bottom: 1.2em;
  line-height: 0.8em;
  text-align: center;
}

p {
  margin-top: 0.5em;
  font-size: 23px;
}

h3 {
  font-size: 30px;
  text-align: center;
}

h4 {
  font-size: 20px;
  text-align: center;
}

.grey {
  color: #bbb
}

.thumbnails {
  display: flex;
  justify-content: space-around;
}

.thumbnail-description {
  font-size: 13px;
}

.box-card {
  text-align: center;
  margin-bottom: 30px;
  .embedded-slideshow-container {
    position: relative;
    width: 150px;
    height: 120px;
    margin: 0 auto;
    border: 1px solid grey;
    overflow: hidden;
  }
  h3, p {
    margin-bottom: 0;
    margin-top: 0;
  }
}

a {
  text-decoration: inherit;
  color: inherit;
}

</style>
