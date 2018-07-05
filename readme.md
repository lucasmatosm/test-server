 Para rodar o servidor é necessario instalar o mongoDB:

* sudo apt install -y mongodb

 deixar o mongo rodando:

*  mongod


Entrar na pasta do projeto e instalar dependencias:
  * npm install

Rodar o projeto:
  * npm run start


   O sistema irá rodar na porta 3000:

   O banco inicia vazio:

   Para adicionar post, realizar post http para localhost:3000/posts


	com o corpo:
      
  {
    "title": "Post 1"
  }


Para adicionar comentario, realizar post http para localhost:3000/comments


	com o corpo:
      
  {
    "body": "some comment",
    "postId": 1
  },


    




