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

export const updatePost = (id: string, { title, content, category, tags }: Post) => {
  return pool.query(
    "UPDATE posts SET title = $1, content = $2, category = $3, tags = $4, updated_at = NOW() WHERE id = $5 RETURNING *",
    [title, content, category, tags, id],
  );
};
