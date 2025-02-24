import { Sequelize } from "sequelize";
import { config } from 'dotenv';
config();

const sequelize = new Sequelize(process.env.DB_NAME, "postgres", process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "postgres",
});

export { sequelize };
