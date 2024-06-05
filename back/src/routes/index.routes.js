import { Router } from "express";
import { movieRouter } from "./movies.routes.js";

export const router = Router();

router.use("/movies", movieRouter);
