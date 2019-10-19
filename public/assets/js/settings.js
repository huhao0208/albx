// 网站logo 上传
$('#logoFile').on('change', function () {
    let fd = new FormData();
    console.dir(this);
    fd.append('logopic', this.files[0]);
    $.ajax({
        type: 'post',
        url: '/upload',
        processData: false,
        contentType: false,
        data: fd,
        success: function (res) {

            $("#logoFile").siblings('img').prop('src', res[0].logopic);
            $("#logoBox").val(res[0].logopic);
        }
    })
});

$("#settingsForm").on("submit", function () {
    let data = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/settings',
        data: data,
<<<<<<< HEAD
        success: function (res) {
            alert('设置成功');
            location.href = '/admin/index.html'

=======
        success: function(res){
            console.log(res);
            
>>>>>>> parent of 9867ca9... 完成了首页轮播图
        }
    });
    return false
})