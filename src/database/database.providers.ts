import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_CONNECTION',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'Filand21*',
                database: 'functions',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: false,
                logging: true
            });

            return dataSource.initialize();
        },
    },
];