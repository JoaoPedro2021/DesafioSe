import "reflect-metadata";
import express from "express";
import "./database";
import { initializerRouter } from "./routes";
const app = express();

app.use(express.json());

initializerRouter(app);

app.listen(process.env.PORT || 3001, () => console.log("Server is running"!))

export default app;