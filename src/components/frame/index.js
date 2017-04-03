const mokit = require('mokit');
const Toolbar = require('../toolbar');

const slides = [].slice.call(document.querySelectorAll('script[type="text/slide"]'));

module.exports = new mokit.Component({
  template: require('./index.html'),
  components: {
    Toolbar
  },
  data() {
    return {
      slides
    };
  },
  onReady() {
    document.addEventListener('keydown', event => {
      let keyCode = event.keyCode;
      switch (keyCode) {
        case 37:
        case 38:
          this.toolbar.prev();
          break;
        case 39:
        case 40:
        case 32:
          this.toolbar.next();
          break;
        case 13:
          this.toolbar.togglePlay();
          break;
      }
    });
  },
  onSwipeLeft() {
    this.toolbar.next(17);
  },
  onSwipeRight() {
    this.toolbar.next(18);
  }
});