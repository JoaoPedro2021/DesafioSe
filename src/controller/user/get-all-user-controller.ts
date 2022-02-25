import { Request, Response } from "express";
import { GetAllUserService } from "../../services/user/get-all-user-service";



export class GetAllUserController { 
    async handle(request: Request, response: Response): Promise<any> {

        const service = new GetAllUserService();

        const user = await service.execute();

        return response.json(user);
    }
}