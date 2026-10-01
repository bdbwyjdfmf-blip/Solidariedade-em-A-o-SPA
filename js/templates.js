const projetos = [
  {
    titulo: "Educação",
    descricao: "Atividades educativas, reforço escolar e oportunidades de aprendizagem."
  },
  {
    titulo: "Alimentação",
    descricao: "Campanhas de arrecadação e distribuição de alimentos."
  },
  {
    titulo: "Comunidade",
    descricao: "Ações para fortalecer a comunidade e incentivar a participação social."
  }
];

const cardsProjetos = projetos.map((projeto) => `
  <article class="card">
    <h2>${projeto.titulo}</h2>
    <p>${projeto.descricao}</p>
  </article>
`).join("");

export const templates = {
  inicio: `
    <section class="hero">
      <div class="container">
        <span class="eyebrow">Solidariedade que transforma</span>
        <h1>Juntos podemos construir um futuro melhor.</h1>
        <p>Desenvolvemos projetos sociais para apoiar pessoas e fortalecer a comunidade.</p>
        <img
  src="../imagens/voluntariado.webp"
  alt="Voluntários participando de uma ação de distribuição de alimentos"
  loading="lazy"
  width="1024"
  height="1024"
>
        <a href="#projetos" class="btn" data-route="projetos">
          Conheça nossos projetos
        </a>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Quem somos</h2>
        <p>
          Uma organização dedicada a iniciativas de educação,
          alimentação e desenvolvimento comunitário.
        </p>
      </div>
    </section>`,

  projetos: `
    <section class="section">
      <div class="container">
        <span class="eyebrow">Nossos projetos</span>
        <h1>Frentes de atuação</h1>

        <div class="cards">
          ${cardsProjetos}
        </div>
      </div>
    </section>`,

  cadastro: `
    <section class="section">
      <div class="container">
        <span class="eyebrow">Voluntariado</span>
       <h1 id="titulo-cadastro">Cadastre-se para participar</h1>

        <form id="form-voluntario" novalidate aria-labelledby="titulo-cadastro">
          <label for="nome">Nome completo</label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            minlength="3"
          >

          <label for="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            required
          >

          <label for="area">Área de interesse</label>
          <select id="area" name="area" required>
            <option value="">Selecione</option>
            <option>Educação</option>
            <option>Alimentação</option>
            <option>Comunidade</option>
          </select>

          <button class="btn" type="submit">
            Enviar cadastro
          </button>
        </form>
        <div class="cadastros-area">
  <h2>Cadastros salvos</h2>
  <div id="lista-cadastros"></div>

  <button
    type="button"
    class="btn"
    id="limpar-cadastros"
  >
    Limpar cadastros
  </button>
</div>
      </div>
    </section>`
};