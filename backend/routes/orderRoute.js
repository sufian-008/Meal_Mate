import express from "express"
import authMiddleware from "../middleware/auth.js"
import {placeOrder, verifyOrder} from "../controllers/orderController.js"

const orderRouter = express.Router();



export default orderRouter; 