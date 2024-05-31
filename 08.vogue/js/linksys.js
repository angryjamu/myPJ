/// 보그 코리아 링크 시스템 JS - linksys.js ///

$(function () {

    $(".logo a").click(function () {
        location.href = "index.html";
    });

    $(".gnb a, .mognb a").click(function (e) {

        e.preventDefault();

        let mtxt = $(this).text().toLowerCase().trim();

        if (mtxt !== "search")
            location.href = "sub.html?cat=" + mtxt;
    });
});