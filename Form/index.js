function send() {
	let btn = document.getElementById('btn');
	setInterval(() => {
		btn.classList.add('lines');
	}, 1000);
	btn.innerHTML = '';
	btn.classList.add('envelope');
	checkFields(data);
}

function checkFields(data) {
	// name && content ? sendRequest(data) : sendError();
}

function sendRequest(data) {}

function sendError() {
	document
		.getElementById('warning')
		.removeClass('invisible')
		.addClass('visible');
}
