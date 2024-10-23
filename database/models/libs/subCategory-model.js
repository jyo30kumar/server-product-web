import { DataTypes } from "sequelize";
import { db } from "../../../config/db-config.js";
import { Category } from "./category-model.js";

const SubCategory = db.define("subCategory", {
  subCategoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  subCategoryName: DataTypes.STRING,
  subCategoryImagePath: DataTypes.TEXT,
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: "categoryId",
    },
  },
});

export {SubCategory}
