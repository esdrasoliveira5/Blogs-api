# Blogs Api

## Sumário

- [Descrição](#Descrição)
- [Pré-requisitos](#Pre-requisitos)
  - [Instalação](#Instalação)
  - [Instruções para iniciar o projeto](#Intruções-para-iniciar-o-projeto)
- [Documentação](#Documentação)
  - [Verifica o estado da Api](#Verifica-o-estado-da-Api)
  - [Registrar usuário](#Registrar-usuário)
  - [Login](#Login) 
  - [Lista todos os usuário](#Lista-todos-os-usuário)
  - [Lista um usuário](#Lista-um-usuário)
  - [Cria uma categoria](#Cria-uma-categoria)
  - [Lista todas as categorias](#Lista-todas-as-categorias)
  - [Editar um usuário](#Editar-um-usuário)
  - [Lista todos os Blogposts](#Lista-todos-os-Blogposts)
  - [Lista um Blogpost pelo id](#Lista-um-Blogpost-pelo-id)
  - [Atualiza um Blogpost pelo id](#Atualiza-um-Blogpost-pelo-id)
  - [Deleta um BlogPost](#Deleta-um-BlogPost)
  - [Pesquisa por um BlogPost](#Pesquisa-por-um-BlogPost)


<br>

## Descrição

**Objetivo**: O objetivo dessa aplicação, é manipular um banco de dados. Os conhecimentos aplicados foram:

- Arquitetura REST;
- Autenticações e Permissões com JWT;
- Modelagem de Dados e Migrations;
- Banco de Dados MySQL;

## Pré-requisitos

- `npm version 6.14.13`
- `node version 14.17.0`
- `Um banco de dados Mysql`


## Instalação

- Clone o repositório
  ```sh
    git clone git@github.com:esdrasoliveira5/Blogs-api.git
- Vá para a pasta da aplicação
  ```sh
    cd Blogs-api
- Configure o arquivo .env (use o arquivo .env.example como guia)

## Instruções para iniciar o projeto

<br>

- Comando para instalar as dependencias
  ```sh
  npm install

- Comando para criar o banco de dados e inserir as tabelas
  ```sh
    npm run prestart

- Comando para iniciar a aplicacao
  ```sh
    npm run start

- Comando para iniciar a aplicacao em modo de desenvolvimento
  ```sh
    npm run debug

<br/>

## Documentação

<br/>

### **Verifica o estado da Api**
##### `POST` /user
<br/>

  Esse endpoint verifica se a Api esta online e retorna um objeto com a mensagem `'Api Blogs Online!!`

  - Exemplo `response body`
    ```json
      {
          "message": "'Api Blogs Online!!"
      }
    ```
  <br/>

### **Registrar usuário**
##### `POST` /user
<br/>

  Esse endpoint registra um usuário e retorna um objeto com um token.

  - Exemplo `request body` 
    ``` json
      {
        "displayName": "Brett Wiltshire",
        "email": "brett@email.com",
        "password": "123456",
        "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
      }
    ```

  - Exemplo `response body`
    ```json
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
      }
    ```
<br/>

### **Login** 
##### `POST` /login
  <br/>

  Esse endpoint valida o login do usuário e retorna um objeto com um  token.

  - Exemplo `request body` 
    ``` json
      {
          "email": "exemple@email.com",
          "password": "12345678"
      }
    ```

  - Exemplo `response body`
    ```json
      {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZXhlbXBsZUBlbWFpbC5jb20iLCJpYXQiOjE2NDUxNDI0NzksImV4cCI6MTY0NTc0NzI3OX0.sRZtnLnkGYHjhFBXJISTcX41QbvpGxll-wUnU-kGxyE"
      }
    ```
  <br/>

### **Lista todos os usuário**
##### `GET` /user
  <br/>

  Esse endpoint lista todos os usuários cadastrados.

  - Exemplo `request headers`
      ```json
      {
        "Authorization": "(Bearer Token)"
      }
      ```

  - Exemplo `response body`
    ```json
      [
        {
          "id": "401465483996",
          "displayName": "Brett Wiltshire",
          "email": "brett@email.com",
          "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
        }
      ]
    ```
  <br/>

### **Lista um usuário**
##### `GET` /user/:id
  <br/>

  Esse endpoint busca um usuário cadastrado pelo id.

  - Exemplo `request headers`
      ```json
      {
        "Authorization": "(Bearer Token)"
      }
      ```

  - Exemplo `response body`
    ```json
        {
          "id": "401465483996",
          "displayName": "Brett Wiltshire",
          "email": "brett@email.com",
          "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
        }
    ```
  <br/>

### **Cria uma categoria**
##### `POST` /categories
  <br/>

  Esse endpoint recebe uma Categoria no corpo da requisição e o cria no banco.

  - Exemplo `request headers`
      ```json
      {
        "Authorization": "(Bearer Token)"
      }
      ```

  - Exemplo `request body` 
    ``` json
      {
        "name": "Inovação"
      }
    ```


  - Exemplo `response body`
    ```json
        {
          "id": "1",
          "name": "Inovação",
        }
    ```
  <br/>

### **Lista todas as categorias**
##### `GET` /categories
  <br/>

  Esse endpoint lista todas as Categorias e as retorna dentro de um array.

  - Exemplo `request headers`
      ```json
      {
        "Authorization": "(Bearer Token)"
      }
      ```

  - Exemplo `response body`
    ```json
      [
        {
          "id": 1,
          "name": "Escola"
        },
        {
          "id": 2,
          "name": "Inovação"
        }
      ]
    ```
  <br/>

### **Editar um usuário**
##### `POST` /post
  <br/>

  Esse endpoint deve receber um BlogPost no corpo da requisição e criá-lo no banco.

  - Exemplo `request headers`
    ```json
        {
          "Authorization": "(Bearer Token)"
        }
    ```

  - Exemplo `request body` 
    ```json
        {
          "title": "Latest updates, August 1st",
          "content": "The whole text for the blog post goes here in this key",
          "categoryIds": [1, 2]
        }
    ```

  - Exemplo `response body`
    ```json
        {
          "id": 4,
          "userId": 1,
          "title": "Latest updates, August 1st",
          "content": "The whole text for the blog post goes here in this key",
        }
    ```
  <br/>

### **Lista todos os Blogposts**
##### `GET ` /post
  <br/>

  Esse endpoint deve listar todos os BlogPosts e retorná-los.

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```

  - Exemplo `response body`
    ```json
      [
        {
          "id": 1,
          "title": "Post do Ano",
          "content": "Melhor post do ano",
          "userId": 1,
          "published": "2011-08-01T19:58:00.000Z",
          "updated": "2011-08-01T19:58:51.000Z",
          "user": {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2017_Malaysia.jpg"
          },
          "categories": [
            {
              "id": 1,
              "name": "Inovação"
            }
          ]
        }
      ]
    ```
  <br/>

### **Lista um Blogpost pelo id**
##### `GET` post/:id
  <br/>

  Retorna um BlogPost com o id especificado.

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```

  - Exemplo `response body`
    ```json
    {
      "id": 1,
      "title": "Post do Ano",
      "content": "Melhor post do ano",
      "userId": 1,
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.000Z",
      "user": {
        "id": 1,
        "displayName": "Lewis Hamilton",
        "email": "lewishamilton@gmail.com",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      "categories": [
        {
          "id": 1,
          "name": "Inovação"
        }
      ]
    }
    ```
  <br/>

### **Atualiza um Blogpost pelo id**
##### `PUT` /post/:id
  <br/>
  
  O endpoint deve receber um BlogPost que irá sobrescrever o original com o id especificado na URL.

  *Obs: Apenas o usuario que criou as tarefas pode atualizar as tarefas.*
  *A(s) categoria(s) do post não podem ser editadas, somente o title e content.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```

  - Exemplo `request body` 
    ```json
        {
            "title": "Latest updates, August 1st",
            "content": "The whole text for the blog post goes here in this key"
        }
    ```

  - Exemplo `response body`
    ```json
      [
          {
            "title": "Latest updates, August 1st",
            "content": "The whole text for the blog post goes here in this key",
            "userId": 1,
            "categories": {
                "id": 1,
                "name": "Escola"
            }
          }
      ]
    ```
  <br/>

### **Deleta um BlogPost**
##### `DELETE` post/:id
  <br/>

  Deleta o post com o id especificado.Retorna apenas o status 204.

  *Obs: Apenas o usuário que criou a tarefa pode deleta-la.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```
  <br/>

### **Deleta um usuário**
##### `DELETE` /user/me
  <br/>

  Utilizando o token de autenticação nos headers, o usuário correspondente deve ser apagado. E retorna apenas o status 204.

  *Obs: Apenas o usuário que criou o usuário pode deleta-lo.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```
  <br/>


### **Pesquisa por um BlogPost**
##### `GET` post/search?q=:searchTerm
  <br/>

  Retorna uma array de BlogPosts que contenham em seu título, ou conteúdo, o termo pesquisado no queryParam da URL.

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```

  - Exemplo `response body`
    ```json
      [
        {
          "id": 2,
          "title": "Vamos que vamos",
          "content": "Foguete não tem ré",
          "userId": 1,
          "published": "2011-08-01T19:58:00.000Z",
          "updated": "2011-08-01T19:58:51.000Z",
          "user": {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
          },
          "categories": [
            {
              "id": 2,
              "name": "Escola"
            }
          ]
        }
      ]
    ``` 
  <br/>
