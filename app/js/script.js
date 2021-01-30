console.log("hello");

const header = document.querySelector('header');
const hamburger = document.querySelector(".navi__hamburger");
const body = document.querySelector('body');

const overlay=document.querySelector('.overlay');


hamburger.addEventListener('click',function(){
    if(hamburger.classList.contains('open')){ // close ham
        hamburger.classList.remove('open');
        header.classList.remove('open');
        body.classList.remove('noscroll');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    } else {
        hamburger.classList.add('open'); // open ham
        body.classList.add('noscroll');
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
})


