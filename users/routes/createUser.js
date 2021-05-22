import { verifyOnCreateNewUser } from "../../helpers/verifyOnCreateNewUser.js";
import { CreateUserUseCase }  from "../useCases/addNewUser.js";

export async function createUser(req, res) {
    try {
        const userData = req.body;

        const verified = verifyOnCreateNewUser(userData);

        if (!verified) {
            throw 'User data is not correct.';
        }

        const newUser = await new CreateUserUseCase().createUser(userData);

        if (newUser) {
            res.json({
                data: newUser
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