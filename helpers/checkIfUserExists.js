import {GetUserUseCase} from "../users/routes/getUser.js";

export async function checkIfUserExists(id) {
    const user = await new GetUserUseCase().getUserById(id);

    if (user) {
        return true;
    } else {
        return false;
    }
}
