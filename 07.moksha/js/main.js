

  window.addEventListener('scroll', function() {
    let scrollThreshold = window.innerWidth < 768 ? 5500 : 7310;

    if (window.scrollY > scrollThreshold) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

// wowJS
new WOW().init();