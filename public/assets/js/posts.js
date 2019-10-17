
$.ajax({
    type:'get',
    url: '/posts',
    success: function(result){
        console.log(result);
        
        let html =template('postsTpl',result);
        $("#postsBox").html(html)
    }
});
function dateFormat(date){
    date = new Date(date);
    return date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日'
};
