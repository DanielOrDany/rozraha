import { Router } from 'express';
import { createUser } from "./createUser.js";
import {getUserById} from "./getUserById.js";
import {getUsers} from "./getUsers.js";
import {deleteUserById} from "./deleteUser.js";
import {editUser} from "./editUser.js";

const router = Router();

router.post(
    '',
    createUser
);

router.get(
    '',
    getUsers
);


router.get(
    '/:id',
    getUserById
);

router.delete(
    '/:id',
    deleteUserById
);

router.put(
    '/:id',
    editUser
);


export default router;
