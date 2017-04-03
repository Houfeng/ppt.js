const mokit = require('mokit');
const random = require('../../common/random');

module.exports = new mokit.Component({
  template: require('./index.html'),
  data() {
    return {
      color: '#000',
      style: '',
      content: ''
    };
  },
  onCreate() {
    let index = this.$route.params.index || 1;
    index = parseInt(index) - 1;
    let slide = this.$root.slides[index];
    this.content = slide.innerHTML;
    this.color = slide.getAttribute('bgcolor') || 'rgb(' + random(20, 150) + ',' +
      random(20, 180) + ',' +
      random(20, 180) + ')';
    this.style = slide.getAttribute('style') || '';
  }
});