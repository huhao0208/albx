
$("#modifyForm").on('submit',function(){
    let dataForm = $(this).serialize();
    $.ajax({
        type:'put',
        url:'/users/password',
        data: dataForm,
        success: function(res){
            location.href = './login.html'
        },
        error: function(res){
            console.log(res);
            
        }
    })


    return false
})