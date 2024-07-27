# Configuração do Banco de Dados com NestJS e TypeORM

Este projeto utiliza o NestJS com TypeORM para gerenciar o banco de dados MySQL. Siga as instruções abaixo para configurar seu ambiente de desenvolvimento.

## Instalação de Dependências

Primeiro, instale as dependências necessárias:

```bash
npm install @nestjs/typeorm typeorm mysql2

{
 type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'Lead123!',
                database: 'functions',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: false,
                logging: true
}