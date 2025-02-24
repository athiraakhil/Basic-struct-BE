import Sequelize from "sequelize";
import { sequelize } from "../../config/database.js";

const User = sequelize.define("users", {
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Status: {
    type: Sequelize.INTEGER,
    defaultValue:1,
    allowNull: true,
  },
});

export {User};
