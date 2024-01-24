import { Router, Request, Response } from "express";
import {
  createMovie,
  deleteMovie,
  findMovieById,
  listMovies,
  updateMovie,
} from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidator } from "./middleware/movieValidation";

const router = Router();

export default router
  .post("/movie", movieCreateValidator(), validate, createMovie)
  .get("/movies", listMovies)
  .get("/movie/:id", findMovieById)
  .delete("/delete-movie/:id", deleteMovie)
  .patch("/update-movie/:id", movieCreateValidator(), validate, updateMovie);
