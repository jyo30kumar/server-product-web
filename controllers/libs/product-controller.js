import {Product} from "../../database/models/index.js";

const product = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await Product.findByPk(id);
    if(result == null){
    }else{
      res.status(200).message(JSON.stringify(result));
    }
  } catch (error) {
    console.log("Problem with product fetching by id, ", error);
  }
}

export {product}