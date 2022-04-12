import anime from 'animejs';

export function logoAnimation(element) {
	function logoAnimEnd() {
		document.querySelector('.header').classList.add('hload');
		document.querySelector('.hlogo').classList.remove('hload');
		this.portfoliosPrint();
	}
	var logoAnim = anime({
		targets: element,
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 2000,
		delay(el, i) {
			return i * 250;
		},
	});
	logoAnim.finished.then(logoAnimEnd);
}
