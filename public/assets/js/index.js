// 查询文章数量

$.ajax({
    type: 'get',
    url:'/posts/count',
    success: function(res){
      
        $('.posts_count').html('<strong>'+res.postCount+'</strong>篇文章（<strong>'+ res.draftCount +'</strong>篇草稿）')
        
    }
});
// 查询分类数量

$.ajax({
    type:'get',
    url:'/categories/count',
    success: function(res){
        
        $(".cates_count").html('<strong>'+res.categoryCount+'</strong>个分类')
    }
})
// 查询评论数量

$.ajax({
    type:'get',
    url:'/comments/count',
    success: function(res){
        $('.comments_count').html(`<strong>${res.commentCount}</strong>条评论`)
    }
});