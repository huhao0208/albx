// 网站首页

// 获取logo 信息
$.ajax({
    type:'get',
    url:'/settings',
    success: function(res){
       
        $(".logo img").prop('src',res.logo)
    }
});

// 获取分类列表

$.ajax({
    type:'get',
    url:"/categories",
    success: function(res){
        console.log(res);
        let html = template('hm_cate_Tpl',{data:res})
        $(".nav").html(html)
    }
})


// 获取轮播图 carouselTpl
$.ajax({
    type:'get',
    url:'/slides',
    success: function(res){
        console.log(res);
        let html = template('carouselTpl',{data:res});
        $("#carouselBox").html(html);


        var swiper = new Swiper('.swiper-container', {
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination'
            },
          });    
        
    }
})

