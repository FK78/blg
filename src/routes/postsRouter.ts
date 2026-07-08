import express from "express"
import { postCreate, postDelete, postUpdate } from "../controllers/postsController.ts"
import { validate } from "../middleware/validate.ts"

const router = express.Router()

router.post('/', validate(["title", "content"]), postCreate)
router.put('/:id', validate(["title", "content"]), postUpdate)
router.delete('/:id', validate(["title", "content"]), postDelete)

export default router