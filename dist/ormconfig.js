"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
exports.default = [
    {
        name: 'connection',
        type: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        schema: process.env.DB_SCHEMA_EMPRESA,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        migrations: ['database/migrations/*.ts'],
        cli: {
            migrationsDir: 'database/migrations',
        },
    },
    {
        name: 'seed',
        type: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        schema: process.env.DB_SCHEMA_EMPRESA,
        migrations: ['database/seeds/*.ts'],
        entities: ['src/**/*.entity.ts'],
        cli: {
            migrationsDir: 'database/seeds',
        },
    },
    {
        name: 'seed-marcado',
        type: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        schema: process.env.DB_SCHEMA_EMPRESA,
        migrations: ['database/seeds-marcado-habilitacion/*.ts'],
        entities: ['src/**/*.entity.ts'],
        cli: {
            migrationsDir: 'database/seeds',
        },
    },
];
//# sourceMappingURL=ormconfig.js.map