import {Router} from 'express'
import * as Controller from '../../controllers/index.js';
const productRouter = Router();

productRouter.get("/product",Controller.productController);

export {productRouter}

