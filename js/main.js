$(document).ready(function(){
    $('.menu-sidebar li:has(ul)').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('activado')) {
            $(this).removeClass('activado');
            $(this).children('ul').slideUp();
        }else {
            $('.menu-sidebar li ul').slideUp();//con slideup vamos a ocultar todos los submenus
            $('.menu-sidebar li').removeClass('activado');
            $(this).addClass('activado');
            $(this).children('ul').slideDown();
        }
    });

    $('.btn-menu').click(function(e){
        e.preventDefault();

    });

    $('.btn-menu').click(function(){
        $('.contenedor-menu .menu-sidebar').slideToggle();
    });

    $(window).resize(function(){
        if ($(document).width() > 1034){
            $('.contenedor-menu .menu-sidebar').css({'display' : 'block'});
        }

        if ($(document).width() < 1034){
            $('.contenedor-menu .menu-sidebar').css({'display' : 'none'});
            $('.menu-sidebar li ul').slideUp();
            $('.menu-sidebar li').removeClass('activado');
        }
    });
});
