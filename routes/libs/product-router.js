import {Router} from 'express'
import * as Controller from '../../controllers/index.js';
const productRouter = Router();

productRouter.get("/product/:id",Controller.product);

export {productRouter}

