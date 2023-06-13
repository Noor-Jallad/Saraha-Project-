import {Router} from 'express';
import * as AuthController from './Controller/Auth.controller.js';
import validation from '../../MiddleWare/validation.middleware.js';
import { loginSchema, signupSchema } from './Auth.validation.js';
const router= Router();
router.get('/',AuthController.getAuth);
router.post('/signup',validation(signupSchema),AuthController.signup);
router.post('/login',validation(loginSchema),AuthController.login);
router.get('/confirmEmail/:token',AuthController.confirmEmail);
export default router;