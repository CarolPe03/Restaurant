$(document) .ready(function() {

    //Efrecto menu
    $('.menu a').each(function(index,elemento){
        $(this).css ({
            'top':'-200px'
    });

    $(this).animate({
        top:'0'
     }, 2000 + (index*500));
    });

    //Efecto Header
    if ($(widow).width()>800){
        $('header .textos').css({
            opacity:0,
            marginTop:0
        });

        $('header .textos') .animate({
            opacity:1,
            marginTop:'-52px'
        });
    }
    //Scroll elementos menu
    var acercaDe=$('acerca-de').offset().top,
        menu=$('#platillos').offset().top,
        galeria=$('#galeria').offset().top,
        menu=$('#ubicacion').offset().top;

    $ ('btn-acerca-de').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:acercaDe -100
    },500);
    });

    $ ('btn-acerca-de').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:menu 
    },500);
    });

    $ ('btn-acerca-de').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:galeria 
    },500);
    });
    $ ('btn-acerca-de').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:animate 
    },500);
    });






});