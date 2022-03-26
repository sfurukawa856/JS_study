class StopWatch {
	constructor(options = {}) {
		this.options = options;
	}

	init() {
		let { color, backgoundColor } = this.options;

		color = color || 'lightblue';
		backgoundColor = backgoundColor || 'black';

		const display = document.querySelector('.display');
		display.style.color = color;
		display.style.backgroundColor = backgoundColor;

		this.logElm = document.querySelector('.log');

		let timer = null;
		const startBtn = document.querySelector('.startBtn');
		startBtn.addEventListener('click', function () {
			if (timer === null) {
				let seconds = 0;
				timer = setInterval(function () {
					seconds++;
					display.innerHTML = seconds;
					console.log(seconds);
				}, 1000);
				this.addMsg('開始');
			}
		});
	}

	addMsg(message) {
		const msgElm = document.createElement('div');
		const now = new Date();
		msgElm.innerHTML = `${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒 ${message}`;
		const logElm = document.querySelector('.log');
		logElm.appendChild(msgElm);
	}
}

const options = {
	color: 'lightgreen',
	backgroundColor: '#333'
}

const stopWatch = new StopWatch(options);
stopWatch.init();