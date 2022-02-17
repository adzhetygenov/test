import Swiper, { Navigation } from 'swiper';
// import Swiper styles

Swiper.use([Navigation]);

export function init() {
	const feedbackSlider = new Swiper('.js-slider-feedback', {
		loop: false,
		navigation: {
			nextEl: '.feedback__next',
			prevEl: '.feedback__prev'
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 1,
			  spaceBetween: 0
			}
		}
	});

	const reviewSlider = new Swiper('.js-slider-review', {
		loop: false,
		centeredSlides: true,
		navigation: {
			nextEl: '.review__next',
			prevEl: '.review__prev'
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 1,
			  spaceBetween: 15
			},
			768: {
				slidesPerView: 2.5,
				spaceBetween: 15
			  }
		}
	});
}