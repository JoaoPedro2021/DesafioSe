import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/create-user-service";



export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, phone, password, cep} = request.body;

        const service = new CreateUserService();

        const result = await service.execute({
            name,
            email,
            phone,
            password,
            cep
        });

        if( result instanceof Error){
            return response.status(400).json({message: result.message})
        }
        return response.json(result);
    }
}