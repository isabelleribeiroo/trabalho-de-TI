
const toggler = document.querySelector(".menu-toggler");
const nav = document.querySelector(".navbar");

let state = true

console.log(nav)

toggler.addEventListener("click", () => {
    nav.classList.toggle("on", state);
    state = !state;
})