const getLang = () => {
	const search = window.location.search;
	const params = new URLSearchParams(search);
	const lang = params.get('lang');

	return lang;
};

const markSelectedLang = () => {
	let item;
	const lang = getLang();

	if (lang) {
		item = document.querySelector(`.navigation__item--lang[data-lang='${lang}']`);
	} else {
		item = document.querySelector(`.navigation__item--lang[data-lang='en']`);
	}

	if (item) {
		item.classList.add('is-active');		
	}
};

const playFeaturesMedia = () => {
	const featuresMedia = document.querySelector('.features__media-container .content__media');

	featuresMedia.play();
};

const playHeroMedia = () => {
	const heroMedia = document.querySelector('.hero__media-container .hero__media');

	heroMedia.play();
};

const featureAnimate = () => {
	const featureItems = [...document.querySelectorAll('.feature__item')];

	let startTime = 0;
	let endTime = 5000;
	let counter = 0;

	featureItems.forEach(featureItem => {
		const description = featureItem.querySelector('.item-description');
		counter++;

		setTimeout(() => {
			featureItem.classList.add('start-bar-animation');
			description.classList.add('start-animation');
		}, startTime);

		if (counter !== featureItems.length) {
			setTimeout(() => {
				featureItem.classList.remove('start-bar-animation');
				description.classList.remove('start-animation');
				description.classList.add('stop-animation');
			}, endTime);		
		}

		startTime = startTime + 5000;
		endTime = endTime + 5000;
	});
};

const init = () => {
	const hamburger = document.querySelector('.hamburger');
	const close = document.querySelector('.close');
	const navigation = document.querySelector('.navigation');

	hamburger.addEventListener('click', () => {
		navigation.classList.add('show');
		hamburger.classList.add('is-hidden');
	});

	close.addEventListener('click', () => {
		navigation.classList.remove('show');
		hamburger.classList.remove('is-hidden');
	});

	markSelectedLang();

	setTimeout(featureAnimate, (4000 + 4000));
	setTimeout(playHeroMedia, 4000);
	setTimeout(playFeaturesMedia, (4000 + 3900));
};

init();
