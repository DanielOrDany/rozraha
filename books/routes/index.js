import {Router} from "express";
import {createBook} from "./createBook.js";
import {getBooks} from "./getBooks.js";
import {getBookById} from "./getBookById.js";
import {deleteBookById} from "./deleteBook.js";
import {editBook} from "./editBook.js";

const router = Router();

router.post(
    '',
    createBook
);

router.get(
    '',
    getBooks
);


router.get(
    '/:id',
    getBookById
);

router.delete(
    '/:id',
    deleteBookById
);

router.put(
    '/:id',
    editBook
);


export default router;
