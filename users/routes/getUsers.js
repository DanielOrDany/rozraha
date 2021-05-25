import {GetUserUseCase} from "../useCases/getUser.js";

export async function getUsers(req, res) {
    try {
        const users = await new GetUserUseCase().getUsers();

        if (users) {
            res.json({
                data: users
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
