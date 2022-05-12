let myNav = document.querySelector("header");
let login = document.querySelector("#login");
let signup = document.querySelector("#signup");
let whitelogo = document.querySelector("#whitelogo");
let blacklogo = document.querySelector("#blacklogo");
let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
let fourth = document.querySelector("#fourth");
let fifth = document.querySelector("#fifth");
let sixth = document.querySelector("#sixth");



window.onscroll = function () {
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1) {
        myNav.style.backgroundColor = 'white';
        myNav.style.transition = '0.5s all';
        first.style.color = 'black';
        second.style.color = 'black';
        third.style.color = 'black';
        fourth.style.color = 'black';
        fifth.style.color = 'black';
        sixth.style.color = 'black';
        login.style.backgroundColor = 'black';
        login.style.color = 'white';
        login.style.transition = '0.5s all'
        signup.style.border = '1px solid black';
        whitelogo.style.display = 'none'
        blacklogo.style.display = 'inline-block'
        

    } else {
        myNav.style.backgroundColor = 'transparent';  
        myNav.style.transition = '1s all'; 
        first.style.color = 'white';
        second.style.color = 'white';
        third.style.color = 'white';
        fourth.style.color = 'white';
        fifth.style.color = 'white';
        sixth.style.color = 'white';
        login.style.backgroundColor = 'white';
        login.style.color = 'black';
        login.style.transition = '0.5s all'
        signup.style.border = 'none';
        whitelogo.style.display = 'inline-block'
        blacklogo.style.display = 'none' 
     
    }
};




