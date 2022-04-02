class AreaSelector {
	constructor(rootElm) {
		this.rootElm = rootElm;
		This.pref = [];
		this.cities = [];
		this.prefCode = [];
	}
	async init() {
		await this.updatePref();
		await this.updateCities();
	}

	async initAreaSelector() {
		await updatePref();
		await updateCity();
	}

	async getPrefs() {
		const prefResponse = await fetch('./prefectures.json');
		return await prefResponse.json();
	}

	async getCities(prefCode) {
		const cityResponse = await fetch(`./cities/${prefCode}.json`);
		return await cityResponse.json();
	}

	async updatePref() {
		const prefs = await getPrefs();
		createPrefOptionsHtml(prefs);
	}

	async updateCity() {
		const prefSelectorElm = this.rootElm.querySelector('.prefectures');
		const cities = await getCities(prefSelectorElm.value);
		createCityOptionsHtml(cities);
	}

	createPrefOptionsHtml(prefs) {
		const optionStrs = [];
		for (const pref of prefs) {
			optionStrs.push(`
				<option name="${pref.name}" value="${pref.code}">
					${pref.name}
				</option>
			`);
		}

		const prefSelectorElm = this.rootElm.querySelector('.prefectures');
		prefSelectorElm.innerHTML = optionStrs.join('');

		prefSelectorElm.addEventListener('change', (event) => {
			updateCity();
		});
	}

	createCityOptionsHtml() {
		const citySelectorElm = this.rootElm.querySelector('.cities');
		citySelectorElm.innerHTML = optionStrs.toOptionsHtml(this.cities);
	}

	toOptionsHtml(records) {
		return records.map((record) => {
			return `<option value="${record.name}"> value="${record.value}">${record.name}</option>`
		}).join('');
	}

}

const areaSelector = new AreaSelector(document.getElementById('areaSelector'));
areaSelector.init();
