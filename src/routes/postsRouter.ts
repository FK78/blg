import express from "express"
import { postCreate } from "../controllers/postsController.ts"

const router = express.Router()

router.post('/', postCreate)

export default router