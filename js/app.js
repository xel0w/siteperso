//------------LOADER---------------
function afficher(){
    document.querySelector(".loader-content").classList.add("cache");
}

setTimeout(afficher, 3500);


//-----------BURGER MENU--------------

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu")

burger.addEventListener ('click', () =>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});