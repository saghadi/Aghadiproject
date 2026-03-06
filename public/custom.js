let Close = document.querySelector("#close");
let Menu = document.querySelector("#menu");
let Nav = document.querySelector("nav");

Menu.addEventListener("click", () => {
    Nav.classList.add("open-nav");
    console.log("hiiii")
})
Close.addEventListener("click", () => {
    Nav.classList.remove("open-nav")
})