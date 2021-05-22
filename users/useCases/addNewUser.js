import { Users } from "../db/index.js";

export class CreateUserUseCase {
    async createUser(data) {
        const newUser = await new Users().create(data);

        console.log("New user is created: ", newUser);

        return newUser;
    }
}