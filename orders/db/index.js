import database from "../../infra/db.js";
import sequelize from "../../infra/index.js";
import ordersSchema from "../../helpers/ordersShema.js";
import {Books} from "../../books/db/index.js";

const orders = sequelize.define('orders', {
    ...ordersSchema
}, {});

export class Orders {

    constructor() {
        this.db = database;
        this.model = orders;
    }

    async create(data) {
        return this.model.create({
            created_at: Date.now(),
            ...data
        });
    }

    async returnBook(data) {
        const book = new Books().get(data.book_id);
        const updatedBook = new Books().update(data.book_id, book);
    }
}
