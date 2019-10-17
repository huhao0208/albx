

// 获取用户数据
$.ajax({
    type: 'get',
    url: '/users',
    success: function (res) {
        // 拼接用户数据
        let html = template('usertpl', { data: res });
        $('#userBox').html(html)
    }
});


// 创建用户
// 当用户选择文件时
$(".container-fluid").on('change', '#avatar', function () {
    console.log(1111);

    let pic = new FormData();
    pic.append('avatar', this.files[0]);

    // 原生写法
    // let xhr = new XMLHttpRequest();
    // xhr.open('post','/upload');
    // xhr.send(pic);
    // xhr.onload =function(){
    //    if( xhr.status ==200){
    //        let res =JSON.parse(xhr.responseText);
    //        $('#preview')[0].src =res[0].avatar;
    //         $('#avatarh').val(res[0].avatar);
    //    }                                                            
    // }


    $.ajax({
        type: 'post',
        url: '/upload',
        processData: false,
        contentType: false,
        data: pic,
        success: function (res) {
            $('#preview')[0].src = res[0].avatar;
            $('#avatarh').val(res[0].avatar);


        },
        error: function (e) {
            console.log(e);

        }

    })

});
console.log($('#preview')[0].src);

//console.log($('#avatarh').val());

$('.tips').hide();
// 当表单提交时
$('#userForm').on('submit', function () {
    let formData = $(this).serialize();


    $.ajax({
        type: 'post',
        url: '/users',
        data: formData,
        success: function (res) {

            location.reload();


        },
        error: function (res) {
            $('.tips').show().html(JSON.parse(res.responseText).message);
        }
    })

    return false;
});


// 单个删除 
$("#userBox").on('click', '.user-delete', function () {
    let username = $(this).parent().siblings('.user_list_email').text();

    if (confirm('你确定要删除用户' + username + '?')) {
        let id = this.getAttribute('data-id');
        $.ajax({
            type: 'delete',
            url: '/users/' + id,
            success: function (res) {
                console.log(res);

                location.reload(res);
            },
            error: function (res) {
                console.log(res);

            }
        })
    }
});

// 获取要编辑的用户

$('#userBox').on('click', ".user-eidit", function () {

    let id = $(this).siblings('.user-delete').attr('data-id');
    $.ajax({
        type: 'get',
        url: '/users/' + id,
        success: function (res) {

            let html = template('eidit_user_tpl', res);

            $('#userform_box').html(html)

        },
        error: function (res) {
            console.log(res);

        }
    })

});

// 编辑用户

$("#userform_box").on('submit', '#user_eidit_form', function () {

    let data = $(this).serialize();
    console.log(data);

    let id = $('.user_id').attr('data-id')

    $.ajax({
        type: 'put',
        url: '/users/' + id,
        data: data,
        success: function (res) {
            console.log(res);

            location.reload();
        }

    })
    return false;
});

// 复选框

$('.checkboxAll').on('click', function () {
    let checkboxlist = $('#userBox input[type="checkbox"]');
    checkboxlist.prop('checked', $(this).prop('checked'));
    if( $(this).prop('checked')){ $('.page-action a').show()}else{ $('.page-action a').hide()}
});
$('#userBox').on('change', ' input[type="checkbox"]', function () {

    let checks = $('#userBox input[type="checkbox"]:checked').length;
    let alls = $('#userBox input[type="checkbox"]').length;
  
    if (checks == alls) {
        $('.checkboxAll').prop('checked', true);

    } else {
        $('.checkboxAll').prop('checked', false);
    }
    if (checks != 0) {
        $('.page-action a').show()

    } else {
        $('.page-action a').hide()
    }

});


// 批量删除

$('.page-action a').on("click", function () {
    let cc = $('#userBox input[type="checkbox"]:checked').parent().siblings().children('.user-delete');
    //console.log(cc);
    let id = '';
    cc.each((index, item) => {
        id += $(item).attr('data-id') + '-';
    })
    let id1 = id.substr(0,id.length-1);
    console.log(id);
    $.ajax({
        type: 'delete',
        url: '/users/' + id1,
        success: function (res) {
            console.log(res);
            
            location.reload();

        }
    })

})

