$(function() {

	// INTRO

	var scene = $('#parallax-intro-scene').get(0);
	var parallax = new Parallax(scene);

	$('#intro-block').delay(1000).animate({ width: '70%' }).queue(function() {

		$('#intro-name').typeIt({ 
			strings: 'Agrawal Freelancing ',
			autoStart: true
		});

		$(this).dequeue();

	});

	// NAV

	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}

})
