import {GetBookUseCase} from "../useCases/getBook.js";

export async function getBookById(req, res) {
    try {
        const id = req.params.id;

        const book = await new GetBookUseCase().getBookById(id);

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
