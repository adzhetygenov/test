export function init() {
	document.querySelector('.header__mobile-btn').addEventListener('click', function() {
		this.classList.toggle('header__mobile-btn_open');
		document.querySelector('.header__list').classList.toggle('header__list_active');
	})
}