import express from 'express';
import {createNewCategory, getCategories} from '../Controllers/Category';
import {authenticateJWT} from "../Core/Auth";
const router = express.Router();

router.post('/create', authenticateJWT, createNewCategory);
router.get('/get-categories', getCategories);
export default router;
