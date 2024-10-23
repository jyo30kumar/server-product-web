import { DataTypes } from "sequelize";
import { db } from "../../../config/db-config.js";
import { SubCategory } from "./subCategory-model.js";
import { Category } from "./category-model.js";

const Product = db.define("products", {
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productDescription: DataTypes.TEXT,
  productPrice: DataTypes.INTEGER,
  productQuantity: DataTypes.INTEGER,
  productUnit: DataTypes.STRING,
  productStockQuantity: DataTypes.INTEGER,
  productStockQuantityUnit: DataTypes.STRING,
  productImagePath: DataTypes.TEXT,
  subCategoryId: {
    type: DataTypes.INTEGER,
    references:{
      model:SubCategory,
      key:"subCategoryId",
    }
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references:{
      model:Category,
      key:"categoryId",
    }
  },
});

async (req, res) => {
  User.sync({ force: true })
    .then(() => res.send("User table created succesfully"))
    .catch((err) => console.error("Error creating table:", err));
};
export { Product };
