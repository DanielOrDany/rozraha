import {Orders} from "../db/index.js";

export class GetOrdersUseCase {
    async getOrders() {
        const orders = await new Orders().getAll();

        console.log(`${orders.size} orders were found`);

        return orders;
    }

    async getOrderById(id) {
        const orders = await new Orders().getById(id);

        console.log(`order with id = ${id} was found`);

        return orders;
    }
}
