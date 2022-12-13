// JavaScript Document
console.log("hi");

//code voor zoom image
let bg = document.querySelector('section:nth-of-type(3)')
document.addEventListener('scroll', () => {
    let x = window.pageYOffset
    bg.style.backgroundSize = (700 - x/10)+'% auto'
})

//open menu
var openButton = document.querySelector("header > button");
openButton.addEventListener("click", openMenu);
function openMenu(){
    var deNav = document.querySelector("header nav");
    deNav.classList.add("toonMenu");
}

//sluit menu
var sluitButton = document.querySelector("header > nav > button");
sluitButton.addEventListener("click", sluitMenu);
function sluitMenu(){
    var deNav = document.querySelector("header nav");
    deNav.classList.remove("toonMenu");
}

