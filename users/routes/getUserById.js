import {GetUserUseCase} from "../useCases/getUser.js";

export async function getUserById(req, res) {
    try {
        const id = req.params.id;

        const user = await new GetUserUseCase().getUserById(id);

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
