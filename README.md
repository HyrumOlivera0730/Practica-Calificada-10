# User Management API with Image Upload

Este projeto é uma API desenvolvida em Node.js e Express que permite gerenciar usuários, incluindo funcionalidades de criar, ler, atualizar e excluir usuários, além de suportar o upload de imagens de perfil.

## Índice

- [Instalação](#instalação)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Uso](#uso)
- [API Endpoints](#api-endpoints)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/User-Management-API-with-Image-Upload.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd User-Management-API-with-Image-Upload
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Configuração do Banco de Dados

1. Certifique-se de ter o MySQL instalado e em execução.
2. Crie um banco de dados chamado `miniProjecto`.
3. Importe a estrutura e os dados do banco de dados utilizando o arquivo `miniprojecto.sql`:
    ```sh
    mysql -u root -p miniProjecto < miniprojecto.sql
    ```
4. Ajuste as configurações de conexão com o banco de dados no arquivo `db.js` se necessário:
    ```js
    const pool = mysql2.createPool({
        host: 'localhost',
        database: 'miniProjecto',
        user: 'root',
        password: ''
    });
    ```

## Uso

1. Inicie o servidor:
    ```sh
    node index.js
    ```
2. Acesse a aplicação em seu navegador:
    ```
    http://localhost:3000
    ```

## API Endpoints

### Listar Usuários

- **Endpoint**: `/api/users`
- **Método**: GET
- **Descrição**: Retorna uma lista de todos os usuários.

### Obter Usuário por ID

- **Endpoint**: `/api/users/:id`
- **Método**: GET
- **Descrição**: Retorna um usuário específico pelo ID.

### Obter Imagem de Perfil

- **Endpoint**: `/api/photo/:nombre`
- **Método**: GET
- **Descrição**: Retorna a imagem de perfil do usuário.

### Criar Usuário

- **Endpoint**: `/api/users`
- **Método**: POST
- **Descrição**: Cria um novo usuário.
- **Dados**: `name`, `email`, `role`, `password`, `imagen`

### Atualizar Usuário

- **Endpoint**: `/api/users/:id`
- **Método**: PUT
- **Descrição**: Atualiza as informações de um usuário existente.
- **Dados**: `name`, `email`, `role`, `password`, `imagen`

### Deletar Usuário

- **Endpoint**: `/api/users/:id`
- **Método**: DELETE
- **Descrição**: Deleta um usuário e sua imagem de perfil.

## Estrutura do Projeto

```plaintext
User-Management-API-with-Image-Upload/
├── config/
│   ├── db.js
│   └── multer.js
├── routes/
│   └── usuariosRoutes.js
├── src/
│   ├── helper.js
│   └── userController.js
├── uploads/
│   └── (imagens de perfil)
├── index.js
├── package.json
├── README.md
└── miniprojecto.sql
