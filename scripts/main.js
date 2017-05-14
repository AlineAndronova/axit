;(function($){
	'use strict';

	$('a[href*="#"]').on('click', function() {
		event.preventDefault();

		$('body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 600);

	});

	$('.ba-tabs__link').click(function(event) {
		$('.ba-tabs__link').each(function() {
			$(this).removeClass('ba-tabs__link--active')
		});

		$('.ba-tabs__content').each(function() {
			$(this).removeClass('ba-tabs__content--active')
		});

		var $tabBox = $(this);
		$tabBox.addClass('ba-tabs__link--active');

		var tabId = '#ba-tab-' + $tabBox.data('tab');
		var $tabContentBlock = $(tabId);
		$tabContentBlock.addClass('ba-tabs__content--active')
	});

})(jQuery);
