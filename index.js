var btn = document.querySelector("#btn");
var bg = document.querySelector(".bg");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    bg === null || bg === void 0 ? void 0 : bg.classList.toggle("dark-mode");
});
