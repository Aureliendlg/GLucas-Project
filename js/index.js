$(document).ready(function() {
    var stickyNavTop = $('nav').offset().top;
     
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
              
        if (scrollTop > stickyNavTop) { 

            $('nav').addClass('sticky');

            $('div.naveffect').addClass('navSticky');
            $('div.navSticky').removeClass('naveffect');

            $('div.homebutton').addClass('homebuttonSticky');
            $('div.homebuttonSticky').removeClass('homebutton');

            $('img.logo').addClass('logoSticky');
            $('img.logoSticky').removeClass('logo');

            $('div.saberlight').addClass('saberlightSticky');
            $('div.saberlightSticky').removeClass('saberlight');

            $('span.burger_menu').addClass('burger_menu_sticky');
            $('span.burger_menu_sticky').removeClass('burger_menu');

        } else {

            $('nav').removeClass('sticky'); 

            $('div.navSticky').addClass('naveffect');
            $('div.naveffect').removeClass('navSticky');

            $('div.homebuttonSticky').addClass('homebutton');
            $('div.homebutton').removeClass('homebuttonSticky');

            $('img.logoSticky').addClass('logo');
            $('img.logo').removeClass('logoSticky'); 

            $('div.saberlightSticky').addClass('saberlight');
            $('div.saberlight').removeClass('saberlightSticky');


            $('span.burger_menu_sticky').addClass('burger_menu');
            $('span.burger_menu').removeClass('burger_menu_sticky');

     
        }
    };
     
    stickyNav();
     
    $(window).scroll(function() {
        stickyNav();
    });

    // var moviesUrl = {the_phantom_menace:"https://www.youtube.com/embed/bD7bpG-zDJQ" , 
    // attack_of_the_clones:"https://www.youtube.com/embed/gYbW1F_c9eM" , 
    // revenge_of_sith:"https://www.youtube.com/embed/5UnjrG_N8hU" , 
    // new_hope:"https://www.youtube.com/embed/vZ734NWnAHA" , 
    // empire_strikes_back:"https://www.youtube.com/embed/JNwNXF9Y6kY" , 
    // return_of_jedi:"https://www.youtube.com/embed/16YLjTkK5jE", 
    // the_force_awakens:"https://www.youtube.com/embed/sGbxmsDFVnE" };

    $( "div.card" ).click(function() {

        if($(this).children('div.slidecard').css('display') == 'none'){
            $(this).children('div.bottomcard').css('height', '20px');
            $(this).children('div.bottomcard').css('box-shadow', 'none');
            $(this).children('div.cardvisiblewrapper').css('border-radius', '6px 6px 0px 0px');
            $(this).css('border-radius', '6px 6px 0px 0px');

            switch($(this).attr('id')) {
            case "the_phantom_menace" :
                $(this).find("iframe").attr("src", "https://www.youtube.com/embed/bD7bpG-zDJQ?rel=0&amp;showinfo=0");
                break;
            case "attack_of_the_clones":
                $(this).find("iframe").attr("src", "https://www.youtube.com/embed/gYbW1F_c9eM?rel=0&amp;showinfo=0");
                break;
            case "revenge_of_sith":
                $(this).find("iframe").attr("src", "https://www.youtube.com/embed/5UnjrG_N8hU?rel=0&amp;showinfo=0");
                break;
            case "new_hope":
                $(this).find("iframe").attr("src", "https://www.youtube.com/embed/vZ734NWnAHA?rel=0&amp;showinfo=0");
                break;
            case "empire_strikes_back":
                $(this).find("iframe").attr("src", "https://www.youtube.com/embed/JNwNXF9Y6kY?rel=0&amp;showinfo=0");
                break;
            case "return_of_jedi":
                $(this).find("iframe").attr("src", "https://www.youtube.com/embed/16YLjTkK5jE?rel=0&amp;showinfo=0");
                break;
            case "the_force_awakens":
                $(this).find("iframe").attr("src", "https://www.youtube.com/embed/sGbxmsDFVnE?rel=0&amp;showinfo=0");
                break;
            case "Raiders_of_the_Lost_Ark":
                $(this).find("iframe").attr("src", "https://www.youtube.com/embed/XkkzKHCx154?rel=0&amp;showinfo=0");
                break;
            case "Indiana_Jones_and_the_Temple_of_Doom":
                $(this).find("iframe").attr("src", "https://www.youtube.com/embed/2QBn0gQC1Ig?rel=0&amp;showinfo=0");
                break;
            case "Indiana_Jones_and_the_Last_Crusade":
                $(this).find("iframe").attr("src", "https://www.youtube.com/embed/A7TaY8HWYd8?rel=0&amp;showinfo=0");
                break;
            case "Kingdom_Crystal_Skul":
                $(this).find("iframe").attr("src", "https://www.youtube.com/embed/DGsaJpMbCTU?rel=0&amp;showinfo=0");
                break;
        }

        }else{
            $(this).children('div.bottomcard').css('height', '');
            $(this).children('div.cardvisiblewrapper').css('border-radius', '');
            $(this).children('div.bottomcard').css('box-shadow', '');
            $(this).children('div.cardvisiblewrapper').css('border-radius', '');
            $(this).css('border-radius', '');
        }

        $(this).children("div.slidecard").slideToggle('slow', function() {
      });
    });

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