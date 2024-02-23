$(function(){
    var vwH = $('.bx-viewport').height();
    $(window).on("load resize", function(){
        $('.bxslider').bxSlider({
            mode :'fade',
            pager: true,
            prevSelector : '#btn-prev',
            nextSelector : '#btn-next',
            prevText : '',
            nextText : ''
        });
        $('.bx-wrapper').css("height",vwH);
    });// window load resize

    // 윈도우 스크롤시 애니메이션
    $(window).scroll(function(){
        var winScrollT = $(window).scrollTop(); // 실제로 스크롤한 값 
        var winH = $(window).height()/2; // 실제로 스크롤한 값에 더해주는 값
        var mainScrollT = winScrollT + winH;
        var sec1=$("#section-1").offset().top;
        var sec2=$("#section-2").offset().top;
        var foot=$("#footer").offset().top;
        // 스크롤한 값이 1번 영역 위치보다 크고 2번영역 위치보다 작을때
        if(mainScrollT >= sec1 && mainScrollT <= sec2){
            $("#section-1 .main-tit")
                .animate({"top":"0","opacity":"1"},600,"swing");
            $("#section-1 .main-txt")
                .delay(400)
                .animate({"top":"0","opacity":"1"},600,"swing");
            $("#section-1 .main-con-list")
                .delay(800)
                .animate({"top":"0","opacity":"1"},600,"swing");
        }
        if(mainScrollT >= sec2 && mainScrollT <= foot){
            $("#section-2 .main-tit")
                .animate({"top":"0","opacity":"1"},600,"swing");
            $("#section-2 .main-txt")
                .delay(400)
                .animate({"top":"0","opacity":"1"},600,"swing");
            $("#section-2 .img-box")
                .delay(800)
                .animate({"top":"0","opacity":"1"},600,"swing");  
        }  
    });// scroll
    $(".main-con-list li a").click(function(){
        //e.preventDefault();
        return false;
    })
    
});






