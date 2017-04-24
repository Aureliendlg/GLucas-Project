$(document).ready(function() {

    $(".burger_menu_button").click(function() {

        if($("li").css('left') == '0px'){

            $("li").animate({
                left: "-252px"
              }, 500, function() {
                // Animation complete.
            });

        }else{

            $("li").animate({
                left: "0px"
              }, 500, function() {
                // Animation complete.
            });
        }    
    });

    $(window).resize(function(){
        if($(window).width()> 700 ){
            $("li").removeAttr('style');
        }
    });

});