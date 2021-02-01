
$(document).ready(function(){

    'use strict';

        new WOW().init();

	$(".shop").height($(window).height());
	$(window).resize(function(){
		$(".shop").height($(window).height());
    })

    $(".about-in").height($(".about").height());
    $(".about .back").height($(".about").height());

    $('.menu li a').click(function(e){
        e.preventDefault(); 
        $('html, body').animate({
            scrollTop: $($(this).data('scroll')).offset().top
        }, 1000)
    })
    $('.navbar .menu .bars').on('click',function(){
        $('.navbar .menu .bars i').toggleClass('fas fa-bars').toggleClass('fas fa-window-close');
        $('.navbar .menu ul').toggleClass('open');     
    })
    $('.fa-bars').on('click',function(){
        $('.navbar .menu ul li').delay(300).fadeTo(500,1);
    })
    $('.navbar .menu ul a').on('click',function(){
        $('.navbar .menu ul').removeClass('open');
        $('.navbar .menu .bars i').removeClass('fas fa-window-close').addClass('fas fa-bars')
    })
    $('.first').mouseenter(function(){
        $('.first .title h3').animate({
            opacity: '1',
            marginTop : '0'
        },400);
        $('.first .blog-in').delay(300).animate({
            opacity: '1',
            marginTop : '0'
        },400);
    })
    $('.about').mouseenter(function(){
        $('.about .about-in .about-img .image-back').animate({
            opacity: '1',
            marginTop: '0'
        },400); 
        $('.about .about-in .about-me h3').fadeTo(400,1); 
        $('.about .about-in .about-info h3').delay(200).animate({
            opacity: '1',
            marginTop : '20px'
        },400);
        $('.about .about-in .about-info .logo').delay(300).animate({
            opacity: '1',
            marginTop: '15px'
        },400); 
        $('.about .about-in .about-info p').delay(400).animate({
            opacity: '1',
            marginTop: '0'
        },400); 
        $('.about .about-in .about-info button').delay(450).animate({
            opacity: '1',
            marginTop: '10px'
        },100);     
    })

    $('.blog1').mouseenter(function(){
        $('.blog1 .title h3').animate({
            opacity: '1',
            marginTop : '0'
        },400);
        $('.blog1 .blog-in').delay(300).animate({
            opacity: '1',
            marginTop : '0'
        },400);
        $('.blog1 .blog-in button').delay(400).animate({
            opacity: '1',
            marginTop : '10px'
        },100); 
    })

    $('.contact').mouseenter(function(){
        $('.contact .contact-in .contact-left .contact-back').animate({
            opacity: '1',
            marginTop: '0'
        },400);
        $('.contact .contact-in .work-with-me h3').animate({
            opacity: '1',
        },400);
         
        $('.contact .contact-in .contact-info h3').delay(100).animate({
            opacity: '1',
            marginTop : '0'
        },400);

        $('.contact .contact-in .contact-info p').delay(150).animate({
            opacity: '1',
            marginTop : '0'
        },400); 

        $('.contact .contact-in .contact-info button').delay(200).animate({
            opacity: '1',
            marginTop : '10px'
        },100);  
    })

    $('.sign-up').mouseenter(function(){
        $('.sign-up .sign-up-info h3').animate({
            opacity: '1',
            marginTop : '0'
        },400);

        $('.sign-up .sign-up-info p').delay(100).animate({
            opacity: '1',
            marginTop : '0'
        },400); 
        $('.sign-up .sign-up-info form').delay(100).animate({
            opacity: '1',
            marginTop : '0'
        },400);
         
    })

    $('.friends').mouseenter(function(){
        $('.friends .let-be-friends h3').animate({
            opacity: '1',
            marginTop : '0'
        },400);

        $('.friends .let-be-friends .be-friends').delay(100).animate({
            marginTop : '0'
        },400); 

        $('.friends .let-be-friends .be-friends .friend').delay(100).animate({
            opacity: '1',
        },400);

        $('.friends .let-be-friends .be-friends p').delay(200).animate({
            opacity: '1'
        },400);
    })

    $('.footer').mouseenter(function(){
        $('.footer .logo').animate({
            opacity: '1',
            marginTop : '0'
        },400);

        $('.footer .foote ul').delay(100).animate({
            opacity: '1'
        },400); 

        $('.footer .foote .fa').delay(250).animate({
            opacity: '1',
            marginTop : '20px'
        },400);

    })

    $(function() {  
        $("body").niceScroll({
            cursorcolor: '#424242',
            cursorwidth: '5px',
            cursorborder: 'none',
            cursorborderradius: '5px',
            zindex: '100'
        });
    });


})