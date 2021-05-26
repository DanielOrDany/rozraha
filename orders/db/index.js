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

    async getAll() {
        return this.model.findAll({});
    }

    async update(id, data) {
        return this.model.update(data, {
            where: {
                id: id
            }
        });
    }

    async getById(id) {
        return this.model.findOne({
            where: {
                id: id
            }
        });
    }

    async getOrdersPagination(page, count) {
        let nPage = +page;
        let nCount = +count;

        const offset = nPage * nCount - nCount;

        try {
            return this.model.findAll({
                offset,
                limit: nCount,
                order: [
                    ['created_at', 'DESC'],
                ]
            });
        } catch (err) {
            throw err;
        }

    }
}
