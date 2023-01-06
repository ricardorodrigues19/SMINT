import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const LingProgModule = dbInstance.define("lingprog", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isWanted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});
export { LingProgModule };
