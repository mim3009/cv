import 'scss/_home.scss';

import Page from './page.js';

class HomePage extends Page {
	constructor() {
		super('home');
	}

	init() {
		super.init();

		initMarkup.call(this);
	}
}

function initMarkup() {
	document.addEventListener('DOMContentLoaded', () => {
		const cover = document.querySelector('.js-cover');

		cover.addEventListener('animationend', (e) => {
			if (e.animationName === 'fadeOut') {
				cover.remove();
			}
		});
	});
}

new HomePage().init();
