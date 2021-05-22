import {Books} from "../db/index.js";

export class DeleteBookUseCase {
    async deleteBook(id) {
        const book = await new Books().delete(id);

        console.log(`Book with id = ${id} was deleted`);

        return book;
    }
}
