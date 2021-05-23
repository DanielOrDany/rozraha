import {Router} from "express";
import {createOrder} from "./createOrder.js";

const router = Router();

router.post(
    '',
    createOrder
);

export default router;
