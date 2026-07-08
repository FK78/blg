import type { Request, Response } from "express";
import { createPost } from "../queries/postQueries.ts";

export async function postCreate(req: Request, res: Response) {
  try {
    const response = await createPost(req.body);
    res.status(201).json(response.rows[0]);
  } catch (err) {
    console.error(`Failed to create a post ${err}`);
    res.status(500).json({ error: "Failed to create post" });
  }
}
