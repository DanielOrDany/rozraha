import {CreateOrderUseCase} from "../useCases/createOrder.js";
import {verifyOnCreateNewOrder} from "../../helpers/verifyOnCreateNewOrder.js";
import {checkIfBookExists} from "../../helpers/checkIfBookExists.js";
import {checkIfUserExists} from "../../helpers/checkIfUserExists.js";

export async function createOrder(req, res) {
    try {
        const order = req.body;

        const verified = verifyOnCreateNewOrder(order);

        if (!verified) {
            throw 'Order data is not correct.';
        }

        const book = await checkIfBookExists(order.book_id);
        const user = await checkIfUserExists(order.user_id);

        if (!book) { throw `Book with id = ${order.book_id} was not found` }
        if (!user) { throw `User with id = ${order.user_id} was not found` }

        const newOrder = await new CreateOrderUseCase().createOrder(order);

        if (newOrder) {
            res.json({
                data: newOrder
            });
        } else {
            throw 'Something went wrong, try again';
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        });
    }
}
