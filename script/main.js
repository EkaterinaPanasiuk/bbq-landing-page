let burger= document.querySelector('.header__burger');
burger.addEventListener('click', function(){
    let menu=document.querySelector('.header__menu');
    menu.classList.toggle('open');
    document.querySelector('body').classList.toggle('stopscroll');
    burger.classList.toggle('cross');
})