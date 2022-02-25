import { Express } from "express";
// import { adressRouter } from "./adress-router";
import { loginRouter } from "./login-user-router";
import { userRouter } from "./user-router";

export const initializerRouter = (app: Express) => {
    app.use("", userRouter());
    app.use("", loginRouter());
    // app.use("", adressRouter())
}