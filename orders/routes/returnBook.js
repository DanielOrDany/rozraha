import {GetOrdersUseCase} from "../useCases/getOrders.js";
import {ReturnBookUseCase} from "../useCases/returnBook.js";

export async function returnBook(req, res) {
    try {
        const id = req.params.id;

        const orders = await new ReturnBookUseCase().returnBook(id);

        if (orders) {
            res.json({
                data: orders
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
