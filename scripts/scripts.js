$(window).scroll(function() {
    let s = $(window).scrollTop();
    if(s > 70){
        $('body .header').addClass('mini');
    }else{
        $('body .header').removeClass('mini');
    }
});

$('body .seccion1').delegate('#irseccion2', 'click',function(){
    $("html, body").animate({ scrollTop: $('#seccion2').offset().top }, 800);
    return false;
});

$('body').delegate('.cta', 'click',function(){
    $("html, body").animate({ scrollTop: $('#contacto').offset().top }, 1200);
    return false;
});

$('body .header').delegate('.btn, .mainlogo', 'click',function(){
    let t = $(this).data('target');
    $("html, body").animate({ scrollTop: $('#'+t).offset().top }, 700);
    return false;
});
$('body .header').delegate('.menuMovil','click',function(event){
    if(!$(this).hasClass('active')){
        $(this).addClass(('active'));
        $('body .header .btns:eq(0)').addClass('active');
    }else{
        $(this).removeClass(('active'));
        $('body .header .btns:eq(0)').removeClass('active');
    }
    event.preventDefault();
    return false;
});
// alert(window.innerWidth+'-'+window.innerHeight)
$('body .header').delegate('.close, .btn','click',function(event){
        $('body .header .menuMovil').removeClass(('active'));
        $('body .header .btns:eq(0)').removeClass('active');
    return false;
});