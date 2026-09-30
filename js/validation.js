import {
  salvarCadastro,
  obterCadastros,
  limparCadastros
} from "./storage.js";

function obterMensagem(campo) {
  if (campo.validity.valueMissing) {
    return "Este campo é obrigatório.";
  }

  if (campo.validity.tooShort) {
    return `Digite pelo menos ${campo.minLength} caracteres.`;
  }

  if (
    campo.validity.typeMismatch &&
    campo.type === "email"
  ) {
    return "Informe um e-mail válido.";
  }

  return "Verifique o valor informado.";
}

function mostrarErro(campo) {
  campo.classList.remove("campo-valido");
  campo.classList.add("campo-erro");

  let mensagem = campo.parentElement.querySelector(
    `[data-erro="${campo.id}"]`
  );

  if (!mensagem) {
    mensagem = document.createElement("small");
    mensagem.className = "mensagem-erro";
    mensagem.dataset.erro = campo.id;
    mensagem.id = `erro-${campo.id}`;
    mensagem.setAttribute("role", "alert");

    campo.insertAdjacentElement(
      "afterend",
      mensagem
    );
  }

  mensagem.textContent = obterMensagem(campo);

  campo.setAttribute("aria-invalid", "true");
  campo.setAttribute(
    "aria-describedby",
    `erro-${campo.id}`
  );
}

function mostrarSucesso(campo) {
  campo.classList.remove("campo-erro");
  campo.classList.add("campo-valido");

  campo.setAttribute("aria-invalid", "false");
  campo.removeAttribute("aria-describedby");

  const mensagem = campo.parentElement.querySelector(
    `[data-erro="${campo.id}"]`
  );

  if (mensagem) {
    mensagem.remove();
  }
}

function validarCampo(campo) {
  if (campo.checkValidity()) {
    mostrarSucesso(campo);
    return true;
  }

  mostrarErro(campo);
  return false;
}

function renderizarCadastros() {
  const lista = document.querySelector(
    "#lista-cadastros"
  );

  if (!lista) return;

  const cadastros = obterCadastros();

  if (cadastros.length === 0) {
    lista.innerHTML =
      "<p>Nenhum cadastro salvo.</p>";
    return;
  }

  lista.innerHTML = cadastros
    .map(
      (cadastro) => `
        <div class="cadastro-salvo">
          <strong>${cadastro.nome}</strong>
          <p>${cadastro.email}</p>
          <p>Área: ${cadastro.area}</p>
        </div>
      `
    )
    .join("");
}

export function iniciarValidacao() {
  document.addEventListener("input", (event) => {
    const campo = event.target;

    if (!campo.closest("#form-voluntario")) {
      return;
    }

    validarCampo(campo);
  });

  document.addEventListener("change", (event) => {
    const campo = event.target;

    if (!campo.closest("#form-voluntario")) {
      return;
    }

    validarCampo(campo);
  });

  document.addEventListener("submit", (event) => {
    if (event.target.id !== "form-voluntario") {
      return;
    }

    event.preventDefault();

    const formulario = event.target;

    const campos = formulario.querySelectorAll(
      "input[required], select[required]"
    );

    let formularioValido = true;

    campos.forEach((campo) => {
      if (!validarCampo(campo)) {
        formularioValido = false;
      }
    });

    if (!formularioValido) return;

    const cadastro = {
      nome: formulario.nome.value,
      email: formulario.email.value,
      area: formulario.area.value
    };

    salvarCadastro(cadastro);

    alert("Cadastro salvo com sucesso!");

    formulario.reset();

    campos.forEach((campo) => {
      campo.classList.remove(
        "campo-valido",
        "campo-erro"
      );

      campo.removeAttribute("aria-invalid");
      campo.removeAttribute("aria-describedby");
    });

    renderizarCadastros();
  });

  document.addEventListener("click", (event) => {
    if (event.target.id === "limpar-cadastros") {
      limparCadastros();
      renderizarCadastros();
    }
  });

   document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-route]");

    if (
      link &&
      link.dataset.route === "cadastro"
    ) {
      setTimeout(renderizarCadastros, 0);
    }
  });

  renderizarCadastros();
}