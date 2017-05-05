$(document).ready(function(e) {
	$('.imageHolder').click(function(e) {
		var clickedContainer = $(this).parent().parent();
		var clickedBio = $(this).next().next();
		var visibleBio = null;

		if(clickedBio.is(':visible')) {
			clickedBio.slideUp();
			clickedBio.prev().prev().removeClass('activeImage');
		}else {
			clickedContainer.siblings().each(function() {
				var bio = $(this).find('p');
				if(bio.is(':visible')) {
					visibleBio = bio;
				}
			});
			if(visibleBio != null) {
				visibleBio.prev().prev().removeClass('activeImage');
				visibleBio.slideUp('fast', function() { 
					clickedBio.slideDown(); 
				})
			}else {
				clickedBio.slideDown();
			}
		}
	});

	$('.team_img').hover(function() {
		$(this).addClass('activeImage');
	}, function() {
		var bio = $(this).parent().next().next();
		if(!bio.is(':visible')) {
			$(this).removeClass('activeImage');
		}
	});
});