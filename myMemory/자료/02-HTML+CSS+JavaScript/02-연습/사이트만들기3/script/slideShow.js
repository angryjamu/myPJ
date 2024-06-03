let slideIndex = 1;
        
showSlides(slideIndex);

//next/previous 버튼 제어
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    //showSlides(slideIndex += n);
}

//dot 클릭시 이동
function currentSlide(n){
    slideIndex = n;
    showSlides(slideIndex);
    //showSlides(slideIndex = n);
}

function showSlides(n) {
    let slide = document.getElementsByClassName("slide");
    let dot = document.getElementsByClassName("dot");

    //slideIndex를 순환하기
    if(n > slide.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slide.length;
    }

    //slide의 display="none"으로 초기화
    for(let i=0; i<slide.length; i++){
        slide[i].style.display = "none";
    }

    //dot의 class에서 active를 제거
    for(let i=0; i<dot.length; i++) {
        dot[i].classList.remove("active");
    }

    slide[slideIndex - 1].style.display = "block";
    dot[slideIndex-1].classList.add("active");
}

setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);
}, 3000);