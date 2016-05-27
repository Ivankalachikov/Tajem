//Устанавливаем высоту хедера в 100% экрана
function setHeaderHeight() {
    $('.header').css({
        height: $(window).height() + 'px'
    });
    if ($(window).height() >500){
    	$('.header__top-line').css({
    		'margin-bottom': $(window).height()*0.23 + 'px'
    	});
    }
    else{
    	$('.header__top-line').css({
    		'margin-bottom': '0'
    	});
    }
    
}
setHeaderHeight(); 
$(window).resize( setHeaderHeight ); 
//


