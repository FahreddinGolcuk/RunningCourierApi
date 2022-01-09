import express from 'express';
import {createNewProduct, getFavoriteProducts, getProduct, getCategoryProducts} from "../Controllers/Product.js";
const router = express.Router();

router.post('/create', createNewProduct);
router.get('/favorites', getFavoriteProducts);
router.post('/getProduct', getProduct);
router.get('/get-category-products', getCategoryProducts)
export default router;
