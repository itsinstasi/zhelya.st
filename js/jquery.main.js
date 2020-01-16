//var supportsTouch = ('ontouchstart' in document.documentElement);
//console.log(supportsTouch);

$(document).ready(function(){
	//grid
	$('#js-grid').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('#js-items-main').removeClass('row').removeClass('linked');
		$("html,body").trigger("scroll");
	});
	$('#js-rows').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('#js-items-main').addClass('row').removeClass('linked');
	});
	$('#js-linked').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('#js-items-main').addClass('linked').removeClass('row');
	});
	
	//stories popup
	$('.js-stories-popup-open').on('click', function(){
		$('#js-stories-popup').fadeIn(250);
		
		//скрипт создания разметки попапа
		
		var storiesSwiper = new Swiper('#js-stories-popap-slider', {			
			mousewheel: mouseIs,
    		keyboard: true,
			cssMode: true,
			effect: 'fade',
			lazy: true,
      		autoplay: {
        		delay: 10000,
        		disableOnInteraction: false,
				stopOnLastSlide: true,
      		},
      		pagination: {
        		el: '#js-stories-popap-slider-pagination',
        		clickable: true,
      		},
		});
		
		function playPauseAutoplayFn(){
			if($('#js-stop-play-autoplay').hasClass('pause')){
				$('#js-stop-play-autoplay').add('#js-stories-popap-slider').removeClass('pause');
				storiesSwiper.autoplay.start();
			} else{
				$('#js-stop-play-autoplay').add('#js-stories-popap-slider').addClass('pause');
				storiesSwiper.autoplay.stop();
			}
		}
		$('#js-stop-play-autoplay').on('click', function(){
			playPauseAutoplayFn();
		});
		$('.stories-popup__slide').on('click', function(){
			playPauseAutoplayFn();
		});
		$('body').keyup(function(e) {
			if (e.which == 32) {
				e.preventDefault();
				playPauseAutoplayFn();			
			}
		});
	});	
	$('.js-stories-popup-close').on('click', function(){
		$('#js-stories-popup').fadeOut(250);
		$('#js-stories-popap-slider').slick('unslick');
	});
	
	//tags bar fix
	if($(window).width() >= 768){
		if($('#js-tags').length){
				$(window).on('scroll', function(){
					var winHeight = $(window).height();
					var cont = $('#ja-article-wrap');
					var tags = $('#js-tags');
					var contTop = cont.offset().top;
					var contHeight = cont.height();
					var tagsHeight = tags.height();
					var windScrollTop = $(window).scrollTop();
					if(tagsHeight < winHeight){
						if((windScrollTop >= contTop - 70) && ((windScrollTop + tagsHeight) < (contTop + contHeight) )){
							tags.addClass('fix');
						} else{
							tags.removeClass('fix');
						}
					}					
				})	
		}
	}
	
	//change header
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 51){
			$('#js-header').addClass('scrolled');
		} else{
			$('#js-header').removeClass('scrolled');
		}
		if($(window).scrollTop() > 51){
			$('#js-header').addClass('scrolled');
		} else{
			$('#js-header').removeClass('scrolled');
		}
	});
	if($('#js-main-header').length && $('#js-items').length){
		$(window).on('scroll', function(){
			if($(window).scrollTop() > $('#js-items').offset().top){
				$('#js-main-header').addClass('showed');
			} else{
				$('#js-main-header').removeClass('showed');
			}
		});
	}
	
    $('#js-header-up').click(function(){
    	$('html, body').animate({ scrollTop: 0}, 250); 
    }); 
	
	//accordion
	$('.js-accordion-btn').on('click', function(){
		$(this).toggleClass('open').next('.js-accordion-main').slideToggle(250);
	});
});