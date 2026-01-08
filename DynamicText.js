var usernameInput = document.querySelector(".username");
var btn = document.querySelector(".btn");
var info = document.querySelector(".info");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function (e) {
    if (!usernameInput || !info)
        return;
    info.innerHTML = "\n    <h2>Welcome</h2>\n    <p>Hello ".concat(usernameInput.value, "</p>\n  ");
});
