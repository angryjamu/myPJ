$(function(){
    // 데스크탑 gnb
    $("#gnb li").each(function(i,ele){
        $(this).mouseenter(function(){
            $("#gnb li").eq(i).children("a").addClass("on")        
        });
        $(this).mouseleave(function(){
            $("#gnb li").eq(i).children("a").removeClass("on")       
        });
    });
    
    // 모바일 gnb
    var isMgnb = false;
    $(".btn-all").click(function(){
        if(isMgnb==false){
            $(".m-menu-area").animate({"left":"0"},300,"easeInCubic"); 
            isMgnb = true;
        }    
    });
    $(".btn-close").click(function(){
        if(isMgnb = true){
            $(".m-menu-area").animate({"left":"-100%"},300,"easeInCubic");
            isMgnb = false;
        }
    });
    
});