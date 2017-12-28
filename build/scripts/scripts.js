$(document).ready(function() {
	//вызов прелоадера
	$('.preloader__on').click(function() {
		$('.preloader__wrap').addClass('active');
	});


	//селект
	$('.select').click(function(){
		
		$(this).toggleClass('active');
		
		
		$('.select__item').click(function(){	
			$(this).siblings().removeClass('active');
			$(this).addClass('active');	

			var selectText = $(this).text();
			
			$(this).closest('.select').children('.select__input').val(selectText);
		});
	});


	//Мультиселект
	
	function bindSelectedItemsToInput() {
		var selectedItemsAsString = "";
		var selectedItems = $('.m-select__item.active');
		var selectedItemsCount = selectedItems.length;

		selectedItems.each(function(index) {
			selectedItemsAsString += $(this).text();
			if(index != selectedItemsCount - 1)
				selectedItemsAsString += ', ';
		});
		$('.m-select__input').val(selectedItemsAsString);
	}

	bindSelectedItemsToInput();

	$('.m-select__input').click(function() {
		var $mlDropbox = $(this).siblings('.m-select__dropbox');
		var $mlContainer = $(this).closest('.m-select');
		if(!$mlDropbox.hasClass("active"))
		{
			$('	.m-select').removeClass("active");
		}

		$mlDropbox.toggleClass('active');
		$mlContainer.toggleClass('active');
	});

	$( '.m-select__item').click(function() {
		$(this).toggleClass('active');
		bindSelectedItemsToInput();
	});
	


	

});

	












