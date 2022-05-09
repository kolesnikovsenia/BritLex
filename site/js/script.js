const burgerButtonSelector = document.querySelector('.burger');
const mobileMenuSelector = document.querySelector('.header_hiden');
const closeButtonSelector = document.querySelector('.burger_hiden');
const bodyWrapperSelector = document.querySelector('.body_wrapper');

burgerButtonSelector.addEventListener("click",()=>{
    mobileMenuSelector.classList.add("active")
    bodyWrapperSelector.classList.add("active")
})

closeButtonSelector.addEventListener("click",()=>{
    mobileMenuSelector.classList.remove("active")
    bodyWrapperSelector.classList.remove("active")
})

