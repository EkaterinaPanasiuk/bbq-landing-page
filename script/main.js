
let body=document.querySelector('body');
let burger= document.querySelector('.header__burger');
burger.addEventListener('click', function(){
    let menu=document.querySelector('.header__menu');
    menu.classList.toggle('open');
    document.querySelector('body').classList.toggle('stopscroll');
    burger.classList.toggle('cross');
})

//----------------------preloader-----------------------------


function load(){
    let preloader=document.querySelector('.preloader');
    preloader.classList.add('hide');
    setTimeout(function(){
        preloader.classList.add('none')
    },1000)
}

window.onload=load();

//------------------------zoom----------------------
window.addEventListener('mouseover', function(event){
    if(event.target.classList.contains('about__img')){
        let img=event.target;
        let card=img.closest('.about__item');
        card.classList.add('zoom');
        body.classList.add('stopscroll')
        document.addEventListener('keydown', function(event){
            console.log(event.code)
            if(event.code=="Escape"){
                card.classList.remove('zoom');
                body.classList.remove('stopscroll')
            }
        })
        }
 })

 window.addEventListener('mouseout', function(event){
    if(event.target.classList.contains('about__img')){
        let img=event.target;
        let card=img.closest('.about__item');
        card.classList.remove('zoom');
        body.classList.remove('stopscroll')
    }
 })
 

