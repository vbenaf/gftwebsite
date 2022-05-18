window.onload = function(){
    const menu__toggle = document.querySelector('.menu__toggle');
    const body =  document.querySelector('body');
    //we trigger this function every time the user wants to 
    //hide or show the menu
    menu__toggle.addEventListener('click',function(){
        body.classList.toggle('active');
    })
}