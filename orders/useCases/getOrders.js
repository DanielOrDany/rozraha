import {Orders} from "../db/index.js";

export class GetOrdersUseCase {
    async getOrders(id) {
        const orders = await new Orders().getById(id);

        console.log(`${orders.size} orders were found`);

        return orders;
    }
}
