import { Request, Response } from "express";
import { MovieModel } from "../models/movies";
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
  }
}

export async function listMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();
    return res.status(200).json(movies);
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    return res.status(200).json(movie);
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function deleteMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findByIdAndDelete(id);
    return res.status(200).json({
      msg: "Movie deleted!",
    });
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;
    const movie = await MovieModel.findById(id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    await MovieModel.updateOne({ _id: id }, data);

    res.status(200).send(data)

  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
  }
}
