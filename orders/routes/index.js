import {Router} from "express";
import {createOrder} from "./createOrder.js";
import {getOrders} from "./getOrder.js";

const router = Router();

router.post(
    '',
    createOrder
);

router.get(
    '',
    getOrders
);


export default router;
