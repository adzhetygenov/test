import * as image from './modules/webpSupport.js';
import * as slider from './modules/slider.js';
import * as burger from './modules/burger.js';
import * as modal from './modules/modal.js';
import * as mail from './modules/mail.js';

document.addEventListener('DOMContentLoaded', function() {
	image.isWebp();
	slider.init();
	burger.init();
	modal.init();
	mail.init();
})
