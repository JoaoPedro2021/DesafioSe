import { getRepository } from "typeorm";
import { User } from "../../entities/User";
import axios from "axios";


export class UpdateCepUser {
    async execute(id: string, data: any) {

        const repoUser = getRepository(User);

        const user = await repoUser.findOne(id)

        if(!user) {
        return new Error("User does not exists!")
        }

         
        let loc:any;

        await axios.get(`https://viacep.com.br/ws/${data.cep}/json/`)
        .then((res) => {
            loc.push(res.data)

        }).catch((err) => {
            return new Error("Erro ao consultar cep")
        })

        user.cep = loc

        return await repoUser.save({
            ...user,

        })
    }
}