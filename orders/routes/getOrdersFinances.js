import {GetOrdersUseCase} from "../useCases/getOrders.js";

export async function getOrdersFinances(req, res) {
    try {
        const orders = await new GetOrdersUseCase().getOrdersWithoutPagination();

        if (orders) {

            const result = calculateFinances(orders);

            res.json({
                data: result
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

function calculateFinances(orders) {
    let sum = 0;

    for(let z =0; z<orders.length; z++){
        sum+=orders[z].order_value;
    }

    console.log(`Finances sum = ${sum}`)

    return sum;
}
