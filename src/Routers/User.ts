import express from 'express';
import {createUser, getUsers, login} from '../Controllers/User';
import {authenticateJWT} from "../Core/Auth";
const router = express.Router();

router.get('/', authenticateJWT, getUsers);
router.post('/', createUser);
router.post('/login', login);

export default router;
