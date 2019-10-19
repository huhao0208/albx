$("#modifyForm").on('submit', function() {
    let dataForm = $(this).serialize();
    $.ajax({
        type: 'put',
        url: '/users/password',
        data: dataForm,
        success: function(res) {
            console.log(res);

            location.href = './login.html'
            return false
        },
        error: function(res) {
            console.log(res);

        }
    })


    return false
})