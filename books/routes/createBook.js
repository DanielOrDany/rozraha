import {verifyOnCreateNewBook} from "../../helpers/verifyOnCreateNewBook.js";
import {CreateNewBookUseCase} from "../useCases/addNewBook.js";

export async function createBook(req, res) {
    try {
        const bookData = req.body;

        const verified = verifyOnCreateNewBook(bookData);

        if (!verified) {
            throw 'Book data is not correct.';
        }

        const newBook = await new CreateNewBookUseCase().createBook(bookData);

        if (newBook) {
            res.json({
                data: newBook
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
