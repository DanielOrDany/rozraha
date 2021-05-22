import {Books} from "../db/index.js";

export class GetBookUseCase {
    async getBookById(id) {
        const book = await new Books().get(id);

        console.log(`Book with id = ${id} was found`);

        return book;
    }

    async getBooks() {
        const books = await new Books().getAll();

        console.log(`${books.size} books were found`);

        return books;
    }
}
