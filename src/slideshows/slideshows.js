// import eagle from 'eagle.js'

export const list = [
  require('./0_about/Index'),
  require('./1_basics/Basics'),
  require('./2_async/Async'),
  require('./4_auth/Auth')
  // require('./3_http/Http')
]

export default {
  // mixins: [eagle.slideshow],
  created () {
    debugger
  },
  methods: {
    nextSlide: () => {
      debugger
      // this.$router.push(`/${this.currentSlideIndex}/${this.step}`)
    }
  }
}
