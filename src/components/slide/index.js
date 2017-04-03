const mokit = require('mokit');
const random = require('../../common/random');

module.exports = new mokit.Component({
  template: require('./index.html'),
  data() {
    return {
      bgcolor: '#000',
      style: '',
      content: '',
      align: 'left'
    };
  },
  onCreate() {
    let index = this.$route.params.index || 1;
    index = parseInt(index) - 1;
    let slide = this.$root.slides[index];
    this.content = slide.innerHTML;
    this.bgcolor = slide.getAttribute('bgcolor') || 'rgb(' + random(20, 150) + ',' +
      random(20, 180) + ',' +
      random(20, 180) + ')';
    this.align = slide.getAttribute('align') || 'left';
    this.style = slide.getAttribute('style') || '';
  }
});