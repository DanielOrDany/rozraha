import {Router} from "express";
import {createOrder} from "./createOrder.js";
import {getOrders} from "./getOrder.js";
import {returnBook} from "./returnBook.js";
import {getOrderById} from "./getOrdersById.js";
import {getOrdersFinances} from "./getOrdersFinances.js";

const router = Router();

router.post(
    '',
    createOrder
);

router.get(
    '',
    getOrders
);

router.get(
    '/:id',
    getOrderById
);

router.get(
    '/:id/pass',
    returnBook
);

router.get(
    '/finances/data',
    getOrdersFinances
);

export default router;
