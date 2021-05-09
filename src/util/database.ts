import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("mystore", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});
