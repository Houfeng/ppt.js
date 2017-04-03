const mokit = require('mokit');
const random = require('../../common/random');

document.body.requestFullscreen = document.body.requestFullscreen ||
  document.body.webkitRequestFullScreen ||
  document.body.mozRequestFullScreen;

document.exitFullscreen = document.exitFullscreen ||
  document.webkitCancelFullScreen ||
  document.webkitExitFullScreen ||
  document.mozCancelFullScreen;

module.exports = new mokit.Component({
  template: require('./index.html'),
  data() {
    return {
      index: 0,
      total: 0,
      isPlay: false
    };
  },
  onReady() {
    this.total = this.$parent.slides.length;
    let index = this.$route.params.index || 1;
    this.index = parseInt(index);
  },
  go(index) {
    this.index = index;
    if (this.index > this.total) this.index = 1;
    if (this.index < 1) this.index = this.total;
    this.$router.go(`/slide/${this.index}`, new mokit.Transition(random(1, 68)));
  },
  next() {
    this.go(++this.index);
  },
  prev() {
    this.go(--this.index);
  },
  play() {
    document.body.requestFullscreen();
    this.isPlay = true;
  },
  stop() {
    document.exitFullscreen();
    this.isPlay = false;
  },
  togglePlay() {
    if (this.isPlay) {
      this.stop();
    } else {
      this.play();
    }
  }
});