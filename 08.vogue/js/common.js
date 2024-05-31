// 보그 코리아 공통 기능 JS - common.js //

let mob = 0;

let reFn = () => {
    if ($(window).width() <= 500) {
        mob = 1;
        $("#top").removeClass("on");
    } else {
        mob = 0;
    }
};

reFn();

$(window).resize(reFn);

$(function () {
    $("html,body").animate({
        scrollTop: "0px"
    }, 100);

    let scTop;
    let scSts = 1;
    let scSts2 = 1;
    let tm = $("#top");
    let tbtn = $(".tbtn");


    $(window).scroll(function () {

        scTop = $(this).scrollTop();

        if (scTop >= 300 && scSts2 === 1) {
            scSts2 = 0;
            tbtn.fadeIn(300);
        } else if (scTop < 300 && scSts2 === 0) {
            scSts2 = 1;
            tbtn.fadeOut(300);
        }


        if (mob) return;
        if (scTop >= 100 && scSts === 1) {
            scSts = 0;
            tm.addClass("on");
        } else if (scTop < 100 && scSts === 0) {
            scSts = 1;
            tm.removeClass("on");
        }
    });

    tbtn.click(function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: "0px"
        }, 1000, "easeInOutQuad");
    });

    $(".hbtn").click(function (e) {

        e.preventDefault();

        $("#mobx").slideToggle(600, "easeInOutQuart");
        $("#top").toggleClass("hv");

    });

    $(".sbtn").click(function (e) {

        e.preventDefault();

        $(".mos").slideToggle(300, "easeOutQuint");

    });
});