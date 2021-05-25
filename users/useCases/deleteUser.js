import {Users} from "../db/index.js";

export class DeleteUserUseCase {
    async deleteUser(id) {
        const user = await new Users().delete(id);

        console.log(`User with id = ${id} was deleted`);

        return user;
    }
}
