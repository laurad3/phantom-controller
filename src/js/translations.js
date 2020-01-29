const i18next = require('i18next');

const getLang = () => {
	const search = window.location.search;
	const params = new URLSearchParams(search);
	const lang = params.get('lang');

	return lang;
};

const updateContent = () => {
	const elements = [...document.querySelectorAll('.i18next')];
	const lang = getLang();

	if (lang) {
		i18next.changeLanguage(lang);

		elements.map((e) => {
			const html = e.innerHTML;
			e.innerHTML = i18next.t(html);
		});
	}
};

i18next.init({
	lng: 'en',
	debug: false,
	keySeparator: ':',
	resources: {
		en: {
			translation: {
				'Features': 'Features',
				'Controller': 'Controller',
				'New haptics.': 'New haptics',
				'Forget what you knew so far about controllers. This is the next step when talking about gaming!': 'Forget what you knew so far about controllers. This is the next step when talking about gaming!',
				'Features.': 'Features.',
				'The new Phantom Controller comes with a bunch of new features that will maximize your gaming experience.': 'The new Phantom Controller comes with a bunch of new features that will maximize your gaming experience.',
				'Statement.': 'Statement.',
				'We are here to make a statement. Set a statement with the Phantom Controller and show it.': 'We are here to make a statement. Set a statement with the Phantom Controller and show it.',
			}
		},
		fi: {
			translation: {
				'Features': 'Ominaisuudet',
				'Controller': 'Ohjain',
				'New haptics.': 'Uudet haptikot',
				'Forget what you knew so far about controllers. This is the next step when talking about gaming!': 'Unohda mitä tiesit ohjaimista. Tämä on seuraava askel puhuttaessa pelaamisesta!',
				'Features.': 'Ominaisuudet.',
				'The new Phantom Controller comes with a bunch of new features that will maximize your gaming experience.': 'Uusi Phantom ohjain sisältää. uusia ominaisuuksia jotka maksimoivat pelikokemuksesi.',
				'Statement.': 'Selvitys.',
				'We are here to make a statement. Set a statement with the Phantom Controller and show it.': 'Olemme täällä antamassa lausunnon. Aseta lause Phantom ohjaimella ja näytä se.',
			}
		},
		se: {
			translation: {
				'Features': 'Funktioner',
				'Controller': 'Kontrollant',
				'New haptics.': 'Nya haptiker',
				'Forget what you knew so far about controllers. This is the next step when talking about gaming!': 'Glöm vad du hittills visste om kontrollörer. Detta är nästa steg när vi pratar om spel!',
				'Features.': 'Funktioner.',
				'The new Phantom Controller comes with a bunch of new features that will maximize your gaming experience.': 'Den nya Phantom Controller kommer med en massa nya funktioner som maximerar din spelupplevelse.',
				'Statement.': 'Påstående.',
				'We are here to make a statement. Set a statement with the Phantom Controller and show it.': 'Vi är här för att uttala oss. Ställ in ett uttalande med Phantom Controller och visa det.',
			}
		},
	}
}).then(function (t) {
	updateContent();
});