import {Orders} from "../db/index.js";

export class CreateOrderUseCase {
    async createOrder(data) {
        const newOrder = await new Orders().create(data);

        console.log("New order is created: ", newOrder);

        return newOrder;
    }
}
