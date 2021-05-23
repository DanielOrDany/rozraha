import {Users} from "../db/index.js";

export class GetUserUseCase {
    async getUserById(id) {
        const user = await new Users().get(id);

        console.log(`User with id = ${id} was found`);

        return user;
    }

    async getUsers() {
        const users = await new Users().getAll();

        console.log(`${users.size} users were found`);

        return users;
    }
}
