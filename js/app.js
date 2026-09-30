import { iniciarRouter } from "./router.js";
import { iniciarValidacao } from "./validation.js";

iniciarRouter();
iniciarValidacao();
const botaoContraste = document.querySelector("#alternar-contraste");

botaoContraste.addEventListener("click", () => {
  document.body.classList.toggle("alto-contraste");

  const ativado = document.body.classList.contains("alto-contraste");

  botaoContraste.setAttribute(
    "aria-pressed",
    ativado ? "true" : "false"
  );
});