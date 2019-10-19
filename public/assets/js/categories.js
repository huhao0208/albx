
$(".tips").hide()
$.ajax({
    type: 'get',
    url: '/categories',
    success: function (res) {
        console.log(res);
        let html = template('categoriesTpl', { data: res });
        $(".tbodyBox").html(html);
    }
});



// 添加分类
$("#addCategory").on('submit', function () {
    let data = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/categories',
        data: data,
        success: function (res) {
            location.reload()
        },
        error: function (res) {
            $(".tips").show();
            $(".tips strong").html(JSON.parse(res.responseText).message);

        }
    });

    return false;

});


// 分类数据修改渲染
$('.tbodyBox').on('click', '.edit', function () {
    $(".tips strong").html('')
    $(".tips").hide()
    let id = $(this).siblings('.delete').attr('data-id');
    $.ajax({
        type: 'get',
        url: '/categories/' + id,
        success: function (res) {
            let html = template('mdCategoryTpl', res);
            $(".categoryBox").html(html)
        }
    })
});

// 分类数据提交
$(".categoryBox ").on('submit', '#mdCategory', function () {


    let data = $(this).serialize();
    console.log(data);

    let id = $(this).attr('data-id');
    console.log(id);
    $.ajax({
        type: 'put',
        url: '/categories/' + id,
        data: data,
        success: function (result) {
            console.log(result);
            location.reload();

        },
        error: function (result) {
            console.log(result);

        }
    })
    return false
});

// 删除分类

$(".tbodyBox").on('click', '.delete', function () {
    if (confirm('你确定要删除这个分类?')) {
        $.ajax({
            type: 'delete',
            url: '/categories/' + $(this).attr('data-id'),
            success: function (res) {
                location.reload();
            }
        })
    };

})

// 批量删除按钮显示隐藏

let checkedIpt = '';
$('.checkAll').on('click', function () {
    checkedIpt = $('.tbodyBox input').prop('checked', this.checked);
    this.checked ? $(".page-action a").show() : $(".page-action a").hide();

})

$(".page-action a").hide();
$('.tbodyBox').on('change', function () {
    checkedIpt = $('.tbodyBox input[type="checkbox"]:checked');
    $('.checkAll').prop('checked', checkedIpt.length == $('.tbodyBox input[type="checkbox"]').length);
    checkedIpt.length > 0 ? $(".page-action a").show() : $(".page-action a").hide();

})

// 批量删除

$(".page-action a").on('click', function () {

    if (confirm('你确定要执行批量删除这' + checkedIpt.length + '个用户?')) {
        let id = '';
        checkedIpt.each((index, item) => {
            id += $(item).attr('data-id') + '-';
        });
        id = id.substr(0, id.length - 1);
        $.ajax({
            type: 'delete',
            url: '/categories/' + id,
            success: function (res) {
                console.log(res);
                location.reload();
            },
            error: function (res) {
                console.log(res);

            }
        })
    }



})

