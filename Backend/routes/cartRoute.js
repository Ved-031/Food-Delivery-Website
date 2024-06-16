import express from 'express';
import { addToCart, getCartData, removeFromCart } from '../controllers/cart-controller.js';
import authMiddleware from '../middlewares/auth.js';

const cartRouter = express.Router();

cartRouter.post('/add', authMiddleware, addToCart);
cartRouter.post('/remove', authMiddleware, removeFromCart);
cartRouter.post('/get', authMiddleware, getCartData);

export default cartRouter