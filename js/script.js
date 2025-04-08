document.addEventListener('DOMContentLoaded', function () {

    new WOW().init();

    const btnMenu = document.querySelector('.header__btn-menu');
    const menu = document.querySelector('.header__menu');
    const headerBody = document.querySelector('.header__body');

    if (btnMenu && menu && headerBody) {
        btnMenu.addEventListener('click', function () {
            this.classList.toggle('_active');
            menu.classList.toggle('_active');
            headerBody.classList.toggle('_active');
        });
    }

    const isOnMainPage =
        window.location.pathname === '/' ||
        window.location.pathname.endsWith('/index.html');

    if (isOnMainPage) {
        const anchorLinks = document.querySelectorAll('a[href^="#"], a[href^="/index.html#"]');

        anchorLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                const anchorId = href.includes('#') ? href.split('#')[1] : null;

                const target = document.getElementById(anchorId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    history.pushState(null, '', `#${anchorId}`);

                    btnMenu?.classList.remove('_active');
                    menu?.classList.remove('_active');
                    headerBody?.classList.remove('_active');
                }
            });
        });
    }


    $('.home-works-slider').slick({
        arrows: true,
        appendArrows: '.home-works-slider__buttons',
        prevArrow: '.home-works-slider__btn-prev',
        nextArrow: '.home-works-slider__btn-next',
        slidesToShow: 1,
        dots: false,
        speed: 800,
        autoplay: false,
        autoplaySpeed: 1200,
        variableWidth: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                }
            },
        ]
    });

});

window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.transition = 'opacity 0.6s ease';
        preloader.style.opacity = '0';

        setTimeout(() => {
            if (preloader.parentNode) {
                preloader.parentNode.removeChild(preloader);
            }
        }, 600);
    }
});
