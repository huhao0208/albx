$('#logout').on('click',function(){
    if(confirm('你确定要退出吗?')){
       
        $.ajax({
            type:'post',
            url:'/logout',
            success: function(){
                location.href = 'login.html';
                
            },
            error: function(){
                alert('退出失败')
            }
        })
    }
});
// 判断登录状态
$.ajax({
    type: 'get',
    url:'/login/status',
    success: function(res){
        console.log(res);
        
    }
})

