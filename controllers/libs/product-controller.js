import { Product, User} from "../../database/models/index.js";

const productController = async (req, res) => {
  try {
    const response = await User.create({
      userName: "kumar",
      address: "Pali",
      phoneNumber: 7340046539,
    });
    res.status(201).send("Data Inserted successfully");
    console.log(`Data Inserted successfully${response.userName}`)
  } catch (error) {
    res.send("Unable to insert data");
    console.error(error);
  }
};

export {productController}