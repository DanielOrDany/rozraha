import {verifyOnCreateNewUser} from "../../helpers/verifyOnCreateNewUser.js";
import {EditUserUseCase} from "../useCases/editUser.js";

export async function editUser(req, res) {
    try {
        const id = req.params.id;
        const userData = req.body;

        const verified = verifyOnCreateNewUser(userData);

        if (!verified) {
            throw 'User data is not correct.';
        }

        const user = await new EditUserUseCase().editUser(id, userData);

        if (user) {
            res.json({
                data: user
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
