const container = document.querySelector(".container");

const button = document.querySelector(".wrapper-form-left");

button.addEventListener("click", () => {
    container.classList.toggle("switch");
});
