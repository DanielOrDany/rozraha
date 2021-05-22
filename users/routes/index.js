import { Router } from 'express';
import { createUser } from "./createUser.js";

const router = Router();

router.post(
    '',
    createUser
);

export default router;