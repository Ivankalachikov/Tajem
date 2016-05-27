


                 
$(function(){
    var h_mrg = 0;  
if ($(window).height() >500){
    var h_hght = $('.header__top-line').height()+($(window).height()*0.23);
}
else {
    var h_hght = $('.header__top-line').height();
}

    var elem = $('.header__title');
    var top = $(this).scrollTop();
     
    if(top > h_hght){
        
        elem.css('top', h_mrg);
        elem.css('background-color', '#2e274d');
        elem.css('position', 'fixed');
        elem.css('margin-top', '0');
    }           
     
    $(window).scroll(function(){
        top = $(this).scrollTop();
         
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
            elem.css('background-color', 'transparent');
            elem.css('position', 'static');

        } else {
            elem.css('top', h_mrg);
            elem.css('background-color', '#2e274d');
            elem.css('position', 'fixed');
            elem.css('margin-top', '0');
        }
    });
});
