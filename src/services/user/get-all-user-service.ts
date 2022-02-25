import { getRepository } from "typeorm";
import { User } from "../../entities/User";





export class GetAllUserService {
    async execute() :Promise<User[]> { 
        const repoUser = getRepository(User);

        const users = await repoUser.find();

        return users;
    }
}