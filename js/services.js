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
let servicesContainerNavigation = document.querySelector('.services-container__navigation');
let buttonShowHide = servicesContainerNavigation.querySelector('.btn-show-hide');
let servicesContainerList = servicesContainerNavigation.querySelector('.services-container__list');
let btnClickMemory = false;

buttonShowHide.addEventListener('click', function () {
	if (!btnClickMemory) {
		btnClickMemory = true;
		buttonShowHide.classList.add('btn-open');
		servicesContainerList.classList.add('services-container__list--opened');
		buttonShowHide.textContent = 'Скрыть';
		console.log('Кнопка открыть была нажата');
	} else {
		btnClickMemory = false;
		buttonShowHide.classList.remove('btn-open');
		servicesContainerList.classList.remove('services-container__list--opened');
		buttonShowHide.textContent = 'Показать все';
		console.log('Кнопка закрыть была нажата');
	}
});
