$(function(){
    let item = $('#gnb li');
    let topBtn = $('.btn-top button');
    let paging = $('.paging span');
    let box = $('.box');

    item.on('click', 'a' , function(event){
        event.preventDefault(); 
        let section = $(this).attr('href');
        let sectionTop = $(section).offset().top;
        $('html, body').animate({scrollTop : sectionTop},800);
    })

    topBtn.click(function(){
        $('html , body').animate({ scrollTop : 0 }, 600 )
    })

    paging.click(function(){
        $('.paging span').removeClass('on')
        $(this).addClass('on');
        let i = $(this).index();
        let offsetT = $(box).eq(i).offset().top
        $('html, body').animate({scrollTop : offsetT},600);
    })
})