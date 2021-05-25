import {DeleteUserUseCase} from "../useCases/deleteUser.js";

export async function deleteUserById(req, res) {
    try {
        const id = req.params.id;

        const user = await new DeleteUserUseCase().deleteUser(id);

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
