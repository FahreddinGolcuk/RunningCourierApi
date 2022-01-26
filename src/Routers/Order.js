import express from 'express';
import {createOrder, getOrderHistory, getOrderPrice} from '../Controllers/Order.js'
import {authenticateJWT} from "../Core/Auth.js";
const router = express.Router();

router.post('/create-order', authenticateJWT, createOrder);
router.get('/order-history', authenticateJWT, getOrderHistory);
router.post('/cart-price', getOrderPrice)

export default router;
