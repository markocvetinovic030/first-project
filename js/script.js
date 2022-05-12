let myNav = document.querySelector("header");



window.onscroll = function () {
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1) {
        myNav.style.backgroundColor = 'black';
        myNav.style.transition = '0.5s all';
        

    } else {
        myNav.style.backgroundColor = 'transparent';
        a.style.transition = '0.5s all';
        
    }
};