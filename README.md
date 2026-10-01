# Solidariedade em Ação

## Sobre o projeto

Solidariedade em Ação é uma aplicação web do tipo Single Page Application (SPA), desenvolvida para apresentar projetos sociais e permitir o cadastro de voluntários.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- ES Modules
- LocalStorage
- Git e GitHub

## Estrutura do projeto

- `html/` - página principal da aplicação.
- `css/` - estilos e responsividade.
- `js/` - roteamento, templates, validação e armazenamento.
- `imagens/` - recursos visuais do projeto.

## Pré-requisitos

É necessário possuir um navegador moderno. Para desenvolvimento local, recomenda-se utilizar o Visual Studio Code com a extensão Live Server.

## Execução local

1. Clone ou baixe o repositório.
2. Abra a pasta no Visual Studio Code.
3. Execute `html/index.html` utilizando o Live Server.
4. A aplicação será aberta no navegador por meio de um servidor local.

## Dependências

O projeto utiliza Node.js e npm para gerenciamento das dependências de desenvolvimento.

As principais dependências são:
- Vite - utilizado para desenvolvimento e geração da build de produção.
- gh-pages - utilizado para publicação da build no GitHub Pages.

Para instalar as dependências, execute:

npm install

## Build

A build de produção é gerada com o Vite, que otimiza e prepara os arquivos para publicação.

Para gerar a build, execute:

npm run build

Os arquivos de produção são gerados na pasta html/dist.

## Testes

Os testes incluem navegação entre as rotas da SPA, validação do formulário, persistência de dados no LocalStorage, responsividade e acessibilidade.

## Versionamento

O projeto utiliza Git e GitHub, com organização baseada em GitFlow e branches `main`, `develop` e `feature/`.

## Acessibilidade

O projeto está sendo revisado com base nas diretrizes WCAG 2.1 nível AA.

## Deploy

A aplicação está publicada no GitHub Pages. O deploy utiliza a branch gh-pages, contendo a build de produção gerada pelo Vite.

Site publicado:
https://bdbwyjdfmf-blip.github.io/Solidariedade-em-A-o-SPA/