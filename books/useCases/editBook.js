import {Books} from "../db/index.js";

export class EditBookUseCase {
    async editBook(id, data) {
        const book = await new Books().update(id, data);

        console.log(`Book with id = ${id} was updated`);

        return book;
    }
}
