//slide
$(function() {

    $('.sign-up h3').on('click',function(){
        $(this).parents('.sign-up').toggleClass('active');
    });




    //유효성검사
    var userIdCheck = /^[A-Za-z0-9_\-]{5,20}$/;
    var emailCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    var phonNumberCheck = /^01[0179][0-9]{7,8}$/;

    //name
    $('input[name=id]').on('blur',function(e){
        e.preventDefault();    
        var id = $('input[name=id]').val();
        if(!userIdCheck.test(id)){feedback('Please chck your name','id'); return;}
    });

    //e-mail
    $('input[name=email]').on('blur',function(e){
        e.preventDefault();    
        var id = $('input[name=email]').val();
        if(!userIdCheck.test(id)){feedback('Please chck your Email','id'); return;}
    });

    //number
    $('input[name=phone]').on('blur',function(e){
        e.preventDefault();    
        var id = $('input[name=phone]').val();
        if(!userIdCheck.test(id)){feedback('Please chck your number','id'); return;}
    });

    // 검사 alert
    function feedback(msg,el){
        alert(msg);
        $('input[name='+el+']').val('');
        setTimeout(function(){$('input[name='+el+']').focus();},500);
    }
});