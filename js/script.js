document.addEventListener('DOMContentLoaded', function () {

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
                }
            });
        });
    }
});
