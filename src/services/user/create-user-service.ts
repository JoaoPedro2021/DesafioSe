import { getCustomRepository } from "typeorm"
import { UserRepository } from "../../repositories/userRepository"
import { User } from "../../entities/User"; 
import axios from 'axios';

interface UserProps{
    name: string;
    email: string;
    phone: string;
    password: string;
    cep: string
}


export class CreateUserService {
    async execute ({ name, email, phone, password , cep}: UserProps): Promise<User | Error> {

        if (!name || !email || !phone || !password || !cep) {
            return Error("invalid field!")
        }
        const userRepo = getCustomRepository(UserRepository);

        const userFound = await userRepo.findByEmail(email);

        if(userFound) {
            return Error("Email already exists!")
        }
        
        let loc:any;


        if(cep.length < 8 || cep.length > 8) {
            return new Error("CEP invalid!")
        }

        await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
            loc = res.data

        }).catch((err) => {
            return new Error("Erro ao consultar cep")
        })


        const newUser = userRepo.create({
            name,
            email,
            phone,
            password,
            cep: loc
        });

        await userRepo.save(newUser);

        return newUser;
    }
  }
  