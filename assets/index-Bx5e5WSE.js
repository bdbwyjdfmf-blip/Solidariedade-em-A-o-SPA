(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new URL(new URL(`voluntariado-Btr0IGgf.webp`,import.meta.url).href,``+import.meta.url).href,t=[{titulo:`Educação`,descricao:`Atividades educativas, reforço escolar e oportunidades de aprendizagem.`},{titulo:`Alimentação`,descricao:`Campanhas de arrecadação e distribuição de alimentos.`},{titulo:`Comunidade`,descricao:`Ações para fortalecer a comunidade e incentivar a participação social.`}].map(e=>`
  <article class="card">
    <h2>${e.titulo}</h2>
    <p>${e.descricao}</p>
  </article>
`).join(``),n={inicio:`
    <section class="hero">
      <div class="container">
        <span class="eyebrow">Solidariedade que transforma</span>
        <h1>Juntos podemos construir um futuro melhor.</h1>
        <p>Desenvolvemos projetos sociais para apoiar pessoas e fortalecer a comunidade.</p>
        <img
  src="${e}"
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
    </section>`,projetos:`
    <section class="section">
      <div class="container">
        <span class="eyebrow">Nossos projetos</span>
        <h1>Frentes de atuação</h1>

        <div class="cards">
          ${t}
        </div>
      </div>
    </section>`,cadastro:`
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
    </section>`},r=document.querySelector(`#app`);function i(e){let t=Object.hasOwn(n,e)?e:`inicio`;r.innerHTML=n[t],history.replaceState(null,``,`#${t}`),document.querySelectorAll(`[data-route]`).forEach(e=>{e.dataset.route===t?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)});let i=document.querySelector(`#conteudo-principal`);i&&i.focus(),window.scrollTo({top:0,behavior:`smooth`})}function a(){document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-route]`);t&&(e.preventDefault(),i(t.dataset.route))}),window.addEventListener(`hashchange`,()=>{i(location.hash.slice(1)||`inicio`)}),i(location.hash.slice(1)||`inicio`)}var o=`cadastrosVoluntarios`;function s(){let e=localStorage.getItem(o);if(!e)return[];try{return JSON.parse(e)}catch{return[]}}function c(e){let t=s();t.push(e),localStorage.setItem(o,JSON.stringify(t))}function l(){localStorage.removeItem(o)}function u(e){return e.validity.valueMissing?`Este campo é obrigatório.`:e.validity.tooShort?`Digite pelo menos ${e.minLength} caracteres.`:e.validity.typeMismatch&&e.type===`email`?`Informe um e-mail válido.`:`Verifique o valor informado.`}function d(e){e.classList.remove(`campo-valido`),e.classList.add(`campo-erro`);let t=e.parentElement.querySelector(`[data-erro="${e.id}"]`);t||(t=document.createElement(`small`),t.className=`mensagem-erro`,t.dataset.erro=e.id,t.id=`erro-${e.id}`,t.setAttribute(`role`,`alert`),e.insertAdjacentElement(`afterend`,t)),t.textContent=u(e),e.setAttribute(`aria-invalid`,`true`),e.setAttribute(`aria-describedby`,`erro-${e.id}`)}function f(e){e.classList.remove(`campo-erro`),e.classList.add(`campo-valido`),e.setAttribute(`aria-invalid`,`false`),e.removeAttribute(`aria-describedby`);let t=e.parentElement.querySelector(`[data-erro="${e.id}"]`);t&&t.remove()}function p(e){return e.checkValidity()?(f(e),!0):(d(e),!1)}function m(){let e=document.querySelector(`#lista-cadastros`);if(!e)return;let t=s();if(t.length===0){e.innerHTML=`<p>Nenhum cadastro salvo.</p>`;return}e.innerHTML=t.map(e=>`
        <div class="cadastro-salvo">
          <strong>${e.nome}</strong>
          <p>${e.email}</p>
          <p>Área: ${e.area}</p>
        </div>
      `).join(``)}function h(){document.addEventListener(`input`,e=>{let t=e.target;t.closest(`#form-voluntario`)&&p(t)}),document.addEventListener(`change`,e=>{let t=e.target;t.closest(`#form-voluntario`)&&p(t)}),document.addEventListener(`submit`,e=>{if(e.target.id!==`form-voluntario`)return;e.preventDefault();let t=e.target,n=t.querySelectorAll(`input[required], select[required]`),r=!0;n.forEach(e=>{p(e)||(r=!1)}),r&&(c({nome:t.nome.value,email:t.email.value,area:t.area.value}),alert(`Cadastro salvo com sucesso!`),t.reset(),n.forEach(e=>{e.classList.remove(`campo-valido`,`campo-erro`),e.removeAttribute(`aria-invalid`),e.removeAttribute(`aria-describedby`)}),m())}),document.addEventListener(`click`,e=>{e.target.id===`limpar-cadastros`&&(l(),m())}),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-route]`);t&&t.dataset.route===`cadastro`&&setTimeout(m,0)}),m()}a(),h();var g=document.querySelector(`#alternar-contraste`);g.addEventListener(`click`,()=>{document.body.classList.toggle(`alto-contraste`);let e=document.body.classList.contains(`alto-contraste`);g.setAttribute(`aria-pressed`,e?`true`:`false`)});