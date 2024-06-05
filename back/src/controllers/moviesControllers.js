import { SMovies } from "../services/movies.service.js";

class ControllerMovies {
  async getAllMovies(req, res) {
    try {
      const movies = await SMovies.getAllMovies();
      res.status(200).send(movies);
    } catch (error) {
      console.log(error);
    }
  }
  async createMovie(req, res) {
    let { title, year, director, duration, genre, rate, poster } = req.body;
    try {
      let result = await SMovies.createMovie({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}
export const CMovies = new ControllerMovies();
