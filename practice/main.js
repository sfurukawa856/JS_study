function stopWatch(options) {
	function addMsg(message) {
		const msgElm = document.createElement('div');
		const now = new Date();
		msgElm.innerHTML = `${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒 ${message}`;
		const logElm = document.querySelector('.log');
		logElm.appendChild(msgElm);
	}

	options = options || {};
	const color = options.color || 'lightblue';
	const backgroundColor = options.backgroundColor || 'black';

	const display = document.getElementsByClassName('display')[0];
	display.style.color = color;
	display.style.backgroundColor = backgroundColor
	const startBtn = document.getElementsByClassName('startBtn')[0];
	let timer = null;

	startBtn.addEventListener('click', function () {
		if (timer === null) {
			let seconds = 0;
			timer = setInterval(function () {
				seconds++;
				display.innerHTML = seconds;
				console.log(seconds);
			}, 1000);
			addMsg('開始');
		}
	});

	const stopBtn = document.getElementsByClassName('stopBtn')[0];
	stopBtn.addEventListener('click', function () {
		if (timer !== null) {
			console.log('stop:' + timer);
			clearInterval(timer);
			timer = null;
			addMsg('終了');
		}
	});
};

const options = {
	color: 'lightgreen',
	backgroundColor: '#333'
}

stopWatch(options);
// stopWatch({ 'backgroundColor': 'red' });