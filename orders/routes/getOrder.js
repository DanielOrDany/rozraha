import {GetOrdersUseCase} from "../useCases/getOrders.js";

export async function getOrders(req, res) {
    try {
        let page = req.query.page || '1';
        let count = req.query.count || '20';
        page = page?.toString();
        count = count?.toString();

        console.log(`page = ${page}, count = ${count}`)

        const orders = await new GetOrdersUseCase().getOrders(page, count);

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
