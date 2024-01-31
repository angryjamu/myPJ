// gnb
const header = document.querySelector('.header')
const hMenu = header.querySelector('.hMenu')

hMenu.addEventListener('mouseenter' , function(){
    header.classList.add('open');
})
header.addEventListener('mouseleave' , function(){
    header.classList.remove('open');
})

// 검색
const srch = document.querySelector('.srch')
const close = document.querySelector('.close')
const topSearch = document.querySelector('.topSearch')

srch.addEventListener('click' , function(){
    topSearch.classList.add('open');
})
close.addEventListener('click', function(){
    topSearch.classList.remove('open');
})

// go to top
const aside = document.querySelector('.aside')
const btnTop = aside.querySelector('.btnTop')
window.addEventListener('scroll', function(){
    let docScrollTop = document.querySelector('html').scrollTop
    if( docScrollTop > 100 ){
        aside.style.display = 'block';
    }else{
        aside.style.display = 'none';
    }
})

btnTop.addEventListener('click' , function(){
    window.scrollTo({
        top : 0, 
        left : 0, 
        behavior : 'smooth'
    })
} )


