$(document).ready(function(){

    $('#botonMostrar').on('click',function(){
        $('#imgContainerMo').addClass('activar');
        $('#botonMostrar').css('display','none');
    })
    
    $('#botonOcultar').on('click',function(){
        $('#imgContainerMo').removeClass('activar');
        $('#botonMostrar').css('display','block');
    })

})