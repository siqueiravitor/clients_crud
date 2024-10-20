# Gerenciamento de clientes

Este projeto é um sistema de gerenciamento de clientes, desenvolvido visando a implementação da Clean Architecture. <br> 
Ele foi implementado utilizando o framework NodeJs com TypeScript. <br>
O Sistema conta com:
- Estruturação da entidade Client;
- Utilização de Value objets;
- Utilização de Use Cases;
- Criação da camada de presenters;
- Criação da camada de mappers;
- Criação da camada de controllers;
- Utilização do padrão de projeto Method Factory;
- Utilização do padrão de projeto Singleton;
- Utilização do padrão de projeto Adapter.

## Tecnologias Utilizadas

- **NodeJs**
- **Jest**
- **Express**
- **MySQL**

## Funcionalidades

- **Listar Clientes**: Exibe uma lista de clientes cadastrados.
- **Cadastrar Cliente**: Permite o cadastro de novos clientes.

## Requisitos

- **NodeJs**
- **MySQL**

## Criação do Banco de dados
Criar a tabela clients:
- id como chave primária com auto increment (funcionalidade do MySql);
- nome como varchar(45);
- sobrenome como varchar(45);
- email como varchar(45);
- cpf como varchar(11);

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/siqueiravitor/clients_crud.git
   ```

2. **Instalção de dependências:**
   ```bash
   npm install
   ```

3. **Configuração do banco de dados:**
   No arquivo "src\infra\db\mysql.ts", configure os detalhes de conexão do banco de dados
    
4. **Inicie o servidor:**
    ```bash
     npm run express
    ```

5. **O projeto possui testes automatizados com o comando:**
    ```bash
     npm run tests
    ```
