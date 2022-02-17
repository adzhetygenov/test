import MicroModal from 'micromodal';

export function init() {
	MicroModal.init({
		openTrigger: 'data-custom-open', // [3]
		closeTrigger: 'data-custom-close', // [4]
		openClass: 'is-open', // [5]
		disableScroll: true, // [6]
		disableFocus: false, // [7]
		awaitOpenAnimation: true, // [8]
		awaitCloseAnimation: true, // [9]
	});
}