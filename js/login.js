$(".adminAlert").hide();
$(".userAlert").hide();

function validation(){
    
    if($('#username').val() === 'admin' && $('#password').val() === 'admin')
    {
        $('.adminAlert').show();
        $('.userAlert').hide();
    }
    else if($('#username').val() === 'user' && $('#password').val() === 'user')
    {
        $('.userAlert').show();
        $('.adminAlert').hide();
    }
    else
    {
        alert('Invalid Input!');
        $('.userAlert').hide();
        $('.adminAlert').hide();
    }
}

$('#submit').click(function(e){
    e.preventDefault(); 
    validation();
})