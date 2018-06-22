import eagle from 'eagle.js'

export default {
  mixins: [eagle.slide],
  props: {
    enter: { default: 'slideInRight' },
    leave: { default: 'slideOutLeft' }
  }
}
