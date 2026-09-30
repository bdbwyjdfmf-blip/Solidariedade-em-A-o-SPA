const CHAVE = "cadastrosVoluntarios";

export function obterCadastros() {
  const dados = localStorage.getItem(CHAVE);

  if (!dados) {
    return [];
  }

  try {
    return JSON.parse(dados);
  } catch {
    return [];
  }
}

export function salvarCadastro(cadastro) {
  const cadastros = obterCadastros();

  cadastros.push(cadastro);

  localStorage.setItem(
    CHAVE,
    JSON.stringify(cadastros)
  );
}

export function limparCadastros() {
  localStorage.removeItem(CHAVE);
}