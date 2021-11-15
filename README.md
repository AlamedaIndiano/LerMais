# Ler Mais

## Descrição do Projeto
Ler mais é um projeto sem fins lucrativos que visa arrecadar e doar livros em parques e praças da grande São Paulo.

<h4 text-align="center"> 
	LerMais 🚀 Concluído 
</h4>

### Features

- [x] Home Page; 
- [x] Tela de Cadastro & Login de Usuários; 
- [x] Validação de Usuários;
- [x] Página inicial com informações sobre o projeto;
- [x] Informações de locais e datas;
- [x] Formulário para contato;
- [x] Tela de livros disponíveis;
- [x] Tela Admin;

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Mysql](https://www.mysql.com/)
- [Socket.io](https://socket.io/)
- [React](https://pt-br.reactjs.org/)
- [Redux](https://react-redux.js.org/)
- [Styled-Components](https://styled-components.com/)
- [Sequelize](https://sequelize.org/)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Mysql](https://www.mysql.com/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### Rodando o Back-End (servidor)
Dentro do arquivo Back-End abra o Terminal e execute os seguintes comandos para instalar todas as dependências:

#### Clone este repositório
No terminal execute os comandos:

- git init 

- git pull <https://github.com/AlamedaIndiano/ProjetoVidaECarreira.git>

#### Vá para a pasta Back-End
- cd back-end

#### Instale as dependências do Back-End:
No terminal execute os comandos:

- npm install

- npm install --save express

- npm install -g nodemon (Se já tiver o nodemon instalado globalmente na maquina pule esse passo.)

- npm install --save-dev nodemon

- npm install --save cors 

- npm install socket.io

- npm install --save sequelize

- npm install --save mysql2

- npm install --save multer

- npm install --save fs

#### Para iniciar o projeto execute:
- npm start

### Criando o Banco de Dados
Dentro do MYSQL crie a seguinte conexão:

- HostName: localhost

- Port: 3306

- UserName: root

- Password: root

#### Crie um banco de dados com as seguintes configurações:

- Nome do Banco de Dados: lermais

- DEFAULT CHARACTER SET: utf8mb4 

- COLLATE: utf8mb4_unicode_ci

#### ATENÇÃO!
Os dados HostName, Port, UserName, Password e Nome do Banco de Dados podem ser alterados para os de sua escolha, mas para isso você deverá alterar algumas informações da API.

#### Acesse o caminho: 
- back-end --> Models --> db.js 

#### Altere os dados da conexão:

- const conexão = new Sequelize('Nome do Banco de Dados', 'UserName', 'Password', {
    host: 'HostName',
    dialect: 'mysql'
});

### Rodando o Front-End (Interface)

#### Clone este repositório
No terminal execute os comandos:

- git init 

- git pull <https://github.com/AlamedaIndiano/ProjetoVidaECarreira.git>

#### Vá para a pasta Front-End
- cd front-end

#### Instale as dependências do Front-End:
No terminal execute os comandos:

- npm install

- npm install socket.io-client

- npm install --save react-router-dom

- npm install styled-components

- npm install --save react-icons

- npm install --save axios

#### Para iniciar o projeto execute:
- npm start
