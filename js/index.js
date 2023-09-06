const settingSlader = {
	direction: 'horizontal',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets'
	},
	breakpoints: {
		320: {
			enabled: true,
			spaceBetween: 16,
			slidesPerView: 1.25
		},
		375: {
			enabled: true,
			spaceBetween: 16,
			slidesPerView: 'auto'
		},
		768: {
			spaceBetween: 24,
			enabled: false
		},
		1120: {
			enabled: false,
			spaceBetween: 30
		}
	}
};

const brandBtnSelector = document.querySelector('.brands-swiper__btn button');
const brandContentSelector = document.querySelector('.brands-swiper__wrapper');

brandBtnSelector.addEventListener('click', e => {
	brandBtnSelector.classList.toggle('active');
	brandContentSelector.classList.toggle('active');

	if (!brandBtnSelector.classList.contains('active')) {
		brandBtnSelector.textContent = 'Показать все';
	} else {
		brandBtnSelector.textContent = 'Скрыть';
	}
});

const swiper = new Swiper('.brands-swiper', settingSlader);
