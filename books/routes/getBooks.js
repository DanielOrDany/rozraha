import {GetBookUseCase} from "../useCases/getBook.js";

export async function getBooks(req, res) {
    try {
        const books = await new GetBookUseCase().getBooks();

        if (books) {
            res.json({
                data: books
            });
        } else {
            throw 'Something went wrong, try again';
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        });
    }
}
