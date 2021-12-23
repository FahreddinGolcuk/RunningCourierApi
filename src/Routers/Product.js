import express from 'express';
import {createNewProduct, getFavoriteProducts, getProduct} from "../Controllers/Product.js";
const router = express.Router();

router.post('/create', createNewProduct);
router.get('/favorites', getFavoriteProducts);
router.get('/getProduct', getProduct);
export default router;
