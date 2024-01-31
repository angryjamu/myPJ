$(function(){

    new WOW().init();
    
    let btnMenu = $('#header .btn-menu'),
        sideMenu = $('#header .side-menu'),
        img1 = $('.sec .img1'),
        img2 = $('.sec .img2'),
        img3 = $('.sec .img3'),
        img4 = $('.sec .img4')

    btnMenu.click(function(){
        if($(this).hasClass('on')){
            sideMenu.stop().animate({'right':'-395px'}, 300, 'swing')
            $(this).removeClass('on')
        }else{
            sideMenu.stop().animate({'right':'0px'}, 300, 'swing')
            $(this).addClass('on')
        }
    })

    img1.hover(function(){
        $(this).stop().animate({'top':'63px'}, 200, 'swing')
    } , function(){
        $(this).stop().animate({'top':'83px'}, 200, 'swing')
    })
    img2.hover(function(){
        $(this).stop().animate({'bottom':'15px'}, 200, 'swing')
    } , function(){
        $(this).stop().animate({'bottom':'0px'}, 200, 'swing')
    })
    img3.hover(function(){
        $(this).stop().animate({'top':'30px'}, 200, 'swing')
    } , function(){
        $(this).stop().animate({'top':'50px'}, 200, 'swing')
    })
    img4.hover(function(){
        $(this).stop().animate({'top':'60px'}, 200, 'swing')
    } , function(){
        $(this).stop().animate({'top':'80px'}, 200, 'swing')
    })
})