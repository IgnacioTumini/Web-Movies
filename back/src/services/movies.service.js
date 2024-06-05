import { Movie } from "../models/Movie.js";

class ServiceMovies {
  constructor() {}
  async getAllMovies() {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.log(error);
    }
  }
  async createMovie(movie) {
    try {
      const newMovie = await Movie.create(movie);
      return newMovie;
    } catch (error) {
      console.log(error);
    }
  }
}
export const SMovies = new ServiceMovies();
