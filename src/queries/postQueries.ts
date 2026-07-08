import { pool } from "../db/db.ts";

type Post = {
  title: string,
  content: string,
  category: string,
  tags: string[]
}

export const createPost = ({ title, content, category, tags }: Post) => {
  return pool.query(
    "INSERT INTO posts(title, content, category, tags) VALUES ($1, $2, $3, $4) RETURNING *",
    [title, content, category, tags],
  );
};
