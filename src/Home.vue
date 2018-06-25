<template lang='pug'>
.frontpage
  .content
    // img.logo(src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Go_Logo_Aqua.svg/207px-Go_Logo_Aqua.svg.png")
    img.gopher(src="/static/gopher.png")
    h2 Разработка веб-сервисов на Go

    .thumbnails
      .box-card(v-for='slideshow in slideshows')
        .inner
          router-link(:to='slideshow.infos.path' @click.native="click")
            .embedded-slideshow-container
              component(:is="slideshow", :embedded='true',
                        :keyboardNavigation='false',
                        :mouseNavigation='false')
          .caption
            h4 {{slideshow.infos.title}}
            p.thumbnail-description {{slideshow.infos.description}}
    .copyright Dmitry Dorofeev 2018
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
@import url(https://fonts.googleapis.com/css?family=Russo+One);

.frontpage {
  background-color: rgb(242,247,254);
  width: 100%;
  min-height: 100%;
  position: absolute;
  .content{
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
}

.gopher {
  display: block;
  width: 200px;
  height: 200px;
  margin: 10px auto;
}

.logo {
  display: block;
  margin: 40px auto;
}

h1, h2, h3, h4, p {
  font-weight: normal;
  font-family: 'Russo One'
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
  flex-flow: row wrap;
}

.thumbnail-description {
  font-size: 13px;
}

.box-card {
  position: relative;
  text-align: center;
  margin: 30px 15px;
  background-color: #fff;
  width: 350px;
  border-radius: 5px;
  z-index: 1;

  .inner {
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding: 16px;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }

  &:before, &:after{
    position: absolute;
    content: '';
    top: 120px;
    bottom: 7px;
    left: 50px;
    right: 30px;
    z-index: -1;
    box-shadow: 0 0 40px 13px rgba(0,0,0,.19);
    border-radius: 100px/20px;
  }

  .embedded-slideshow-container {
    position: relative;
    width: 150px;
    height: 120px;
    margin: 0 auto;
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

.copyright {
  margin: 10px 0;
}

</style>
