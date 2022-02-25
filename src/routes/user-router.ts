import { Router } from "express";

import { CreateUserController } from "../controller/user/create-user-controller";
import { DeleteUserController } from "../controller/user/delete-user-controller";
import { GetAllUserController } from "../controller/user/get-all-user-controller";
import { UpdateCepUserController } from "../controller/user/update-cep-user-controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();

export const userRouter = () => {
    router.post("/user",  new CreateUserController().handle);
    router.get("/users", isAuthenticated , new GetAllUserController().handle);
    router.delete("/user/:id", isAuthenticated, new DeleteUserController().handle)
    router.patch("/user/:id", new UpdateCepUserController().handle)

    return router;
}