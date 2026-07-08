import type { Request, Response } from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  getPostsByQuery,
  updatePost,
} from "../queries/postQueries.ts";

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
    if (response.rows.length === 0) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
    res.status(200).json(response.rows[0]);
  } catch (err) {
    console.error(`Database error: ${err}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const postDelete = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const response = await deletePost(id);
    if (response.rowCount === 0) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
    res.status(204).send();
  } catch (err) {
    console.error(`Database error: ${err}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const postGet = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const response = await getPost(id);
    if (response.rows.length === 0) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
    res.status(200).json(response.rows[0]);
  } catch (err) {
    console.error(`Database error: ${err}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const postsGet = async (req: Request, res: Response) => {
  try {
    const term = req.query.term as string;
    if (term != undefined && term.trim() !== "") {
      const response = await getPostsByQuery(`%${term}%`);
      res.status(200).json(response.rows);
    } else {
      const response = await getPosts();
      res.status(200).json(response.rows);
    }
  } catch (err) {
    console.error(`Database error: ${err}`);
    res.status(500).json({ error: "Internal server error" });
  }
};
