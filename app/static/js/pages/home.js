import 'scss/_home.scss';

import Page from './page.js';
import { isPrefersReducedMotion } from '../utils/media.js';

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

		if (!isPrefersReducedMotion()) {
			cover.addEventListener('animationend', (e) => {
				if (e.animationName === 'fadeOut') {
					cover.remove();
				}
			});
		} else {
			setTimeout(() => {
				cover.remove();
			}, 1500);
		}
	});
}

new HomePage().init();
