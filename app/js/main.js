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

	// Активируем слайдер:

	$('.top__slider').slick({
		dots: true,
		arrows: false,
		fade: true, /* плавная смена слайдов (выцветают) */
		autoplay: true
	});

	// Запустим миксер для галереи: 

	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living' /* отфильтровали, что бы при загрузке страницы отображались только картинки и активная кнопка указанного класса */
		}
	});

})