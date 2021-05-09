import Sequelize from "sequelize";
import { sequelize } from "../util/database";

export const Users = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fistName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phonenumber: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  emailVerified: {
    type: Sequelize.TINYINT,
    allowNull: true,
  },
  registrationDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  verificationCode: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  ipAddress: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});
