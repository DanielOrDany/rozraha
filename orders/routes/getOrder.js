import {GetOrdersUseCase} from "../useCases/getOrders.js";

export async function getOrders(req, res) {
    try {
        const orders = await new GetOrdersUseCase().getOrders();

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
