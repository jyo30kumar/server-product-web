import { DataTypes } from "sequelize";
import { db } from "../../../config/db-config.js";

const User = db.define("users", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: DataTypes.STRING(100),
  address: DataTypes.TEXT,
  phoneNumber: DataTypes.BIGINT,
});

export {User};
