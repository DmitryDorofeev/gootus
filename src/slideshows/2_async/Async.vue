<template lang='pug'>
#MyFirstSlideshow
  .eg-slideshow
    slide
      h1 привет
</template>

<script>
import eagle from 'eagle.js'
export default {
  mixins: [ eagle.slideshow ],
  infos: {
    title: 'Асинхронная модель Go',
    description: 'Многопоточность, конкурентность итд',
    path: '2'
  }
}
</script>

<style lang='scss'>
@import url(https://fonts.googleapis.com/css?family=Raleway);
#MyFirstSlideshow{
  .eg-slideshow{
    font-family: 'Raleway';
    background-color: #eef;
    .eg-slide{
      .eg-slide-content{
        width: 25em;
        max-width: 80%;
        margin: 0 auto;
      }
    }
  }
  .eg-slide-content{
    width: 25em;
    max-width: 80%;
    margin: 0 auto;
  }
}
</style>
