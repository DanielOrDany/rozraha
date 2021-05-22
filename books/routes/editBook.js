import {verifyOnCreateNewBook} from "../../helpers/verifyOnCreateNewBook.js";
import {EditBookUseCase} from "../useCases/editBook.js";

export async function editBook(req, res) {
    try {
        const id = req.params.id;
        const bookData = req.body;

        const verified = verifyOnCreateNewBook(bookData);

        if (!verified) {
            throw 'Book data is not correct.';
        }

        const book = await new EditBookUseCase().editBook(id, bookData);

        if (book) {
            res.json({
                data: book
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
