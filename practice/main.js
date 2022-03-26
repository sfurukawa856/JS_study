function stopWatch(options) {
	function addMsg(message) {
		var msgElm = document.createElement('div');
		var now = new Date();
		msgElm.innerHTML = now.getHours() + '時' + now.getMinutes() + '分' + now.getSeconds() + '秒　' + message;
		var logElm = document.querySelector('.log');
		logElm.appendChild(msgElm);
	}

	options = options || {};
	var color = options.color || 'lightblue';
	var backgroundColor = options.backgroundColor || 'black';

	var display = document.getElementsByClassName('display')[0];
	display.style.color = color;
	display.style.backgroundColor = backgroundColor
	var startBtn = document.getElementsByClassName('startBtn')[0];
	var timer = null;

	startBtn.addEventListener('click', function () {
		if (timer === null) {
			var seconds = 0;
			timer = setInterval(function () {
				seconds++;
				display.innerHTML = seconds;
				console.log(seconds);
			}, 1000);
			addMsg('開始');
		}
	});

	var stopBtn = document.getElementsByClassName('stopBtn')[0];
	stopBtn.addEventListener('click', function () {
		if (timer !== null) {
			console.log('stop:' + timer);
			clearInterval(timer);
			timer = null;
			addMsg('終了');
		}
	});
};

var options = {
	color: 'lightgreen',
	backgroundColor: '#333'
}

stopWatch(options);
// stopWatch({ 'backgroundColor': 'red' });