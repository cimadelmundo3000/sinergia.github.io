// MENU
//////////////////////////////
$(window).scroll(function() {
    let s = $(window).scrollTop();
    if(s > 70){
        $('body .header').addClass('mini');
    }else{
        $('body .header').removeClass('mini');
    }
});

// IR A SECCION 2
//////////////////////////////
$('body .seccion1').delegate('#irseccion2', 'click',function(){
    $("html, body").animate({ scrollTop: $('#seccion2').offset().top }, 800);
    return false;
});

// CTA DE "ME INTERESA"
//////////////////////////////
$('body').delegate('.cta', 'click',function(){
    $("html, body").animate({ scrollTop: $('#contacto').offset().top }, 1200);
    return false;
});

// SCROLL TO TOP
//////////////////////////////
$('body .header').delegate('.btn, .mainlogo', 'click',function(){
    let t = $(this).data('target');
    $("html, body").animate({ scrollTop: $('#'+t).offset().top }, 700);
    return false;
});

// OPEN MENU MOVIL
//////////////////////////////
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

// CLOSE MENU MOVIL
//////////////////////////////
$('body .header').delegate('.close, .btn','click',function(event){
        $('body .header .menuMovil').removeClass(('active'));
        $('body .header .btns:eq(0)').removeClass('active');
    return false;
});

// ENVIO DE FORMULARIO
//////////////////////////////
$("body").delegate('#form-contacto','submit',function(event){

    event.preventDefault();
    event.stopPropagation();

    let campos = new FormData(event.target);
    campos = Object.fromEntries(campos.entries());
    $('body #send').hide();
    $("body #enviando").show();
    $.ajax({
        type: "POST",
        url: "https://tiendasnyco.com/contact-ssd.php",
        crossDomain: true,
        data: campos,
    }).done(function (data) {
        if(data==1){
            $("body #enviando").hide();
            $("body #enviado").show();
            setTimeout(() => {
                $("body #enviado").hide();
                $("body #send").show();
                $('body #name').val("");
                $("body #city").val("");
                $("body #email").val("");
                $("body #phone").val("");
                $("body #subject").val("");
                $("body #how").val("");
                $("body #message").val("");
            }, 5000);
        }else{
            $("body #enviando").hide();
            $("body #send").show();
        }
    }); 

});