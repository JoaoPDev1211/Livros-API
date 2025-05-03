# Api-livros
Created with CodeSandbox
🖼️ Preview


Exemplo da interface gráfica com os livros exibidos e filtros aplicáveis.

![image](https://github.com/user-attachments/assets/b9761d63-92b5-4e6b-98ae-73c2c928eaa6)


#🚀 Tecnologias Utilizadas
Backend (API REST):
Node.js

Express.js

JSON como base de dados (ou banco leve, conforme o caso)

Frontend:
HTML5

CSS3

JavaScript Vanilla

Layout responsivo e estilização moderna

#📁 Estrutura do Projeto
csharp
Copiar
Editar
Livros-API/
├── public/                  # Frontend estático
│   ├── index.html           # Página principal com visualização dos livros
│   ├── styles.css           # Estilização da página
│   └── script.js            # Lógica de busca, filtro e renderização
├── src/                     # Backend com API Express
│   ├── controllers/         # Controladores da API
│   └── routes/              # Rotas da API
├── .eslintrc.json           # Regras de linting
├── package.json             # Configuração e dependências
└── README.md                # Este arquivo
🧪 Funcionalidades
🔍 Busca de livros por título

🏷️ Filtro por status de leitura (Todos, Lendo, Não Lido, Vou Ler)

📖 Visualização em cards com capa, título e status

📦 API REST para operações CRUD

💾 Persistência simples com JSON (pode ser adaptado para banco real)

📦 Instalação Local
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/JoaoPDev1211/Livros-API.git
Acesse a pasta do projeto:

bash
Copiar
Editar
cd Livros-API
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor:

bash
Copiar
Editar
npm start
Acesse no navegador: http://localhost:3000

🔄 Rotas da API
Método	Rota	Descrição
GET	/livros	Lista todos os livros
GET	/livros/:id	Busca um livro por ID
POST	/livros	Adiciona um novo livro
PUT	/livros/:id	Atualiza dados de um livro
DELETE	/livros/:id	Remove um livro da coleção

🌐 Acesso Online
(Adicione aqui o link do GitHub Pages ou outro serviço, se estiver publicado online)

🛠️ Possíveis Melhorias Futuras
 Integração com banco de dados (MongoDB, PostgreSQL)

 Autenticação de usuário

 Upload de imagens de capa pelo painel

 Sistema de notas/avaliação dos livros

 Responsividade aprimorada

👨‍💻 Autor
Desenvolvido por João P. Dev

