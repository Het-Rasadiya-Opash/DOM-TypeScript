export {};

const usernameInput = document.querySelector<HTMLInputElement>(".username");
const btn = document.querySelector<HTMLButtonElement>(".btn");
const info = document.querySelector<HTMLDivElement>(".info");

btn?.addEventListener("click", (e: MouseEvent) => {
  if (!usernameInput || !info) return;

  info.innerHTML = `
    <h2>Welcome</h2>
    <p>Hello ${usernameInput.value}</p>
  `;
});
