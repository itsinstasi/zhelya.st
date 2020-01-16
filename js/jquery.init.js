var mouseIs;
if (Modernizr.forcetouch) {
	mouseIs = false;
} else {
	mouseIs = true;
}

var swiper = new Swiper('#js-stories-slider', {
    slidesPerView: 7,
	mousewheel: mouseIs,
    keyboard: true,
	cssMode: true,
    navigation: {
        nextEl: '#js-stories-next',
        prevEl: '#js-stories-prev',
    },
	breakpoints: {
        600: {
        	slidesPerView: 6,
        },
		500: {
        	slidesPerView: 5,
        },
		400: {
        	slidesPerView: 4,
        },
		360: {
        	slidesPerView: 3,
        },
	},
});
var articleSwiper = new Swiper('.js-article-slider', {			
	mousewheel: mouseIs,
	forceToAxis: true,
    keyboard: true,
	cssMode: true,
	lazy: true,
    autoplay: {
    	delay: 5000,
		stopOnLastSlide: false,
    },
    pagination: {
       	el: '.js-article-slider-pagination',
       	clickable: true,
    },
	navigation: {
        nextEl: '.js-article-slider-next',
        prevEl: '.js-article-slider-prev',
    },
});
var articleSwiper = new Swiper('.js-btn-slider', {			
	mousewheel: mouseIs,
	forceToAxis: true,
    keyboard: true,
	cssMode: true,
    autoplay: {
    	delay: 3000,
		stopOnLastSlide: false,
    },
});

$(document).ready(function(){
	var loader = '<div class="items-loaded"><div class="loader"><div class="loader__pie loader__left"></div><div class="loader__pie loader__right"></div><div class="loader__pie loader__right loader__up"></div><div class="loader__mask"></div></div></div>';
	$.extend($.lazyLoadXT, {
		onshow: function() {			
    		$(this).closest('.lazy').addClass('show');    		
			if(!($(this).closest('.lazy').hasClass('loader-in'))){
				$(this).closest('.lazy').addClass('loader-in');
				$(this).closest('.lazy').find('.items-item__pic').append(loader);
				console.log(1);
			}
    	},
		onload: function() {
			function loadFnc($this){
				$this.closest('.lazy').addClass('load');
				$this.closest('.lazy').find('.loader').remove();
				if($this.width() <= $this.height()){
					$this.css('width', '100%');
				} else{
					$this.css('height', '100%');
				}
			}
			setTimeout(() => loadFnc($(this)), 1000);
    	}
	}); 	
	
	$('.js-now-lazy').each(function(){
		if($(this).width() <= $(this).height()){
			$(this).css('width', '100%');
		} else{
			$(this).css('height', '100%');
		}
	});
});
