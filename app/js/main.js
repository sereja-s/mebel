$(function () {

	// Подключаем выдвигающееся меню:

	/* находим класс кнопки(полосочки), при клике на которую вызывается функция, которая обращается к соответствующему классу меню и убирает у него технический класс rightside-menu--close */
	$('.header__btn').on('click', function () {
		$('.rightside-menu').removeClass('rightside-menu--close');
	});
	/* при клике на кнопку(крестик) будет добавляться технический класс rightside-menu--close и меню закроется */
	$('.rightside-menu__close').on('click', function () {
		$('.rightside-menu').addClass('rightside-menu--close');
	});





	// Подключаем меню-бургер: 

	/* находим класс кнопки( 3-и полосочки), при клике на которую вызывается функция, которая обращается к соответствующему классу меню-бургер и добавляет ему технический класс menu--open */
	$('.header__btn-menu').on('click', function () {
		$('.menu').toggleClass('menu--open');
	});





	// Активируем слайдер:

	$('.top__slider').slick({
		dots: true,
		arrows: false,
		fade: true, /* плавная смена слайдов (выцветают) */
		autoplay: true
	});

	$('.contact__slider').slick({
		slidesToShow: 10,
		slidesToScroll: 10,
		dots: true,
		arrows: false,
	});

	$('.article-slider__box').slick({
		prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/icons-svg/arrow-slide-left.svg" alt="arrow-slide-left"></button>',
		nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/icons-svg/arrow-slide-right.svg" alt="arrow-slide-right"></button>',
	});





	// Запустим миксер для галереи: 

	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living' /* отфильтровали, что бы при загрузке страницы отображались только картинки и активная кнопка указанного класса */
		}
	});

})