import {GetOrdersUseCase} from "../useCases/getOrders.js";

export async function getOrderById(req, res) {
    try {
        const id = req.params.id;

        const order = await new GetOrdersUseCase().getOrderById(id);

        if (order) {
            res.json({
                data: order
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
