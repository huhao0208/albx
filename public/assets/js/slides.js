
$.ajax({
    type: 'get',
    url: '/slides',
    success: function (res) {
        console.log(res);

        let html = template('slidesTpl', { data: res });
        $("#slidesBox").html(html)
    }
});

// 添加轮播图片

// 上传
$("#file").on('change', function () {
    let fd = new FormData();
    fd.append('avast', this.files[0]);
    $.ajax({
        type: 'post',
        url: '/upload',
        processData: false,
        contentType: false,
        data: fd,
        success: function (res) {


            $("#file_box").val(res[0].avast);
            $('.thumbnail').show().prop('src', res[0].avast)
        }
    })
})


// 提交 添加的
$("#slidesForm").on('submit ', function () {
    let data = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/slides',
        data: data,
        success: function (res) {

            location.reload();

        }

    })
    return false
});


// 删除

$("#slidesBox").on('click', '.sildeDelete', function () {

    $.ajax({
        type: 'delete',
        url: '/slides/' + $(this).attr('data-id'),
        success: function (res) {

            location.reload()

        }
    })

})