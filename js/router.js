import { templates } from "./templates.js";

const app = document.querySelector("#app");

export function navegar(rota) {
  const rotaValida = Object.hasOwn(templates, rota) ? rota : "inicio";
  app.innerHTML = templates[rotaValida];
  history.replaceState(null, "", `#${rotaValida}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function iniciarRouter() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-route]");
    if (!link) return;

    event.preventDefault();
    navegar(link.dataset.route);
  });

  window.addEventListener("hashchange", () => {
    navegar(location.hash.slice(1) || "inicio");
  });

  navegar(location.hash.slice(1) || "inicio");
}