class Page {
	constructor(id) {
		this.id = id;
	}

	init() {
		initMarkup.call(this);
	}
}

function initMarkup() {
	document.addEventListener('DOMContentLoaded', () => {
		console.log(`Hello from Page`);
	});
}

export default Page;
