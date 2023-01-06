import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const SoftwareModule = dbInstance.define("Software", {
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
  }
});
export { SoftwareModule };
