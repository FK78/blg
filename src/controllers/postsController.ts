import type { Request, Response } from "express";
import { createPost, deletePost, updatePost } from "../queries/postQueries.ts";

export const postCreate = async (req: Request, res: Response) => {
  try {
    const response = await createPost(req.body);
    res.status(201).json(response.rows[0]);
  } catch (err) {
    console.error(`Failed to create a post ${err}`);
    res.status(500).json({ error: "Failed to create post" });
  }
};

export const postUpdate = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const response = await updatePost(id, req.body);
    res.status(200).json(response.rows[0]);
  } catch (err) {
    console.error(`Post not found ${err}`);
    res.status(404).json({ error: "Post not found" });
  }
};

export const postDelete = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const response = await deletePost(id);
    console.log(response)
    res.status(204).json(response.rows[0]);
  } catch (err) {
    console.error(`Post not found ${err}`);
    res.status(404).json({ error: "Post not found" });
  }
};
