/*
Scroll-link
*/

function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}

jQuery(document).ready(function() {


	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});

    /*
        Background slideshow
    */

		$('#interior').backstretch([
			"assets/img/backgrounds/kit.jpg",
			"assets/img/backgrounds/internal.jpg"
		],{fade:4000
		});

    $('#home').backstretch([
			"assets/img/backgrounds/modularRack.jpg",
			"assets/img/backgrounds/plyline.jpg",
			"assets/img/backgrounds/racking.jpg",
			"assets/img/backgrounds/aluminiumRack.jpg"
		],{fade:1500
		});

		$('#roofracks').backstretch([
			"assets/img/backgrounds/delta.jpg",
			"assets/img/backgrounds/ultiBar.jpg",
			"assets/img/backgrounds/modularRack.jpg"
		],{fade:4000
		});


		$('#racks').backstretch("assets/img/backgrounds/modularRack.jpg");

		$('.more-services-container, .about-us-container').backstretch("assets/ico/safari-pinned-tab.svg",{
			 overlay: {
				init: true,
				background: "#000000",
				opacity: 0.7
			}
		});

		//$('#roofracks').backstretch("assets/img/backgrounds/modularRack.jpg");

    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });

    /*
        Wow
    */
    new WOW().init();

		/*
		Hide Mobile Dropdown on click
		*/
		$('.navbar-nav li a').on('click', function(){
		    if(!$( this ).hasClass('dropdown-toggle')){
		        $('.navbar-collapse').collapse('hide');
		    }
		});

		/*
		Show Dropdown on hover
		*/
		function toggleDropdown (e) {
		  const _d = $(e.target).closest('.dropdown'),
		    _m = $('.dropdown-menu', _d);
		  setTimeout(function(){
		    const shouldOpen = e.type !== 'click' && _d.is(':hover');
		    _m.toggleClass('show', shouldOpen);
		    _d.toggleClass('show', shouldOpen);
		    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
		  }, e.type === 'mouseleave' ? 300 : 0);
		}

		$('body')
		  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
		  .on('click', '.dropdown-menu a', toggleDropdown);

});
