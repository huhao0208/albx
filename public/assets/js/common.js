// 退出登录
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

// 时间格式化
function dateFormat(date){
    date = new Date(date);
    return date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日'
};
