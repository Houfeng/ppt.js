require('mditor/dist/css/mditor.css');
require('./assets/common.less');

const mokit = require('mokit');
const Router = require('mokit-router');
const Touch = require('mokit-touch');
const Transition = require('mokit-transition');
const Frame = require('./components/frame');
const Slide = require('./components/slide');

mokit.use(Router);
mokit.use(Touch);
mokit.use(Transition);

var router = new mokit.Router();

router.map({
  '/': Slide,
  '/slide/{index}': Slide
});

router.start(Frame, document.body);