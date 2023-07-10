const hamburger1 = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links =document.querySelectorAll(".nav-links li");

hamburger1.addEventListener("click",()=>{
    navLinks.classList.toggle("open");
    hamburger1.classList.toggle("hamburger--open");
});
