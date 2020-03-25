const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

      // rota é o conjunto completo ex: localhost:3333/ tudo que vem depois da barra é recurso      

      /*
        Métodos HTTP:
        GET: Usamos quando queremos buscar uma informação do back-end
        POST: Usamos quando queremos criar uma informação no back-end
        PUT: Quando queremos alterar alguma informação no back-end
        DELETE: Quando queremos deletar uma informação no back-end
      */

      /**
       * Tipos de parâmetros:                                                                                                      nome = parâmetro
       *    Query: Parâmetros nomeados enviados na rota após o simbolo de interrogação (filtros, paginação) exemplo= localhost:3333/users?nome=deivid
       *    Route Params: Parâmetros utilizados para identificar recursos de um unico parâmetro
       *    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
       * 
       */
         
       /**
        *  SQL: MySql, SQLite, PostGreSql
        *  NoSql: MongoDB, CouchDB, etc
        */ 

        /**
         * Driver do SQL usamos: Select * from users
         * Query builder: table('users').select('*').where()
         */

        // recurso


app.listen(3333);