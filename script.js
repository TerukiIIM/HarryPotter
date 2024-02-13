// [SCROLL TO TOP] //
const nav = document.querySelector("nav")
const button = document.querySelector(".btn");

window.onscroll = function() {scrollFunction()};

scrollFunction = () => {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        button.style.display = "block";
        nav.style.top = "-100px";
    } else {
        button.style.display = "none";
        nav.style.top = "0px";
    }
}

topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// [ MENU HAMBURGER ] //
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".navLinks");

changeMenuIcon = (icon) => {
    icon.classList.toggle("fa-times")
}

menu.addEventListener("click", () => {
    navLinks.classList.toggle("mobileMenu");
    
    if (body.style.overflow != "hidden") {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "visible";
    }
})

// [ DARKMODE ] //
const darkMode = document.querySelector(".darkMode");
const body = document.querySelector('body');

changeModeIcon = (icon) => {
    console.log(icon)
    icon.classList.toggle("fa-moon")
}

darkMode.addEventListener("click", function() {
    body.classList.toggle("darkMode")
    
    if (body.style.background != "black") {
        body.style.background = "black"
        sessionStorage.setItem("darkMode", "true")
    } else {
        body.style.background = "white"
        sessionStorage.setItem("darkMode", "false")
    }
})

let mode = sessionStorage.getItem("darkMode")

if (!sessionStorage.getItem("darkMode")) {
    sessionStorage.setItem("darkMode", "false")
} else 

if(mode == "true") {
    body.style.background = "black";
    body.classList.toggle("darkMode");
}

// [ REGISTER / LOGIN ] //
const register = document.querySelector(".register");
const loginLink = document.querySelector(".loginLink");
const registerLink = document.querySelector(".registerLink");
const login = document.querySelector(".log");
const close = document.querySelector(".closeIcon");

registerLink.addEventListener("click", () => {
    register.classList.add("active")
})

loginLink.addEventListener("click", () => {
    register.classList.remove("active")
})

login.addEventListener("click", () => {
    register.classList.toggle("activeRegister")
})

close.addEventListener("click", () => {
    register.classList.remove("activeRegister")
})

// [ TABS ] //
// const lightbox = new SimpleLightbox(".card a");

// const options = {
//   gutterPixels: 50,
// };

// const filterizr = new Filterizr(".tabCharacter", options);

// let filterItems = document.querySelectorAll(".filter li");
// filterItems.forEach(function (filterItem) {
//   filterItem.addEventListener("click", function () {
//     document.querySelector(".filter .active").classList.remove("active");
//     filterItem.classList.add("active");
//   });
// });