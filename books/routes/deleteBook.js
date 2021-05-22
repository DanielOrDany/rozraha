import {DeleteBookUseCase} from "../useCases/deleteBook.js";

export async function deleteBookById(req, res) {
    try {
        const id = req.params.id;

        const book = await new DeleteBookUseCase().deleteBook(id);

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
