README.md
# Projeto Teste de Desenvolvimento Prático GDF

Este repositório contém o projeto completo desenvolvido para o teste prático do GDF, incluindo **Front-end em React** e **Back-end em Laravel**.

---

## 🗂 Estrutura do repositório



teste_desenvolvimento_pratico_gdf/
├─ back-end/ # API Laravel
│ ├─ app/
│ ├─ bootstrap/
│ ├─ routes/api.php
│ ├─ artisan
│ ├─ composer.json
│ └─ .env.example
├─ src/ # Front-end React
│ ├─ components/ # Componentes reutilizáveis (Header, Sidebar, Layout)
│ ├─ pages/ # Páginas principais (Acesso, Registro, Painel)
│ ├─ context/ # Context API (AuthContext)
│ ├─ img/ # Logos e imagens
│ ├─ App.js
│ ├─ index.js
│ ├─ index.css
│ └─ reportWebVitals.js
├─ public/ # Build front-end
├─ package.json
└─ README.md


---

## ⚙️ Back-end (Laravel)

A API possui **três endpoints principais**:

### 1) POST `/api/acessar`
- Recebe `email` e `senha` via form-data
- Validação fictícia de usuário
- Retorna JSON de sucesso ou erro

**Exemplo de request:**


email: admin@email.com

senha: 123456


**Resposta de sucesso:**
```json
{
  "success": true,
  "email": "admin@email.com"
}

2) POST /api/registrar

Recebe email, senha e dt_nascimento via form-data

Valida se usuário já existe (fictício) e se é maior de 18 anos

Retorna JSON de sucesso ou erro

Exemplo de request:

email: user@email.com
senha: senha123
dt_nascimento: 2000-01-01

3) GET /api/listagem-usuarios

Retorna lista fictícia de usuários em JSON

Exemplo de resposta:

{
  "success": true,
  "usuarios": [
    { "email": "admin@email.com" },
    { "email": "user@email.com" }
  ]
}

💻 Rodando o back-end localmente

Entre na pasta do back-end:

cd back-end


Instale as dependências:

composer install


Copie o arquivo .env.example para .env:

cp .env.example .env


Gere a chave da aplicação:

php artisan key:generate


Rode o servidor:

php artisan serve


A API estará disponível em: http://127.0.0.1:8000/api

⚛️ Front-end (React)

O front-end é construído em React e possui:

Estrutura principal

components/: Componentes reutilizáveis

Header.jsx → Cabeçalho

Sidebar.jsx → Menu lateral

Layout.jsx → Layout principal da página

pages/: Páginas do sistema

Acesso.jsx → Página de login

Registro.jsx → Página de cadastro

Painel.jsx → Dashboard após login

context/AuthContext.jsx: Gerencia o estado de autenticação do usuário

img/: Logos e imagens usadas no projeto

App.js: Configuração de rotas e layout principal

index.js / index.css: Inicialização do React

Como rodar o front-end

Instale as dependências:

npm install


Rode o servidor de desenvolvimento:

npm start


O front-end estará disponível em: http://localhost:3000

Fluxo de interação front + back

Login: envia email e senha para /api/acessar

Cadastro: envia email, senha e dt_nascimento para /api/registrar (validação 18 anos)

Painel: consome /api/listagem-usuarios para exibir a lista de usuários

Context API mantém o estado do usuário logado durante a sessão

🧪 Testes com Postman
Endpoint	Método	Body/Params
/api/acessar	POST	form-data (email, senha)
/api/registrar	POST	form-data (email, senha, dt_nascimento)
/api/listagem-usuarios	GET	—
⚠️ Observações importantes

O back-end é fictício, usuários são simulados em memória.

Não subir arquivos sensíveis:

back-end/vendor/

back-end/.env

Código pronto para testes locais e avaliação.

📌 Contato

Desenvolvido por: Izabelle Silva
