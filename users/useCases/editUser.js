import {Users} from "../db/index.js";

export class EditUserUseCase {
    async editUser(id, data) {
        const user = await new Users().update(id, data);

        console.log(`User with id = ${id} was updated`);

        return user;
    }
}
