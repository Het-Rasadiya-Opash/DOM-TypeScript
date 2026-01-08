const btn = document.querySelector<HTMLButtonElement>("#btn");
const bg = document.querySelector<HTMLDivElement>(".bg");

btn?.addEventListener("click", () => {
  bg?.classList.toggle("dark-mode");
});
