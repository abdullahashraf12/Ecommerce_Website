$("#password,#password2").on('keyup',function(){
if($('#password').val() == $('#password2').val()) {
    $('#message_pass').html('Password Matched ').css('color', 'green');

    }else{
    $('#message_pass').html('Password Not Matching').css('color', 'red');

    }});