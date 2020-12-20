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
		console.log(`Hello from HP`);
	});
}

new HomePage().init();
