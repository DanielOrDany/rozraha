import {Books} from "../db/index.js";

export class CreateNewBookUseCase {
    async createBook(data) {
        const newBook = await new Books().create(data);

        console.log("New book is created: ", newBook);

        return newBook;
    }
}
