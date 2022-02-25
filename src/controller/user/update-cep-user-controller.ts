import { Request, Response } from "express";
import { UpdateCepUser } from "../../services/user/update-cep-service";




export class UpdateCepUserController {
    async handle(request: Request, response: Response): Promise<any> {
        const { id } = request.body;

        const updateCep = new UpdateCepUser();

        const user = await updateCep.execute(id, request.body);

        if(user instanceof Error) {
            return response.status(400).json({message: user.message})
        }

        return response.status(200).json(user);
    }
}