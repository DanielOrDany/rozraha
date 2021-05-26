import {Orders} from "../db/index.js";
import {Books} from "../../books/db/index.js";

export class ReturnBookUseCase {
    async returnBook(id) {
        const order = await new Orders().getById(id);

        console.log(`order with id ${id} was found`);

        const book = new Books().update(order.book_id, { updatedAt: Date.now() })
        const updateOrder = new Orders().update(order.id, { returned_at: Date.now() })

        return updateOrder;
    }
}
