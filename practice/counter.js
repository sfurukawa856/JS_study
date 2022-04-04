// Closureを利用して変数をカプセル化する ///////////////////
function createCounter() {
	// この値は外からいじることができません
	let value = 0;

	return {
		up: function () {
			value++;
		},
		down: function () {
			value--;
		},
		getValue: function () {
			return value;
		}
	};
}

const counter = createCounter();
counter.up();
counter.up();
counter.down();
//counter.value = 10; // valueは公開されていないのでこの操作はエラーになります
console.log(counter.getValue()); // => 1

