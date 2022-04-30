'use strict';

class WordQuiz {
	constructor(rootElm) {
		this.rootElm = rootElm;
		this.gameStatus = {
			level: null
		};
	}
	async init() {
		await this.fetchQuizData();
		this.displayStartView();
	}
	async fetchQuizData() {
		try {
			const response = await fetch('./quiz.json');
			this.quizData = await response.json();
		} catch (e) {
			this.rootElm.innerHTML = '読み込み失敗';
			console.log(e);
		}
	}
	displayStartView() {
		const levelStrs = Object.keys(this.quizData);
		this.gameStatus.level = levelStrs[0];
		const optionStrs = [];
		for (let i = 0; i < levelStrs.length; i++) {
			optionStrs.push(`<option value="${levelStrs[i]}" name="level">レベル${i + 1}</option>`);
		}
		const html = `<select class="levelSelector">
        ${optionStrs.join('')}
		</select>
		<button class="startBtn">スタート</button>`;
		const parentElm = document.createElement('div');
		parentElm.innerHTML = html;

		this.replaceView(parentElm);

		const selectorElm = document.querySelector('.levelSelector');
		selectorElm.addEventListener('change', (event) => {
			this.gameStatus.level = event.target.value;
		})

		const startBtn = document.querySelector('.startBtn');
		startBtn.addEventListener('click', () => {
			this.displayQuestionView();
		});
	}

	displayQuestionView() {
		console.log(this.gameStatus.level);
		const html = `<p>ゲームを開始しました</p><button class="retireBtn">ゲームを終了する</button>`;
		const parentElm = document.createElement('div');
		parentElm.className = 'question';
		parentElm.innerHTML = html;

		this.replaceView(parentElm);

		const retireBtn = parentElm.querySelector('.retireBtn');
		retireBtn.addEventListener('click', () => {
			this.displayResultView();
		})
	}

	displayResultView() {
		const html = `<h2>ゲーム終了</h2>
		<button class="resetBtn">開始画面に戻る</button>`;

		const parentElm = document.createElement('div');
		parentElm.className = 'results';
		parentElm.innerHTML = html;

		const resetBtnElm = parentElm.querySelector('.resetBtn');
		resetBtnElm.addEventListener('click', () => {
			this.displayStartView();
		});

		this.replaceView(parentElm);
	}

	replaceView(elm) {
		this.rootElm.innerHTML = '';
		this.rootElm.appendChild(elm);
	}
}
new WordQuiz(document.querySelector('#app')).init();