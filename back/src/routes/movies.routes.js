import { Router } from "express";
import { CMovies } from "../controllers/moviesControllers.js";
import { validationMovie } from "../middlewares/validation.js";

export const movieRouter = Router();

movieRouter.get("/", CMovies.getAllMovies);
movieRouter.post("/", validationMovie, CMovies.createMovie);
