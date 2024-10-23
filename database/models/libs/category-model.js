import { DataTypes } from "sequelize";
import { db } from "../../../config/db-config.js";

const Category = db.define("category", {
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  categoryName: DataTypes.STRING,
  categoryImagePath: DataTypes.TEXT,
});

export { Category };
