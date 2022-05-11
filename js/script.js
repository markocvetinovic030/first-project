let myNav = document.querySelector("header");
let p = document.querySelector("p")

window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1) {
        myNav.style.backgroundColor = 'white';
        myNav.style.transition = '0.8s all';
        p.style.color = 'black';


    } else {
        myNav.style.backgroundColor = 'transparent';
        p.style.color = 'white';
    }
};