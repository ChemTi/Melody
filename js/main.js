$(document).ready(function () {
	var currentFloor = 2; // текущий этаж
	var floorPath = $('.home-image path'); // каждый отдельный этаж в SVG
	var counterUp = $('.counter-up'); // кнопка увеличения этажа
	var counterDown = $('.counter-down'); // кнопка уменьшения этажа
	var modal = $('.modal'); // модальное окно
	var modalCloseButton = $('.modal-close-button'); // кнопка закрытия модального окна
	var buttonViewFlats = $('.button-view-flats'); // кнопка просмотра этажей

	// наведение мыши на этаж
	floorPath.on('mouseover', function () {
		floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
		currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
		$('.counter').text(currentFloor); // записываем значие этажа в счетчик
	});

	floorPath.on('click', toggleModal); // клик на этаж - вызвать модальное окно
	modalCloseButton.on('click', toggleModal); // клик закрыть модальное окно
	buttonViewFlats.on('click', toggleModal); // клик по кнопке смотреть квартиры на этаже

	counterUp.on('click', function () { // отслеживаем клик по кнопке вверх
		if (currentFloor < 18) { // проверяем значение этажа не больше 18
			currentFloor++; // прибавляем один этаж
			usFloors = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом, чтобы было 01, а не 1
			$('.counter').text(currentFloor); // записываем значение этажа в счетчик
			floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
			$(`[data-floor=${usFloors}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
		}
	});

	counterDown.on('click', function () { //отслеживаем клик по кнопке вниз
		if (currentFloor > 2) { // проверяем значение этажа не меньше 2
			currentFloor--; // убавляем один этаж
			usFloors = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажом, чтобы было 01, а не 1
			$('.counter').text(currentFloor); // записываем значение этажа в счетчик
			floorPath.removeClass('current-floor');  // удаляем активный класс у этажей
			$(`[data-floor=${usFloors}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
		} 
	});		

	function toggleModal() { // ф-я открыть/закрыть окно
		modal.toggleClass('is-open');
	}
});

