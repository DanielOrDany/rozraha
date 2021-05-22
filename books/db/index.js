import database from "../../infra/db.js";
import sequelize from "../../infra/index.js";
import booksSchema from "../../helpers/booksShema.js";

const books = sequelize.define('books', {
    ...booksSchema
}, {});

export class Books {

    constructor() {
        this.db = database;
        this.model = books;
    }

    async create(data) {
        return this.model.create({
            created_at: Date.now(),
            deleted_at: 0,
            ...data
        });
    }

    async get(id) {
        return this.model.findOne({
            where: {
                id: id
            }
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

    async delete(id) {
        return this.model.update({
            deleted_at: Date.now()
        }, {
            where: {
                id: id
            }
        });
    }
}
