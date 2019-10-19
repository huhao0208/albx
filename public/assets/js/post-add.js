


// 获取全部分类
$.ajax({
    type: 'get',
    url: '/categories',
    success: function (res) {
        console.log(res);

        let html = template('categoryTpl', { data: res });

        $("#category").html(html)

    }
});

// 封面文件上传

$("#feature").on('change', function () {
    console.dir(this);
    let fd = new FormData();
    fd.append('cover', this.files[0]);

    $.ajax({
        type: 'post',
        url: '/upload',
        data: fd,
        processData: false,
        contentType: false,
        success: function (res) {

            $(".thumbnail").show()[0].src = res[0].cover;
            $("#thumbnail").val(res[0].cover)

        }


    })

});


$("#addForm").on('submit', function () {
    let data = $(this).serialize()
    console.log(data);

    $.ajax({
        type: 'post',
        url: '/posts',
        data: data,
        success: function (res) {
            console.log(res);
            location.href = './admin/posts.html'

        }
    })


    return false
})