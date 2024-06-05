import express from "express";
import { router } from "./routes/index.routes.js";
import morgan from "morgan";
import cors from "cors";

export const server = express();
// MIDDLEWARES
server.use(morgan("dev")); // libreria morgan
server.use(cors());
server.use(express.json());
// FIN MIDDLEWARES

server.use(router);
