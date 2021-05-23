import {GetBookUseCase} from "../books/useCases/getBook.js";

export async function checkIfBookExists(id) {
    const book = await new GetBookUseCase().getBookById(id);

    if (book) {
        return true;
    } else {
        return false;
    }
}
