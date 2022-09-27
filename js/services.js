/*----------------------Свайпер----------------------*/
let swiper;
let init = false;

function swiperCard() {
	if (window.innerWidth < 768) {
		if (!init) {
			init = true;
			swiper = new Swiper('.swiper', {
				direction: 'horizontal',
				effect: 'slide',
				slidesPerView: 'auto',
				centeredSlides: true,
				centeredSlidesBounds: true,
				spaceBetween: 16,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
		}
	} else if (init) {
		swiper.destroy();
		init = false;
	}
}

swiperCard();
window.addEventListener("resize", swiperCard);

/*----------------------Кнопка----------------------*/
const servicesContainerNavigation = document.querySelector('.services-container__navigation');
const buttonShowHide = servicesContainerNavigation.querySelector('.btn-show-hide');
const servicesContainerList = servicesContainerNavigation.querySelector('.services-container__list');

buttonShowHide.addEventListener('click', function () {
	if (window.innerWidth < 1664) {
		buttonShowHide.classList.toggle('btn-open');
		servicesContainerList.classList.toggle('services-container__list--opened');
	}

	if (buttonShowHide.classList.contains('btn-open')) {
		buttonShowHide.textContent = 'Скрыть';
	} else {
		buttonShowHide.textContent = 'Показать все';
	}
});