
// 展示文章列表函数
function showPage (option){
    $.ajax({
        type:'get',
        url: '/posts',
        data: option,
        success: function(result){
            console.log(result);
            
            let html =template('postsTpl',result);
            let html1 = template('post_pageTpl',result);
            
            $("#postsBox").html(html);
            $("#post_Page").html(html1);
        }
   });
};



// 展示第一页
showPage();

// categoryBox添加分类属性
// 获取所有分类信息
$.ajax({
    type:'get',
    url:'/categories',
    success: function(res){
      let html = template('cateopTpl',{data:res});
      
      $("#categoryBox").html(html)
        
    }
})


// 筛选数据
// let category = '';
// let state ='';

// $("#filterForm").on('change','select',function(){
//     category = $("#categoryBox").val();
//     state =$("#postState").val();
// });
$("#filterForm").on('submit',function(){

    let data = $(this).serialize();
    console.log(JSON.stringify(data));
    showPage(data);
  return false
})



