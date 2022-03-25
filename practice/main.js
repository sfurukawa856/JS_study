var startBtn = document.getElementsByClassName('startBtn')[0];

startBtn.addEventListener('click', function () {
	console.log('start');
	var seconds = 0;
	setInterval(function () {
		seconds++;
		console.log(seconds);
	}, 1000);
})