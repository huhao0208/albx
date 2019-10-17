
$.ajax({
    type:'get',
    url:'/categories',
    success: function(res){
        console.log(res);
        let html = template('categoriesTpl',{data:res});
        $(".tbodyBox").html(html);       
    }
});

// 添加分类
$("#addCategory").on('submit',function(){
    let data = $(this).serialize();
    console.log(data);
    
    $.ajax({
        type:'post',
        url:'/categories',
        data: data,
        success: function(res){
            location.reload()
        }
    });

return false;

});


// 分类数据修改渲染
$('.tbodyBox').on('click','.edit',function(){
        let id = $(this).siblings('.delete').attr('data-id');
        $.ajax({
            type:'get',
            url:'/categories/'+id,
            success: function(res){
                let html = template('mdCategoryTpl',res);
                $(".categoryBox").html(html)    
            }
        })
});

// 分类数据提交
$(".categoryBox ").on('submit','#mdCategory',function(){
   

    let data= $(this).serialize();
    console.log(data);
    
    let id=$(this).attr('data-id');
    console.log(id);
    $.ajax({
        type:'put',
        url:'/categories/'+id,
        data: data,
        success: function(result){
            console.log(result);
            location.reload();
            
        },
        error: function(result){
            console.log(result);
            
        }
    })
    return false
});

// 删除分类

$(".tbodyBox").on('click','.delete',function(){
    if(confirm('你确定要删除这个分类?')){
        $.ajax({
            type: 'delete',
            url:'/categories/'+$(this).attr('data-id'),
            success:function(res){
                location.reload();     
            }
        })   
    };
   
})
