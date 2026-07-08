import type { Request, Response, NextFunction } from "express";

export const validate =
  (requiredFields: any[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const missing = requiredFields.filter((f) => !req.body[f]);
    if (missing.length) {
      return res
        .status(400)
        .json({ error: `Missing required fields: ${missing.join(" ")}` });
    }
    next();
  };
