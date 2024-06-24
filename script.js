
var mygallary  =document.querySelector(".mygallary");
var backButton =document.querySelector("#backButton");
var nextButton =document.querySelector("#nextButton");

nextButton.addEventListener('click',()=>{
    mygallary.scrollLeft+=800;
    mygallary.style.scrollBehavior="smooth";
});

backButton.addEventListener('click',()=>{
    mygallary.scrollLeft-=800;
    mygallary.style.scrollBehavior="smooth";
});

const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".serach-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".serach-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("mouseenter",()=>{
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");

})

closeButton.addEventListener("mouseleave",()=>{
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
    
})

var inputName = document.querySelector("#inputName");

inputName.addEventListener("keyup",(eve)=>{      // keyboard enter to save list
    if(eve.key=="Enter"){
     AddData();
    }
 })

 closeButton.addEventListener("click",()=>{
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
    
})

