$(function(){
    let item = $('#gnb li')
    let btnTop = $('.btn-top button')
    let paging = $('.paging span')
    let box = $('.box')

    item.on('click','a',function(e){
        e.preventDefault()

        let section = $(this).attr('href')
        let sectionTop = $(section).offset().top
        
        $('html,body').animate({scrollTop : sectionTop},700)
    })

    btnTop.click(function(){
        $('html,body').animate({scrollTop : 0},700)
    })

    paging.click(function(){
        $('.paging span').removeClass('on')
        $(this).addClass('on')
        let i = $(this).index()
        let offsetT = $(box).eq(i).offset().top
        $('html, body').animate({scrollTop : offsetT},700)
    })
})