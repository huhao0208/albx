
function commentsP (page){
    $.ajax({
        type:'get',
        url:'/comments',
        data:{page},
        success: function(res){
           
            page=res.page;
            let html = template('commentsTpl',res);
            $("#commentsBox").html(html);
            let html1 = template('commentsPageTpl',res);
            $('#commentsPage').html(html1);
        }
    });
};
commentsP();


// 更改评论状态

$("#commentsBox").on('click',".commentsState",function(){
  
   
    let id = $(this).siblings('.commentsDelete').attr('data-id');
    let state =$(this).attr('data-val')==1? 0:1;;
   let page = $('#commentsPage .active').text();
  
    
    $.ajax({
        type:'put',
        url:'/comments/'+id,
        data:{state},
        success:function(res){       
            commentsP(page);   
        }
    })   
});


//删除 评论

$("#commentsBox").on('click','.commentsDelete',function(){
   if(confirm('你确定要删除这条评论?')){
    let id= $(this).attr('data-id');
    let page = $('#commentsPage .active').text();
    
    $.ajax({
        type:'delete',
        url:'/comments/'+id,
        success: function(res){
          //  console.log(res);
          commentsP(page);;
            
        }
    })
   }
})

