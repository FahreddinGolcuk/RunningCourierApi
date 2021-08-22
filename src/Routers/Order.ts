import express from 'express';
import {createOrder, getOrderHistory} from '../Controllers/Order'
import {authenticateJWT} from "../Core/Auth";
const router = express.Router();

router.post('/create-order', authenticateJWT, createOrder);
router.get('/order-history', authenticateJWT, getOrderHistory);
export default router;
