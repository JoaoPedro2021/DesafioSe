import { Router } from "express";

import { SignIn } from "../controller/login/login-user-controller";

const router = Router();

export const loginRouter = () => {
    router.post("/login",  new SignIn().handle);

    return router;
}